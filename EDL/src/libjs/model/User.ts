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

export function isUserArray(x: unknown): boolean {
  return Array.isArray(x) && x.reduce((acc, x) => acc && isUser(x), true);
}

export const usersList: User[] = [
  {
    id: 1,
    email: "a@",
    password: "1",
    nom: "A",
    role: "ViceDoyen",
    domaine: "informatique",
  },
  {
    id: 2,
    email: "b@",
    password: "1",
    nom: "B",
    role: "CFD",
    domaine: "informatique"
  },
  {
    id: 3,
    email: "c@",
    password: "1",
    nom: "C",
    role: "Professor",
    domaine: "informatique",
    speciality: "GL"
  },
  {
    id: 4,
    email: "d@",
    password: "1",
    nom: "D",
    role: "Professor",
    domaine: "informatique",
    speciality: "GL"
  },
  {
    id: 5,
    email: "e@",
    password: "1",
    nom: "E",
    role: "Applicant",
    domaine: "informatique",
    speciality: "GL"
  },
  {
    id: 6,
    email: "f@",
    password: "1",
    nom: "F",
    role: "Applicant",
    domaine: "informatique",
    speciality: "GL"
  },
  {
    id: 5,
    email: "e@",
    password: "1",
    nom: "E",
    role: "Applicant",
    domaine: "informatique",
    speciality: "GL"
  }
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

export function isApplicantAffectationArray(x: unknown): boolean {
  return Array.isArray(x) && x.reduce((acc, x) => acc && isApplicantAffectation(x), true);
}