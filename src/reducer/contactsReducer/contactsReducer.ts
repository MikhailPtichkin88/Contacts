import {ContactsActionType, ContactsStateType} from "./contactsReducerTypes";
import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS, SEARCH_CONTACTS, UPDATE_CONTACT} from "./contactsReducerConstants";

const initialState: ContactsStateType = []

export const contactsReducer = (state: ContactsStateType = initialState, action: ContactsActionType): ContactsStateType => {

    switch (action.type) {
        case GET_CONTACTS:
            return [...state, ...action.payload.contacts]
        case ADD_CONTACT:
            return [action.payload.contact, ...state]
        case DELETE_CONTACT:
            return state.filter(contact => contact.id !== action.payload.contactId)
        case UPDATE_CONTACT:
            return state.map(contact => contact.id === action.payload.contactId ? {...action.payload.contact} : contact)
        case SEARCH_CONTACTS:
            return action.payload.contacts
        default:
            return state
    }

}


