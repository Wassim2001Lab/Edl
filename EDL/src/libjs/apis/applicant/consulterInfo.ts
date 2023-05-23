import { pipe } from "fp-ts/lib/function";
import { sessions, type Session, type Announcement, announcements } from "../../model/Session";
import type { ClassmentEntry } from "../../model/ClassmentEntry";
import { classmentEntries } from "../../model/ClassmentEntry";


export async function getSessions(callBack: (s: Session[]) => void, failure: () => void) {
  pipe(
    sessions,
    s => callBack(s)
  );
}

export async function getAnnouncements(callBack: (a: Announcement[]) => void, failure: () => void) {
  pipe(
    announcements,
    a => callBack(a)
  );
}

export async function getResults(callBack: (c: ClassmentEntry[]) => void, failure: () => void) {
  pipe(
    classmentEntries,
    c => callBack(c)
  );
}