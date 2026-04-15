# hadolint global ignore=DL3008
FROM node:24-trixie-slim AS node

FROM node AS base
RUN apt-get update && \
  apt-get install -y --no-install-recommends \ 
  curl ca-certificates xz-utils sudo && \
  rm -rf /var/lib/apt/lists/* && \
  mkdir -m 0755 /nix && chown node /nix && \
  mkdir -m 0755 /apps && chown node /apps
RUN npm install -g pnpm@10.33.0 turbo@2.9.6

FROM base AS builder
USER node
WORKDIR /apps/mahiru
COPY . .
RUN turbo prune @repo/backend --docker

FROM base AS installer
USER node
WORKDIR /apps/mahiru
COPY --from=builder /apps/mahiru/out/json .
RUN --mount=type=cache,id=pnpm,mode=0755,uid=1000,gid=1000,target=/apps/mahiru/.pnpm-store \
  pnpm config set store-dir /apps/mahiru/.pnpm-store && \
  pnpm install --frozen-lockfile
COPY --from=builder /apps/mahiru/out/full .
RUN turbo run build
CMD ["sh", "-c", "mkdir -p storage && DATABASE_URL=file:../../storage/local.db pnpm -F @repo/db run migrate && pnpm -F @repo/backend start"]
