import { hcWithType } from "@repo/backend/hc";
import Cookies from "js-cookie";

export const hc = () =>
  hcWithType("http://localhost:8100", {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
