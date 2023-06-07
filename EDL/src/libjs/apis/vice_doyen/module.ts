import { pipe } from "fp-ts/lib/function";
import { isModuleArray, type Module } from "../../model/Module";
import { taskEither, taskOption } from "fp-ts";
import axios from "axios";
import { axiosConfig, handleAxiosError, serverUrlBase } from "../../core";

export function get_modules(
  callback: (m: Module[]) => void,
  failure: () => void,
  session_id: number
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.get(
          `${serverUrlBase}/vice-doyen/module/session=${session_id}`,
          axiosConfig
        ),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("Unknown error get_session")
        )
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.filter(isModuleArray),
    taskOption.match(() => console.error("bad payload"), callback)
  );
}
export function create_module(
  callback: (m: Module[]) => void,
  failure: () => void,
  m: Module
) {
  pipe(
    taskEither.tryCatch(
      () => axios.post(`${serverUrlBase}/vice-doyen/module`, m, axiosConfig),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("Unknown error get_session")
        )
    ),
    taskEither.match(console.error, (r) => {
      get_modules(callback, failure, m.session_id as number);
    })
  )();
}
export function delete_module(
  callback: (m: Module[]) => void,
  failure: () => void,
  m: Module
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.delete(`${serverUrlBase}/vice-doyen`, {
          ...axiosConfig,
          data: m,
        }),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("Unknown error get_session")
        )
    ),
    taskEither.match(console.error, (r) => {
      get_modules(callback, failure, m.session_id as number);
    })
  )();
}
