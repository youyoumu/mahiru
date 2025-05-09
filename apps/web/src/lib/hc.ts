import { env } from "#/env";
import { hcWithType } from "@repo/backend/hc";
import Cookies from "js-cookie";

const beUrl = env.DEV ? env.VITE_BE_URL_DEV : env.VITE_BE_URL;

export const hc = () =>
  hcWithType(beUrl, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
