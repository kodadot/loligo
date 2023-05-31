import { MARKETPLACE_FEE } from "./constants";

export function marketPlaceFeeFrom(amount: number | bigint) {
  return Number(amount) * MARKETPLACE_FEE;
}
