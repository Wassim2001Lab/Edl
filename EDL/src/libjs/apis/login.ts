import { navigate } from "svelte-navigator";
import { decodeJwt, hasFields, logAndReturn, setJwt } from "../core";
import { pipe } from "fp-ts/lib/function";
import { option } from "fp-ts";

export type Role = "Admin" | "ViceDoyen" | "Professor" | "CFD" | "Applicant";

export type Credentials = {
  password: string;
  username: string;
};

const credentialsField: string[] = ["password", "username"];
export function isCredentials(x: unknown): boolean {
  return hasFields(x, credentialsField);
}



const users: Credentials[] = [
  { password: "1", username: "A" },
  { password: "1", username: "B" },
  { password: "1", username: "C" },
  { password: "1", username: "D" },
  { password: "1", username: "E" },
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

export const login = (credentials: Credentials): void => pipe(
  users.find(
    (u) => u.password === credentials.password && u.username === credentials.username
  ),
  logAndReturn,
  option.fromNullable,
  option.chain(c => option.fromNullable(jwts_by_username.get(c.username))),
  option.chain(jwt => {
    setJwt(jwt);
    return option.fromNullable(jwt);
  }),
  option.chain(jwt => option.fromNullable(decodeJwt(jwt))),
  option.match(() => {
    console.log("Wrong credentials");
    navigate("/login");
  }, (user_data) => {
    console.log(`Welcome ${user_data.email} your role is ${user_data.role}`);
    navigate(`/${user_data.role.toLowerCase()}`)
  })
)

export function logout() {
  localStorage.removeItem("Auth");
  navigate("/login");
}