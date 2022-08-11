import {AddContactAC, deleteContactAC, GetContactsAC, searchContactAC, updateContactAC} from "./contactsReducerActions";
import {ContactsType} from "../../api/contacts-api";

export type ContactsStateType = Array<ContactsType>
export type ContactsActionType =
    GetContactsACType
    | AddContactACType
    | DeleteContactACType
    | UpdateContactACType
    | USearchContactACType
type GetContactsACType = ReturnType<typeof GetContactsAC>
type AddContactACType = ReturnType<typeof AddContactAC>
type DeleteContactACType = ReturnType<typeof deleteContactAC>
type UpdateContactACType = ReturnType<typeof updateContactAC>
type USearchContactACType = ReturnType<typeof searchContactAC>