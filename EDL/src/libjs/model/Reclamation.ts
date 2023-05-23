import { hasFields } from "../core"

export type Reclamation = {
  applicant_id: number,
  module_id: string,
  session_id: number,
  content: string
}

const reclamationFields = [
  "applicant_id",
  "module_id",
  "session_id",
  "content",
]

export function isReclamation(x: unknown): boolean {
  return hasFields(x, reclamationFields);
}

export const reclamations: Reclamation[] = [];