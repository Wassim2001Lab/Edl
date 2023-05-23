import type { correctionDisplay } from "../../model/Result";
import type { Session } from "../../model/Session";

export function get_sessions(callback: (s: Session[]) => void, failure: () => void) { }
export function get_corrections(callBack: (c: correctionDisplay[]) => void, failure: () => void) { }
export function add_mark(callBack: (c: correctionDisplay[]) => void, failure: () => void) { }
export function add_theme(callback: () => void, failure: () => void) { }