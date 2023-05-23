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

export const sessions: Session[] = [];

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

export const announcements: Announcement[] = []

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

export function isUpdateSessionInputFields(x: unknown) {
  return hasFields(x, updateSessionInputFields);
}