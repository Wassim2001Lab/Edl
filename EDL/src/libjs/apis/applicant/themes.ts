import { pipe } from "fp-ts/lib/function";
import { themeDisplays, type Theme, type ThemeDisplay, type ThemeId } from "../../model/Theme";


export function getThemes(callBack: (c: ThemeDisplay[]) => void, failure: () => void, session_id: number) {
  pipe(
    themeDisplays,
    tds => tds.filter(td => td.t.session_id === session_id),
    tds => callBack(tds)
  )
}

export function chooseTheme(callback: () => void, failure: () => void, themeId: ThemeId) {
  callback();
} 