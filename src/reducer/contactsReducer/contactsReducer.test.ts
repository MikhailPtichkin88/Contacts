import {ContactsType} from "../../api/contacts-api";

import {contactsReducer} from './contactsReducer'
import {AddContactAC, deleteContactAC, GetContactsAC, updateContactAC} from "./contactsReducerActions";
let startState:ContactsType[] = []

beforeEach(()=>{
    startState = [
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam"
        },
        {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore"
        },
    ]
})

test('deleteContactAC should work correctly', ()=>{

    const result = contactsReducer(startState, deleteContactAC(1))

    expect(result.length).toBe(1)
    expect(result[0].email).toEqual(startState[1].email)
    expect(result[0].id).toBe(2)
})

test('addContactAC should work correctly', ()=>{

    const contact:ContactsType = {
        "postId": 1,
        "id": 5,
        "name": "vero eaque aliquid doloribus et culpa",
        "email": "Hayden@althea.biz",
        "body": "harum non quasi"
    }

    const result = contactsReducer(startState, AddContactAC(contact))

    expect(result.length).toBe(3)
    expect(result[0].id).not.toEqual(1)
    expect(result[0].body).toBe("harum non quasi")
    expect(result[2].email).toBe("Jayne_Kuhic@sydney.com")
})

test('UpdateContactAC should work correctly', ()=>{

    const contact:ContactsType = {
        "postId": 3,
        "id": 2,
        "name": "fugit labore quia mollitia quas",
        "email": "Veronica_Goodwin@timmothy.net",
        "body": "ut dolorum nostrum id quia"
    }

    const result = contactsReducer(startState, updateContactAC(2, contact))

    expect(result.length).toEqual(startState.length)
    expect(result[1].body).not.toEqual(startState[1].body)
    expect(startState[1].email).toBe("Jayne_Kuhic@sydney.com")
    expect(result[1].email).toBe("Veronica_Goodwin@timmothy.net")
})

test('getContactsAC should work correctly', ()=>{

    const contacts:ContactsType[] =[
        {
            "postId": 6,
            "id": 29,
            "name": "eum distinctio amet dolor",
            "email": "Jennings_Pouros@erica.biz",
            "body": "tempora voluptatem"
        },
        {
            "postId": 6,
            "id": 30,
            "name": "quasi nulla ducimus facilis non voluptas aut",
            "email": "Lurline@marvin.biz",
            "body": "consequuntur quia voluptate"
        },
    ]

    const result = contactsReducer(startState, GetContactsAC(contacts))

    expect(result.length).toEqual(4)
    expect(result[2].body).toEqual(contacts[0].body)
    expect(startState[1].email).toEqual(result[1].email)
    expect(result[3].body).toBe("consequuntur quia voluptate")
})