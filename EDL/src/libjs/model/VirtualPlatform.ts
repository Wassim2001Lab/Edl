import { hasFields } from "../core";

export type VirtualPlatform = {
  vd_id: number,
  name: string
};

const virtualPlatformFields = ["vd_id", "name"];

export function isVirtualPlatform(x: unknown): boolean {
  return hasFields(x, virtualPlatformFields)
}
