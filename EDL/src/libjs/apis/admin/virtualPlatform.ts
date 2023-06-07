import { pipe } from "fp-ts/lib/function";
import {
  virtualPlatformList,
  type VirtualPlatform,
  isVirtualPlatformArray,
} from "../../model/VirtualPlatform";
import axios from "axios";
import { axiosConfig, handleAxiosError, serverUrlBase } from "../../core";
import { taskEither, taskOption } from "fp-ts";

export async function getVirtualPlatforms(
  callback: (v: VirtualPlatform[]) => void,
  failure: () => void
) {
  pipe(
    taskEither.tryCatch(
      () => axios.get(`${serverUrlBase}/admin/virtual-platform`, axiosConfig),
      (e) => {
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in getVirtualPlatform")
        );
      }
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.match(() => console.error("Bad payload"), callback)
  )();
}

export async function deleteVirtualPlatform(
  callback: (v: VirtualPlatform[]) => void,
  failure: () => void,
  vd_id: number
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.delete(
          `${serverUrlBase}/admin/virtual-platform/${vd_id}`,
          axiosConfig
        ),
      (e) => {
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in getVirtualPlatform")
        );
      }
    ),
    taskEither.match(
      () => console.error("bad payload"),
      (response) => {
        getVirtualPlatforms(callback, failure);
      }
    )
  )();
}

export async function createVirtualPlatform(
  callback: (v: VirtualPlatform[]) => void,
  failure: () => void,
  v_p: VirtualPlatform
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.post(`${serverUrlBase}/admin/virtual-platform`, v_p, axiosConfig),
      (e) => {
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in getVirtualPlatform")
        );
      }
    ),
    taskEither.match(
      () => console.error("bad payload"),
      (response) => {
        getVirtualPlatforms(callback, failure);
      }
    )
  )();
}
