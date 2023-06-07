import { pipe } from "fp-ts/lib/function";
import {
  reclamations,
  type Reclamation,
  isReclamation,
  isReclamationArray,
} from "../../model/Reclamation";
import { taskEither, taskOption } from "fp-ts";
import axios from "axios";
import { axiosConfig, handleAxiosError, serverUrlBase } from "../../core";

export async function getReclamation(
  callBack: (c: Reclamation[]) => void,
  failure: () => void,
  session_id: number
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.get(
          `${serverUrlBase}/applicant/reclamation/session=${session_id}`,
          axiosConfig
        ),
      (e) =>
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in getVirtualPlatform")
        )
    ),
    taskOption.fromTaskEither,
    taskOption.map((r) => r.data),
    taskOption.filter(isReclamationArray),
    taskOption.match(() => console.error("Bad payload"), callBack)
  );
}

export async function addReclamation(
  callback: (c: Reclamation[]) => void,
  failure: () => void,
  reclamation: Reclamation
) {
  pipe(
    taskEither.tryCatch(
      () =>
        axios.post(`${serverUrlBase}/reclamation`, reclamation, axiosConfig),
      (e) => {
        handleAxiosError(e, failure, () =>
          console.error("unknown Error in getVirtualPlatform")
        );
      }
    ),
    taskEither.match(console.error, () => {
      getReclamation(callback, failure, reclamation.session_id);
    })
  )();
}
