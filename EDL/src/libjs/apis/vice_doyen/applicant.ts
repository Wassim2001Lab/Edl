import type { ApplicantAffectation, User } from "../../model/User";

export function get_applicants(callback: (affected: User[], available: User[]) => void, failure: () => void, session_id: number) { }
export function affect_applicant(callback: (affected: User[], available: User[]) => void, failure: () => void, af: ApplicantAffectation) { }
export function encode_applicant(callBack: () => void, failure: () => void, af: ApplicantAffectation) { }
export function delete_affectation(callback: (affected: User[], available: User) => void, failure: () => void, af: ApplicantAffectation) { }

