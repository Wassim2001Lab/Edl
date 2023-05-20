import { option } from "fp-ts";
import { hasFields } from "../../core";
import { pipe } from "fp-ts/lib/function";
import type { User } from "../../model/User";
import { usersList } from "../../model/User";

export function getUsers(callback: (x: User[]) => void, failure: () => void) {
  callback(usersList);
}

export function getUser(
  callback: (x: User) => void,
  failure: () => void,
  id: number
) {
  pipe(
    usersList.find((u) => u.id === id),
    u => option.fromNullable(u),
    option.match(failure, callback)
  );
}

export function deleteUser(
  callback: (x: User[]) => void,
  failure: () => void,
  id: number
) {
  pipe(
    usersList,
    us => us.filter(u => u.id === id),
    us => callback(us)
  )
}


export function addUser(
  callback: (x: User[]) => void,
  failure: () => void,
  user: User
) {
  pipe(
    usersList,
    us => [user, ...us],
    (us) => callback(us),
  )
}

export function updateUser(
  callback: (x: User[]) => void,
  failure: () => void,
  user: User
) {
  pipe(
    usersList,
    us => us.map(u => u.id === user.id ? { ...u, ...user } : u),
    us => callback(us)
  )
}

