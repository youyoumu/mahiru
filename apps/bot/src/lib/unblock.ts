import { retry } from "es-toolkit";
import { Agent, fetch as undiciFetch, type Dispatcher } from "undici";

export interface DoHResponse {
  Status: number;
  TC: boolean;
  RD: boolean;
  RA: boolean;
  AD: boolean;
  CD: boolean;
  Question: {
    name: string;
    type: number;
  }[];
  Answer: {
    name: string;
    type: number;
    data: string;
  }[];
}

interface CacheEntry {
  ips: string[];
  timestamp: number;
}

const DEFAULT_CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export class Unblock {
  #cache = new Map<string, CacheEntry>();
  #cacheTtl: number;

  constructor(options?: { cacheTtl?: number }) {
    this.#cacheTtl = options?.cacheTtl ?? DEFAULT_CACHE_TTL;
  }

  async #resolveDomainWithCache(domain: string): Promise<string[]> {
    const cached = this.#cache.get(domain);
    if (cached && Date.now() - cached.timestamp < this.#cacheTtl) return cached.ips;

    const url = new URL("https://cloudflare-dns.com/dns-query");
    url.searchParams.set("type", "A");
    url.searchParams.set("name", domain);

    const response = await fetch(url, { headers: { Accept: "application/dns-json" } });
    const data = (await response.json()) as DoHResponse;
    const addresses = data.Answer.filter((record) => record.type === 1).map(
      (record) => record.data,
    );
    if (addresses.length === 0) throw new Error(`No IP found for domain: ${domain}`);

    this.#cache.set(domain, { ips: addresses, timestamp: Date.now() });
    return addresses;
  }

  async fetch(url: string, init?: Parameters<typeof undiciFetch>[1]) {
    const reqUrl = new URL(url);
    const servername = reqUrl.hostname;
    const ips = await this.#resolveDomainWithCache(servername);

    let ipIndex = 0;
    return retry(async () => {
      const ip = ips[ipIndex++];
      if (!ip) throw new Error("Unreachable code");
      const agent = Unblock.#createAgent(ip, servername);
      return undiciFetch(url, {
        ...init,
        dispatcher: agent,
      });
    }, ips.length);
  }

  static #createAgent(resolvedIp: string, servername: string): Dispatcher {
    return new Agent({
      connect: {
        lookup: (_hostname, _opts, callback) => {
          callback(null, [{ address: resolvedIp, family: 4 }]);
        },
        servername,
      },
    });
  }
}
