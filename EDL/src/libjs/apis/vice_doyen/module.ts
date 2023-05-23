import type { Module } from "../../model/Module";

export function get_modules(callback: (m: Module[]) => void, failure: () => void, session_id: number) { }
export function create_module(callback: (m: Module) => void, failure: () => void, m: Module) { }
export function delete_module(callback: (m: Module) => void, failure: () => void, m: Module) { }
