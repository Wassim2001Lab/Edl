import { pipe } from "fp-ts/lib/function";
import {
  isCorrectionDisplayArray,
  type correctionDisplay,
  type AddMarkInput,
} from "../../model/Result";
import { isSessionArray, type Session } from "../../model/Session";
import { taskEither, taskOption } from "fp-ts";
import axios from "axios";
import { axiosConfig, handleAxiosError, serverUrlBase } from "../../core";
import { isThemeArray, type Theme } from "../../model/Theme";

export function get_sessions(
  callback: (s: Session[]) => void,
  failure: () => void
) {
  pipe(
    taskEither.tryCatch(
      () => axios.get(`${serverUrlBase}/professor/session`, axiosConfig),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in get_sessions")
        )
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.filter(isSessionArray),
    taskOption.match(() => console.error("Bad payload"), callback)
  )();
}
export function get_corrections(
  callBack: (c: correctionDisplay[]) => void,
  failure: () => void,
  session_id: number
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.get(
          `${serverUrlBase}/professor/corrections/session=${session_id}`,
          axiosConfig
        ),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in get_sessions")
        )
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.filter(isCorrectionDisplayArray),
    taskOption.match(() => console.error("Bad payload"), callBack)
  )();
}
export function add_mark(
  callBack: (c: correctionDisplay[]) => void,
  failure: () => void,
  ami: AddMarkInput
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.post(`${serverUrlBase}/professor/corrections`, ami, axiosConfig),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in get_sessions")
        )
    ),
    taskEither.match(console.error, (r) => {
      get_corrections(callBack, failure, ami.session_id);
    })
  )();
}

export function get_themes(
  callback: (theme: Theme[]) => void,
  failure: () => void,
  session_id: number
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.get(
          `${serverUrlBase}/professor/theme/session=${session_id}`,
          axiosConfig
        ),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in get_sessions")
        )
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.filter(isThemeArray),
    taskOption.match(() => console.error("Bad payload"), callback)
  )();
}

export function add_theme(
  callback: () => void,
  failure: () => void,
  theme: Theme
) {
  pipe(
    taskEither.tryCatch(
      () => axios.post(`${serverUrlBase}/professor/theme`, theme, axiosConfig),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in get_sessions")
        )
    ),
    taskEither.match(console.error, (r) => {
      callback();
    })
  )();
}
