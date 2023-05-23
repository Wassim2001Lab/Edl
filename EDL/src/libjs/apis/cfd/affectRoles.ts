import { pipe } from "fp-ts/lib/function";
import { sessions, type Session } from "../../model/Session";
import { usersList, type User } from "../../model/User";
import type { MonitorAffectation } from "../../model/MonitorAffectation";
import type { Module } from "../../model/Module";
import type { Result } from "../../model/Result";


export function get_sessions(callback: (s: Session[]) => void, failure: () => void) {
  pipe(
    sessions,
    s => callback(s)
  )
}

export function get_possible_monitors(callback: (m: User[]) => void, failure: () => void, session_id: number) {
  pipe(
    usersList,
    u => u.filter(u => u.role === "Professor"),
    u => callback(u)
  )
}

export function get_affected_monitors(callback: (m: User[]) => void, failure: () => void, session_id: number) {
  pipe(
    usersList,
    u => u.filter(u => u.role === "Professor"),
    u => callback(u)
  )
}

export function add_monitor(callBack: () => void, failure: () => void, monitor_affectation: MonitorAffectation) {
  callBack()
}

export function delete_monitor(callBack: () => void, failure: () => void, monitor_affectation: MonitorAffectation) {
  callBack()
}

export function get_possible_correctors(callback: (m: User[]) => void, failure: () => void, session_id: number) {
  pipe(
    usersList,
    u => u.filter(u => u.role === "Professor"),
    u => callback(u)
  )
}

export function get_modules(callback: (m: Module[]) => void, failure: () => void, session_id: number) {
  pipe(
    [],
    m => callback(m)
  )
}

export function get_applicants(callback: (m: User[]) => void, failure: () => void, session_id: number) {
  pipe(
    usersList,
    u => u.filter(u => u.role === "Applicant"),
    u => callback(u)
  )
}

export function create_result(callback: () => void, failure: () => void, res: Result) {
  callback()
}

export function get_results(callback: (rs: Result[]) => void, failure: () => void, session_id: number) {
  callback([])
}

export function end_session(callback: () => void, failure: () => void, session_id: number) {
  callback()
}




