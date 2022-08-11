import React, {ChangeEvent, useState} from 'react';
import {AppBar, Container, IconButton, TextField, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Header.module.css'
import {useAppDispatch} from "../../customHooks/hooks";
import {searchContactsTC} from "../../reducer/contactsReducer/contactsReducerThunk";

const Header = () => {

    const [value, setValue] = useState('')
    const [error, setError] = useState(false)

    const dispatch = useAppDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setError(false)
        setValue(e.currentTarget.value)
    }

    const onClickHandler = () => {
        if (!value.trim().length) {
            return setError(true)
        }
        dispatch(searchContactsTC(value))
        setValue('')
    }

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    Contacts
                </Typography>
                <Container fixed>
                    <TextField id="filled-basic"
                               hiddenLabel
                               error={error}
                               value={value}
                               placeholder={error ? "Empty value" : "Search..."}
                               onChange={onChangeHandler}
                               size={'small'}
                               variant="outlined"
                               color={"primary"}
                               className={styles.searchInput}/>
                    <IconButton aria-label="delete" onClick={onClickHandler} className={styles.btn}>
                        <SearchIcon sx={{color: "white"}}/>
                    </IconButton>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;