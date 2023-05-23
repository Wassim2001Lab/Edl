import { hasFields } from "../core"

export type Theme = {
  session_id: number,
  professor_id: number,
  title: string,
  content: string,
}

const themeFields = [
  "session_id",
  "professor_id",
  "title",
  "content"
]

export function isTheme(x: unknown): boolean {
  return hasFields(x, themeFields);
}

export type ThemeId = {
  session_id: number,
  professor_id: number,
  order: number
}

const themeIdFields = [
  "session_id",
  "professor_id",
  "order",
];

export function isThemeId(x: unknown): boolean {
  return hasFields(x, themeIdFields);
}

export type ThemeDisplay = {
  t: Theme,
  professor: string
}

const themeDisplayFields = [
  "t",
  "professor"
]

export function isThemeDisplay(x: unknown): boolean {
  return hasFields(x, themeDisplayFields);
}

export const themeDisplays: ThemeDisplay[] = [];