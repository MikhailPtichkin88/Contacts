import React, {useEffect, useMemo} from 'react';
import {AppRootStateType} from "../reducer/store";
import {useSelector} from "react-redux";
import {ContactsType} from "../api/contacts-api";
import {useAppDispatch} from "../customHooks/hooks";
import Contact from "./Contact/Contact";
import {Container, LinearProgress, Paper} from "@mui/material";
import Header from "./Header/Header";
import {v1} from 'uuid';
import styles from './Contacts.module.css'
import AddContact from "./AddContact/AddContact";
import {RequestStatusType} from "../reducer/appReducer/appReducerTypes";
import {fetchContactsTC} from "../reducer/contactsReducer/contactsReducerThunk";
import NoticeMsg from "./NoticeMsg/NoticeMsg";


export default function Contacts() {

    const contacts = useSelector<AppRootStateType, ContactsType[]>(state => state.contacts)
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchContactsTC())
    }, [])

    let contactsList = useMemo(() => {
        return contacts.map(contact => {
            return <Paper key={v1()} className={styles.contact}>
                <Contact name={contact.name} email={contact.email} comment={contact.body}
                         id={contact.id}/>
            </Paper>
        })
    }, [contacts])


    return (
        <div className={styles.wrapper}>
            <Header/>
            {
                status === "loading"
                    ? <LinearProgress color={'info'}/>
                    : <div style={{height: "4px"}}/>
            }
            <Container fixed>
                <div className={styles.inner}>
                    <AddContact/>
                    {
                        contactsList
                    }
                    {
                        contactsList.length === 0 && <NoticeMsg/>
                    }
                </div>
            </Container>
        </div>
    );
}