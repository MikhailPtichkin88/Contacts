import {ContactsType} from "../../api/contacts-api";
import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS, SEARCH_CONTACTS, UPDATE_CONTACT} from "./contactsReducerConstants";

export const GetContactsAC = (contacts: ContactsType[]) => {
    return {type: GET_CONTACTS, payload: {contacts}} as const
}

export const AddContactAC = (contact: ContactsType) => {
    return {type: ADD_CONTACT, payload: {contact}} as const
}

export const deleteContactAC = (contactId: number) => {
    return {type: DELETE_CONTACT, payload: {contactId}} as const
}

export const updateContactAC = (contactId: number, contact: ContactsType) => {
    return {type: UPDATE_CONTACT, payload: {contactId, contact}} as const
}

export const searchContactAC = (contacts: ContactsType[]) => {
    return {type: SEARCH_CONTACTS, payload: {contacts}} as const
}