import { hasFields } from "../core";

export type VirtualPlatform = {
  vd_id: number,
  name: string
};

const virtualPlatformFields = ["vd_id", "name"];

export function isVirtualPlatform(x: unknown): boolean {
  return hasFields(x, virtualPlatformFields)
}

export function isVirtualPlatformArray(x: unknown): boolean {
  return Array.isArray(x) && x.reduce((acc, x) => acc && isVirtualPlatform(x), true);
}

export const virtualPlatformList: VirtualPlatform[] = [
  {
    vd_id: 1,
    name: "info"
  },
  {
    vd_id: 2,
    name: "socio"
  }
]