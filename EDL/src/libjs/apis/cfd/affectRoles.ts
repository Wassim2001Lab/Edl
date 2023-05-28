import { pipe } from "fp-ts/lib/function";
import { sessions, type Session, isSessionArray } from "../../model/Session";
import { usersList, type User, isUserArray } from "../../model/User";
import type { MonitorAffectation } from "../../model/MonitorAffectation";
import { isModuleArray, type Module } from "../../model/Module";
import { isResultArray, type Result } from "../../model/Result";
import { taskEither, taskOption } from "fp-ts";
import axios from "axios";
import { axiosConfig, handleAxiosError, serverUrlBase } from "../../core";
import { isBoolean } from "fp-ts/lib/boolean";

export function get_sessions(
  callback: (s: Session[]) => void,
  failure: () => void
) {
  pipe(
    taskEither.tryCatch(
      () => axios.get(`${serverUrlBase}/cfd`, axiosConfig),
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

export function get_possible_monitors(
  callback: (m: User[]) => void,
  failure: () => void,
  session_id: number
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.get(
          `${serverUrlBase}/cfd/monitor/session=${session_id}`,
          axiosConfig
        ),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in get_sessions")
        )
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.filter(isUserArray),
    taskOption.match(() => console.error("Bad payload"), callback)
  )();
}

export function get_affected_monitors(
  callback: (m: User[]) => void,
  failure: () => void,
  session_id: number
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.get(
          `${serverUrlBase}/cfd/monitor/session=${session_id},affected`,
          axiosConfig
        ),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in get_sessions")
        )
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.filter(isUserArray),
    taskOption.match(() => console.error("Bad payload"), callback)
  )();
}

export function add_monitor(
  callBack: () => void,
  failure: () => void,
  monitor_affectation: MonitorAffectation
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.post(
          `${serverUrlBase}/cfd/monitor`,
          monitor_affectation,
          axiosConfig
        ),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in get_sessions")
        )
    ),
    taskEither.match(console.error, (r) => {
      console.log(r);
      callBack();
    })
  )();
}

export function delete_monitor(
  callBack: () => void,
  failure: () => void,
  monitor_affectation: MonitorAffectation
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.delete(`${serverUrlBase}/cfd/monitor`, {
          ...axiosConfig,
          data: monitor_affectation,
        }),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in get_sessions")
        )
    ),
    taskEither.match(console.error, (r) => {
      console.log(r);
      callBack();
    })
  )();
}

export function get_possible_correctors(
  callback: (m: User[]) => void,
  failure: () => void,
  session_id: number
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.get(
          `${serverUrlBase}/cfd/result/correctors/session=${session_id}`,
          axiosConfig
        ),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in get_sessions")
        )
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.filter(isUserArray),
    taskOption.match(() => console.error("Bad payload"), callback)
  )();
}

export function get_modules(
  callback: (m: Module[]) => void,
  failure: () => void,
  session_id: number
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.get(
          `${serverUrlBase}/cfd/result/correctors/session=${session_id}`,
          axiosConfig
        ),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in get_sessions")
        )
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.filter(isModuleArray),
    taskOption.match(() => console.error("Bad payload"), callback)
  )();
}

export function get_applicants(
  callback: (m: User[]) => void,
  failure: () => void,
  session_id: number
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.get(
          `${serverUrlBase}/cfd/result/applicants/session=${session_id}`,
          axiosConfig
        ),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in get_sessions")
        )
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.filter(isUserArray),
    taskOption.match(() => console.error("Bad payload"), callback)
  )();
}

export function create_result(
  callback: () => void,
  failure: () => void,
  res: Result
) {
  pipe(
    taskEither.tryCatch(
      () => axios.post(`${serverUrlBase}/cfd/result`, res, axiosConfig),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in get_sessions")
        )
    ),
    taskEither.match(console.error, (r) => {
      console.log(r);
      callback();
    })
  )();
}

export function check_if_correction_ended(
  callback: (b: boolean) => void,
  failure: () => void,
  session_id: number
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.get(
          `${serverUrlBase}/cfd/result/ended_session=${session_id}`,
          axiosConfig
        ),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in get_sessions")
        )
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.filter(isBoolean),
    taskOption.match(() => console.error("Bad payload"), callback)
  )();
}

export function get_results(
  callback: (rs: Result[]) => void,
  failure: () => void,
  session_id: number
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.get(
          `${serverUrlBase}/cfd/result/session=${session_id}`,
          axiosConfig
        ),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in get_sessions")
        )
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.filter(isResultArray),
    taskOption.match(() => console.error("Bad payload"), callback)
  )();
}

export function end_session(
  callback: () => void,
  failure: () => void,
  session_id: number
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.post(
          `${serverUrlBase}/cfd/result/session=${session_id}`,
          {},
          axiosConfig
        ),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in get_sessions")
        )
    ),
    taskEither.match(console.error, (r) => {
      console.log(r);
      callback();
    })
  )();
}
