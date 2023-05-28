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
export function isModuleArray(x: unknown): boolean {
  return Array.isArray(x) && x.reduce((acc, x) => acc && isModule(x), true);
}

export const modules: Module[] = [
  {
    session_id: 1,
    code: "ALGO"
  },
  {
    session_id: 1,
    code: "ASD"
  },
  {
    session_id: 1,
    code: "ALG"
  }
]