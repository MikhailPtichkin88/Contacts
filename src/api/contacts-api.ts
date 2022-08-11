import axios, {AxiosResponse} from "axios";

export type ContactsType = PostContactType & { id: number }

export type PostContactType = {
    postId: number
    name: string
    email: string
    body: string
}

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export const contactsAPI = {

    fetchContacts() {
        return instance.get<ContactsType[]>('/comments?_limit=20')
            .then(res => res.data)
    },

    createPost(data: PostContactType) {
        return instance.post<ContactsType>('/comments', data)
            .then(res => res.data)
    },

    updateContact(contactId: number, data: ContactsType) {
        return instance.put<ContactsType>(`/comments/${contactId}`, data)
            .then(res => res.data)
    },

    deleteContact(contactId: number) {
        return instance.delete<AxiosResponse<{}>>(`/comments/${contactId}`)
            .then(res => res)
    },

    searchContacts(text: string) {
        return instance.get<ContactsType[]>(`/comments?q=${text}`)
            .then(res => res.data)
    }
}