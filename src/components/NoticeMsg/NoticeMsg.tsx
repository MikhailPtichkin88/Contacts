import React from 'react';
import {Button, Paper} from "@mui/material";
import {fetchContactsTC} from "../../reducer/contactsReducer/contactsReducerThunk";
import {useAppDispatch} from "../../customHooks/hooks";
import styles from './NoticeMsg.module.css';


const NoticeMsg = () => {

    const dispatch = useAppDispatch()
    const onClickHandler = () => {
        dispatch(fetchContactsTC())
    }

    return (
        <Paper className={styles.wrapper} elevation={3}>
            <div>
                <p className={styles.result}>Search result: 0</p>
                <p className={styles.descr}>No coincidences in email and comment fields</p>
            </div>
            <Button variant="contained"
                    className={styles.btn}
                    onClick={onClickHandler}>Upload contacts</Button>
        </Paper>
    );
};

export default NoticeMsg;