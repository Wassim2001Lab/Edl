import { hasFields } from "../core"

export type MonitorAffectation = {
  session_id: number,
  professor_id: number,
}

const monitorAffectationFields = [
  "session_id",
  "professor_id",
]

export function isMonitorAffectation(x: unknown): boolean {
  return hasFields(x, monitorAffectationFields);
}