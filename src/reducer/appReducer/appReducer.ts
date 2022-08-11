import {SET_STATUS} from "./AppReducerConstants";
import {AppReducerActionType, RequestStatusType} from "./appReducerTypes";

type InitialStateType = typeof initialState

const initialState = {
    status: "idle" as RequestStatusType,
}

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionType) => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.payload.status}
        default:
            return state
    }
}






