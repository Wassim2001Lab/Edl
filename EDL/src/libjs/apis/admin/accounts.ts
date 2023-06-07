import { option, task, taskEither, taskOption } from "fp-ts";
import {
  axiosConfig,
  handleAxiosError,
  hasFields,
  logAndReturn,
  serverUrlBase,
} from "../../core";
import { pipe } from "fp-ts/lib/function";
import { isUser, isUserArray, type User } from "../../model/User";
import axios from "axios";

export function getUsers(callback: (x: User[]) => void, failure: () => void) {
  pipe(
    taskEither.tryCatch(
      () => axios.get(`${serverUrlBase}/admin/`, axiosConfig),
      (e) => {
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in getUsers")
        );
      }
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.match(() => console.error("Bad payload"), callback)
  )();
}

export function getUser(
  callback: (x: User) => void,
  failure: () => void,
  id: number
) {
  pipe(
    taskEither.tryCatch(
      () => axios.get(`${serverUrlBase}/admin/${id}`, axiosConfig),
      (e) => {
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in getUser")
        );
      }
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.match(() => console.error("Bad payload"), callback)
  )();
}

export function deleteUser(
  callback: (x: User[]) => void,
  failure: () => void,
  id: number
) {
  pipe(
    taskEither.tryCatch(
      () => axios.delete(`${serverUrlBase}/admin/${id}`, axiosConfig),
      (e) => {
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in deleteUser")
        );
      }
    ),
    taskEither.match(
      () => console.error("bad payload"),
      (response) => {
        getUsers(callback, failure);
      }
    )
  )();
}

export function addUser(
  callback: (x: User[]) => void,
  failure: () => void,
  user: User
) {
  pipe(
    taskEither.tryCatch(
      () => axios.post(`${serverUrlBase}/admin/`, user, axiosConfig),
      (e) => {
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in addUser")
        );
      }
    ),
    taskEither.match(
      () => console.error("bad payload"),
      (response) => {
        getUsers(callback, failure);
      }
    )
  )();
}

export function updateUser(
  callback: (x: User[]) => void,
  failure: () => void,
  user: User
) {
  pipe(
    taskEither.tryCatch(
      () => axios.put(`${serverUrlBase}/admin/`, user, axiosConfig),
      (e) => {
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in updateUser")
        );
      }
    ),
    taskEither.match(
      () => console.error("bad payload"),
      (response) => {
        getUsers(callback, failure);
      }
    )
  )();
}
