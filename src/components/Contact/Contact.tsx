import React from 'react';
import {Divider, IconButton} from "@mui/material";
import styles from './Contact.module.css'
import {EditableSpan} from "../EditableSpan/EditableSpan";
import DeleteIcon from '@mui/icons-material/Delete';
import {useAppDispatch} from "../../customHooks/hooks";
import {deleteContactTC, updateContactTC} from "../../reducer/contactsReducer/contactsReducerThunk";

type ContactPropsType = {
    id: number
    name: string
    email: string
    comment: string
}

const Contact = (props: ContactPropsType) => {

    const dispatch = useAppDispatch()
    const onChangeInfoHandler = (key: string, value: string) => {
        dispatch(updateContactTC(props.id, key, value))
    }
    const onDeleteHandler = () => {
        dispatch(deleteContactTC(props.id))
    }

    return (
        <div className={styles.wrapper}>
            <IconButton aria-label="delete" size="large"
                        className={styles.deleteBtn}
                        onClick={onDeleteHandler}>
                <DeleteIcon fontSize="inherit"/>
            </IconButton>

            <div className={styles.nameBlock}>
                <h4 className={styles.title}>Name:</h4>
                <EditableSpan title={props.name} className={styles.nameEdit} multiline={false}
                              callback={onChangeInfoHandler} field={'name'}/>
            </div>
            <Divider/>
            <div className={styles.emailBlock}>
                <h4 className={styles.title}>Email:</h4>
                <EditableSpan title={props.email} className={styles.emailEdit} multiline={false}
                              callback={onChangeInfoHandler} field={'email'}/>
            </div>
            <Divider/>
            <div className={styles.commentBlock}>
                <h4 className={styles.title}>Comment:</h4>
                <EditableSpan title={props.comment} className={styles.commentEdit} multiline={true}
                              callback={onChangeInfoHandler} field={'body'}/>
            </div>
        </div>
    );
};

export default Contact;