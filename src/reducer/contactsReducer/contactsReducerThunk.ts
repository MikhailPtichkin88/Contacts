import {AppThunk} from "../store";
import {setStatusAC} from "../appReducer/appReducerActions";
import {contactsAPI, PostContactType} from "../../api/contacts-api";
import {AddContactAC, deleteContactAC, GetContactsAC, searchContactAC, updateContactAC} from "./contactsReducerActions";

export const fetchContactsTC = (): AppThunk => {
    return async (dispatch) => {
        dispatch(setStatusAC('loading'))
        try {
            let response = await contactsAPI.fetchContacts()
            dispatch(GetContactsAC(response))
            dispatch(setStatusAC('succeeded'))
        } catch (err) {
            console.warn(err)
            dispatch(setStatusAC('failed'))
        }
    }
}

export const CreateContactTC = (name: string, email: string, comment: string): AppThunk => {
    return async (dispatch) => {
        dispatch(setStatusAC('loading'))
        let data: PostContactType = {
            postId: Math.floor(Math.random() * 100),
            name,
            email,
            body: comment
        }
        try {
            let response = await contactsAPI.createPost(data)
            dispatch(AddContactAC(response))
            dispatch(setStatusAC('succeeded'))
        } catch (err) {
            console.warn(err)
            dispatch(setStatusAC('failed'))
        }
    }
}

export const updateContactTC = (contactId: number, key: string, value: string): AppThunk => {
    return (dispatch, getState) => {
        dispatch(setStatusAC('loading'))
        let data = getState().contacts.find(contact => contact.id === contactId)
        if (data) {
            Object.assign(data, {[key]: value})
            contactsAPI.updateContact(contactId, data)
                .then(res => {
                    dispatch(updateContactAC(contactId, res))
                    dispatch(setStatusAC('succeeded'))
                })
                .catch(err => {
                    console.warn(err)
                    dispatch(setStatusAC('failed'))
                })
        }
    }
}

export const deleteContactTC = (contactId: number): AppThunk => {
    return (dispatch) => {
        dispatch(setStatusAC('loading'))
        contactsAPI.deleteContact(contactId)
            .then(res => {
                dispatch(deleteContactAC(contactId))
                dispatch(setStatusAC('succeeded'))
            })
            .catch(err => {
                console.warn(err)
                dispatch(setStatusAC('failed'))
            })
    }
}

export const searchContactsTC = (text: string): AppThunk => {
    return (dispatch) => {
        dispatch(setStatusAC('loading'))
        contactsAPI.searchContacts(text)
            .then(res => {
                dispatch(searchContactAC(res))
                dispatch(setStatusAC('succeeded'))
            })
            .catch(err => {
                console.warn(err)
                dispatch(setStatusAC('failed'))
            })
    }
}