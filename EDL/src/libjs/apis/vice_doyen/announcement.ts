import { pipe } from "fp-ts/lib/function";
import { isAnnouncementArray, type Announcement } from "../../model/Session";
import { taskEither, taskOption } from "fp-ts";
import axios from "axios";
import { axiosConfig, handleAxiosError, serverUrlBase } from "../../core";

export function get_announcement(
  callback: (a: Announcement[]) => void,
  failure: () => void,
  session_id: number
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.get(
          `${serverUrlBase}/vice-doyen/announcement/session=${session_id}`,
          axiosConfig
        ),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("Unknown error get_session")
        )
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.filter(isAnnouncementArray),
    taskOption.match(() => console.error("bad payload"), callback)
  );
}
export function create_announcement(
  callback: (a: Announcement[]) => void,
  failure: () => void,
  a: Announcement
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.post(`${serverUrlBase}/vice-doyen/announcement`, a, axiosConfig),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("Unknown error get_session")
        )
    ),
    taskEither.match(console.error, (r) => {
      get_announcement(callback, failure, a.session_id);
    })
  )();
}
export function delete_announcement(
  callback: () => void,
  failure: () => void,
  a_id: number
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.delete(
          `${serverUrlBase}/vice-doyen/announcement/${a_id}`,
          axiosConfig
        ),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("Unknown error get_session")
        )
    ),
    taskEither.match(console.error, (r) => {
      callback();
    })
  )();
}
