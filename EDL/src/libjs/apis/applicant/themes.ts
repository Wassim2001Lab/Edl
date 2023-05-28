import { pipe } from "fp-ts/lib/function";
import {
  themeDisplays,
  type Theme,
  type ThemeDisplay,
  type ThemeId,
  isThemeDisplayArray,
} from "../../model/Theme";
import { taskEither, taskOption } from "fp-ts";
import axios from "axios";
import { axiosConfig, handleAxiosError, serverUrlBase } from "../../core";

export function getThemes(
  callBack: (c: ThemeDisplay[]) => void,
  failure: () => void,
  session_id: number
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.get(`${serverUrlBase}/theme/session=${session_id}`, axiosConfig),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in getVirtualPlatform")
        )
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.filter(isThemeDisplayArray),
    taskOption.match(() => console.error("Bad payload"), callBack)
  )();
}

export function chooseTheme(
  callback: () => void,
  failure: () => void,
  themeId: ThemeId
) {
  pipe(
    taskEither.tryCatch(
      () => axios.post(`${serverUrlBase}/theme`, themeId, axiosConfig),
      (e) => {
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in getVirtualPlatform")
        );
      }
    ),
    taskEither.match(console.error, () => {
      console.log;
      callback();
    })
  )();
}
