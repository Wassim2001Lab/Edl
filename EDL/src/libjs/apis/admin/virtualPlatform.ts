import { pipe } from "fp-ts/lib/function";
import { virtualPlatformList, type VirtualPlatform } from "../../model/VirtualPlatform";


export async function getVirtualPlatforms(callback: (v: VirtualPlatform[]) => void, failure: () => void) {
  callback(virtualPlatformList)
}

export async function deleteVirtualPlatform(callback: (v: VirtualPlatform[]) => void, failure: () => void, vd_id: number) {
  pipe(
    virtualPlatformList,
    vps => vps.filter(v => v.vd_id === vd_id),
    vps => callback(vps)
  )
}

export async function createVirtualPlatform(callback: (v: VirtualPlatform[]) => void, failure: () => void, v_p: VirtualPlatform) {
  pipe(
    virtualPlatformList,
    vps => [v_p, ...vps],
    vps => callback(vps)
  );
}