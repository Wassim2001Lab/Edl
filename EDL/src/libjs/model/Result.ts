import { hasFields } from "../core"

export type Result = {
  applicant_id: number,
  module_id: string,
  session_id: number,

  corrector_1_id: number,
  corrector_2_id: number,
  corrector_3_id: number,

  note_1?: number,
  note_2?: number,
  note_3?: number,

  display_to_applicant?: boolean,
  display_to_cfd?: boolean,
}

const resultFields = [
  "applicant_id",
  "module_id",
  "session_id",
  "corrector_1_id",
  "corrector_2_id",
  "corrector_3_id",
  "note_1",
  "note_2",
  "note_3",
  "display_to_applicant",
  "display_to_cfd",
]

export function isResult(x: unknown): boolean {
  return hasFields(x, resultFields);
}

export type ResultDisplay = {
  note?: number,
  module: string
}

const resultDisplayFields = [
  "note",
  "module"
]

export function isResultDisplay(x: unknown): boolean {
  return hasFields(x, resultDisplayFields);
}

export type AddMarkInput = {
  applicant_id: number,
  module_id: string,
  session_id: number,
  note: number
}

const addMarkInputFields = [
  "applicant_id",
  "module_id",
  "session_id",
  "note",
]

export function isAddMarkInput(x: unknown): boolean {
  return hasFields(x, addMarkInputFields);
}


export type correctionDisplay = {
  result: Result,
  encoding: string
}

const correctionDisplayFields = [
  "result",
  "encoding"
];

export function isCorrectionDisplay(x: unknown) {
  return hasFields(x, correctionDisplayFields);
}