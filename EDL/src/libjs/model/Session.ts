import { hasFields } from "../core"

export type Session = {
  id?: number,
  virtual_platform_id: number,
  cfd_id: number,
  starting_time: number,
  ending_time: number,
  room_number: number,
}

const sessionFields = [
  "id",
  "virtual_platform_id",
  "cfd_id",
  "starting_time",
  "ending_time",
  "room_number"
]

export function isSession(x: unknown): boolean {
  return hasFields(x, sessionFields);
}

export function isSessionArray(x: unknown): boolean {
  return Array.isArray(x) && x.reduce((acc, x) => acc && isSession(x), true);
}

export const sessions: Session[] = [
  {
    id: 1,
    virtual_platform_id: 1,
    cfd_id: 1,
    starting_time: 1293,
    ending_time: 3932,
    room_number: 2,
  }
];

export type Announcement = {
  id?: number,
  title: string,
  content: string,
  session_id: number,
}

const announcementFields = [
  "id",
  "title",
  "content",
  "session_id"
]

export function isAnnouncement(x: unknown): boolean {
  return hasFields(x, announcementFields);
}

export function isAnnouncementArray(x: unknown): boolean {
  return Array.isArray(x) && x.reduce((acc, x) => acc && isAnnouncement(x), true);
}

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "jfzz",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    session_id: 1
  },
  {
    id: 2,
    title: "jfzz",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    session_id: 1
  },
]

export type UpdateSessionInput = {
  id: number,
  cfd_id: number,
  starting_time: number,
  ending_time: number,
  room_number: number,
}

const updateSessionInputFields = [
  "id",
  "cfd_id",
  "starting_time",
  "ending_time",
  "room_number",
]

export function isUpdateSessionInput(x: unknown) {
  return hasFields(x, updateSessionInputFields);
}

export function isUpdateSessionInputArray(x: unknown): boolean {
  return Array.isArray(x) && x.reduce((acc, x) => acc && isUpdateSessionInput(x), true);
}