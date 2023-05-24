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

export function isClassmentEntryArray(x: unknown): boolean {
  return Array.isArray(x) && x.reduce((acc, x) => acc && isClassmentEntry(x), true);
}

export const classmentEntries: ClassmentEntry[] = [
  {
    email: "a@gmail.com",
    classment: 1,
    avg: 14.5
  },
  {
    email: "b@gmail.com",
    classment: 2,
    avg: 13.5
  },
  {
    email: "c@gmail.com",
    classment: 3,
    avg: 12.5
  },
] 