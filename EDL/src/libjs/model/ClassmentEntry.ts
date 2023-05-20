import { hasFields } from "../core"

export type ClassmentEntry = {
  email: string,
  classment: number,
  avg?: number
}

const classmentEntryFields = [
  "email",
  "classment",
  "avg",
]

export function isClassmentEntry(x: unknown): boolean {
  return hasFields(x, classmentEntryFields);
}