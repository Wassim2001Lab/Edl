import type { Session } from "../../model/Session";


export function get_sessions(callBack: (s: Session[]) => void, failure: () => void) { }
export function create_session(callBack: (s: Session[]) => void, failure: () => void, s: Session) { }
export function delete_session(callBack: (s: Session) => void, failure: () => void, s: number) { }
export function update_session(callback: (s: Session) => void, failure: () => void, s: Session) { } 