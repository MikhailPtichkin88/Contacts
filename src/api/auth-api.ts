import axios from "axios";

type CredentialType = {
    username: string
    password: string
}

export function loginUser(credentials: CredentialType) {
    return axios.post<{ token: string }>('http://localhost:8080/login', {credentials})
        .then(data => data.data)
}