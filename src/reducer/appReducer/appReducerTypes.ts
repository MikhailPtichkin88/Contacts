import {setStatusAC} from "./appReducerActions";


export type AppReducerActionType = ReturnType<typeof setStatusAC>
export type RequestStatusType = "loading" | "idle" | "succeeded" | "failed"
