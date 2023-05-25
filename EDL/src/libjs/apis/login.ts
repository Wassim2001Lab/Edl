import { navigate } from "svelte-navigator";
import { axiosConfig, decodeJwt, hasFields, logAndReturn, serverUrlBase, setJwt } from "../core";
import { pipe } from "fp-ts/lib/function";
import { option, task, taskEither, taskOption } from "fp-ts";
import type { Role } from "../model/User";
import axios, { type AxiosResponse } from "axios";
import { isString } from "fp-ts/lib/string";

export type Credentials = {
  password: string;
  email: string;
};

const credentialsField: string[] = ["password", "email"];
export function isCredentials(x: unknown): boolean {
  return hasFields(x, credentialsField);
}



const users: Credentials[] = [
  { password: "1", email: "A" },
  { password: "1", email: "B" },
  { password: "1", email: "C" },
  { password: "1", email: "D" },
  { password: "1", email: "E" },
];

const jwts_by_username = new Map<string, string>([
  [
    "A",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZSIsInVzZXJfZGF0YSI6eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBlbWFpbC5jb20iLCJwYXNzd29yZCI6bnVsbCwicm9sZSI6IkFkbWluIiwiZG9tYWluZSI6bnVsbCwic3BlY2lhbHR5IjpudWxsfSwiZXhwIjoxNjgwMzQ4NjkxMzc2fQ.DbkAAxPv5jCcrMUzfc6YwUq9Vf9KdjSh0pz5evCmPZE",
  ],
  [
    "B",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZSIsInVzZXJfZGF0YSI6eyJpZCI6MjEsImVtYWlsIjoiQSIsInBhc3N3b3JkIjpudWxsLCJyb2xlIjoiVmljZURveWVuIiwiZG9tYWluZSI6IkluZm9ybWF0aXF1ZSIsInNwZWNpYWx0eSI6bnVsbH0sImV4cCI6MTY4MDMzMTIzOTQ2OH0.myUFn1mKYS2V8Kg9CF2nXOIAT7MaACfTmyvUtMZ2Bfg",
  ],
  ["C", "eke"],
  ["D", "eke"],
  ["E", "eke"],
]);

export const login = (credentials: Credentials, failure: () => void) => pipe(
  taskEither.tryCatch(() => axios.post(`${serverUrlBase}/auth/login`, credentials, axiosConfig), e => {
    alert("Bad Credentials");
    failure();
  }),
  taskOption.fromTaskEither,
  taskOption.chain(r =>
    isString(r.data) ?
      taskOption.fromNullable(r.data) :
      taskOption.none
  ),
  taskOption.chain(jwt => {
    setJwt(jwt);
    return taskOption.some(jwt);
  }),
  taskOption.chain(jwt => taskOption.fromNullable(decodeJwt(jwt))),
  logAndReturn,
  taskOption.match(() => console.error("Bad Payload"), jpl => navigate(`/${jpl.role.toLowerCase()}`))
)()

export function logout() {
  localStorage.removeItem("Auth");
  navigate("/login");
}
