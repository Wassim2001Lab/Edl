import { pipe } from "fp-ts/lib/function";
import { reclamations, type Reclamation } from "../../model/Reclamation";

export async function getReclamation(callBack: (c: Reclamation[]) => void, failure: () => void, session_id: number) {
  pipe(
    reclamations,
    rs => rs.filter(r => r.session_id === session_id),
    r => callBack(r)
  );
}

export async function addReclamation(callback: (c: Reclamation[]) => void, failure: () => void, reclamation: Reclamation) {
  pipe(
    reclamations,
    rs => [reclamation, ...rs],
    rs => callback(rs)
  )
}