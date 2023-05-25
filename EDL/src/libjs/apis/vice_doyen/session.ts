import { taskEither, taskOption } from "fp-ts";
import {
  isSessionArray,
  type Session,
  type UpdateSessionInput,
} from "../../model/Session";
import axios from "axios";
import { axiosConfig, handleAxiosError, serverUrlBase } from "../../core";
import { pipe } from "fp-ts/lib/function";

export function get_sessions(
  callBack: (s: Session[]) => void,
  failure: () => void
) {
  pipe(
    taskEither.tryCatch(
      () => axios.get(`${serverUrlBase}/vice-doyen`, axiosConfig),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("Unknown error get_session")
        )
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.filter(isSessionArray),
    taskOption.match(() => console.log("bad payload"), callBack)
  )();
}
export function create_session(
  callBack: (s: Session[]) => void,
  failure: () => void,
  s: Session
) {
  pipe(
    taskEither.tryCatch(
      () => axios.post(`${serverUrlBase}/vice-doyen`, s, axiosConfig),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("Unknown error get_session")
        )
    ),
    taskEither.match(console.error, (r) => {
      console.log(r);
      get_sessions(callBack, failure);
    })
  )();
}
export function delete_session(
  callBack: (s: Session[]) => void,
  failure: () => void,
  s: number
) {
  pipe(
    taskEither.tryCatch(
      () => axios.delete(`${serverUrlBase}/vice-doyen/${s}`, axiosConfig),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("Unknown error get_session")
        )
    ),
    taskEither.match(console.error, (r) => {
      console.log(r);
      get_sessions(callBack, failure);
    })
  )();
}
export function update_session(
  callback: (s: Session[]) => void,
  failure: () => void,
  s: UpdateSessionInput
) {
  pipe(
    taskEither.tryCatch(
      () => axios.put(`${serverUrlBase}/vice-doyen`, s, axiosConfig),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("Unknown error get_session")
        )
    ),
    taskEither.match(console.error, (r) => {
      console.log(r);
      get_sessions(callback, failure);
    })
  )();
}
