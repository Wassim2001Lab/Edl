import { hasFields } from "../core";

export type Role = "Admin" | "ViceDoyen" | "Professor" | "CFD" | "Applicant";

export type User = {
  id?: number;
  email: string;
  password?: string;
  role?: Role;
  nom?: string;
  domaine?: string;
  speciality?: string;
};

const userFields = [
  "id",
  "email",
  "password",
  "role",
  "nom",
  "domain",
  "specialty",
];

export function isUser(x: unknown): boolean {
  return hasFields(x, userFields);
}

export const usersList: User[] = [
  {
    id: 1,
    email: "@",
    password: "1",
    nom: "A",
    role: "ViceDoyen",
    domaine: "informatique",
  },
];

export type ApplicantAffectation = {
  session_id: number,
  applicant_id: number,
  encoding: string
}

const applicantAffectationFields = [
  "session_id",
  "applicant_id",
  "encoding",
]

export function isApplicantAffectation(x: unknown) {
  return hasFields(x, applicantAffectationFields);
}