import type { Announcement } from "../../model/Session";

export function get_announcement(callback: (a: Announcement[]) => void, failure: () => void, session_id: number) { }
export function create_announcement(callback: (a: Announcement[]) => void, failure: () => void, a: Announcement) { }
export function delete_announcement(callback: (a: Announcement[]) => void, failure: () => void, a_id: number) { }
