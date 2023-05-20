import { hasFields } from "../core"

export type Module = {
  session_id?: number,
  code: string,
}

const moduleFields = [
  "session_id",
  "code",
]

export function isModule(x: unknown): boolean {
  return hasFields(x, moduleFields);
}