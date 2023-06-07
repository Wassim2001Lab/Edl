import { hasFields } from "../core";

export type Role = "Admin" | "ViceDoyen" | "Professor" | "CFD" | "Applicant";

export type User = {
  id?: number;
  email: string;
  password?: string;
  role?: Role;
  domaine?: string;
  specialty?: string;
};

const userFields = ["id", "email", "password", "role", "domain", "specialty"];

export function isUser(x: unknown): boolean {
  return hasFields(x, userFields);
}

export function isUserArray(x: unknown): boolean {
  return Array.isArray(x) && x.reduce((acc, x) => acc && isUser(x), true);
}

export type ApplicantAffectation = {
  session_id: number;
  applicant_id: number;
  encoding: string;
};

const applicantAffectationFields = ["session_id", "applicant_id", "encoding"];

export function isApplicantAffectation(x: unknown) {
  return hasFields(x, applicantAffectationFields);
}

export function isApplicantAffectationArray(x: unknown): boolean {
  return (
    Array.isArray(x) &&
    x.reduce((acc, x) => acc && isApplicantAffectation(x), true)
  );
}
