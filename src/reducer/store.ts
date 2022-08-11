import {applyMiddleware, combineReducers} from "redux";
import { legacy_createStore as createStore} from 'redux'
import {contactsReducer} from "./contactsReducer/contactsReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {appReducer} from "./appReducer/appReducer";
import {AppReducerActionType} from "./appReducer/appReducerTypes";
import {ContactsActionType} from "./contactsReducer/contactsReducerTypes";


const rootReducer = combineReducers({
    contacts: contactsReducer,
    app:appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionType = ContactsActionType | AppReducerActionType
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AppActionType>


