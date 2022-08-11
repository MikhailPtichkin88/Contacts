import {SET_STATUS} from "./AppReducerConstants";
import {RequestStatusType} from "./appReducerTypes";


export const setStatusAC = (status:RequestStatusType)=>({type: SET_STATUS,payload:{status}} as const);