import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Button, Paper, TextField} from "@mui/material";
import styles from "./AddContact.module.css"
import {useAppDispatch} from "../../customHooks/hooks";
import {CreateContactTC} from "../../reducer/contactsReducer/contactsReducerThunk";


const AddContact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    const [error, setError] = useState<null | string>(null)

    const dispatch = useAppDispatch()

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!name.trim().length) {
            return setError('nameError')
        }
        if (!email.trim().length) {
            return setError('emailError')
        }

        dispatch(CreateContactTC(name, email, comment))
        setName('')
        setEmail('')
        setComment('')
    }

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setError(null)
        setName(e.currentTarget.value)
    }

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setError(null)
        setEmail(e.currentTarget.value)
    }

    const onChangeCommentHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setComment(e.currentTarget.value)
    }

    return (
        <Paper className={styles.wrapper}>
            <form onSubmit={onSubmitHandler} className={styles.form}>
                <TextField value={name}
                           onChange={onChangeNameHandler}
                           id="name" label="Name"
                           error={error === "nameError"}
                           helperText={error === "nameError" ? 'Empty name field' : ''}
                           variant="standard"/>
                <TextField value={email}
                           onChange={onChangeEmailHandler}
                           id="email" label="Email" variant="standard"
                           error={error === "emailError"}
                           helperText={error === "emailError" ? 'Empty email field' : ''}/>
                <TextField value={comment}
                           onChange={onChangeCommentHandler}
                           id="comment" label="Comment" variant="standard" multiline rows={4} fullWidth/>
                <Button type='submit' variant="contained" className={styles.btn}>Create</Button>
            </form>
        </Paper>
    );
};

export default AddContact;