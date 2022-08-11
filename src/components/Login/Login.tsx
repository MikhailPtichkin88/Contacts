import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from './Login.module.css';
import {loginUser} from "../../api/auth-api";
import {Button, Paper, TextField} from "@mui/material";

type LoginPropsType = {
    setToken: (userToken: { token: string }) => void
}
type ErrorType = null | 'nameError' | 'passwordError'

export default function Login(props: LoginPropsType) {

    const [username, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<ErrorType>(null)

    const onChangeUserNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setUserName(e.currentTarget.value)
    }
    const onChangeUserPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setPassword(e.currentTarget.value)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!username.trim().length) {
            return setError('nameError')
        }
        if (!password.trim().length) {
            return setError('passwordError')
        }
        const token = await loginUser({
            username,
            password
        });
        props.setToken(token);
    }

    return (
        <div className={styles.wrapper}>
            <Paper elevation={3} className={styles.loginBlock}>
                <h1 className={styles.title}>Please Log In</h1>
                <form onSubmit={handleSubmit} className={styles.form}>

                    <TextField
                        value={username}
                        onChange={onChangeUserNameHandler}
                        name="username"
                        id="username"
                        label="Username"
                        variant="standard"
                        error={error === "nameError"}
                        helperText={error === "nameError" ? "Username field is empty" : ""}
                        margin="normal"
                    />

                    <TextField
                        type="password"
                        value={password}
                        onChange={onChangeUserPasswordHandler}
                        name="password"
                        id="password"
                        label="Password"
                        variant="standard"
                        error={error === "passwordError"}
                        helperText={error === "passwordError" ? "Password field is empty" : ""}
                        margin="normal"
                    />
                    <div className={styles.btn}>
                        <Button variant="contained" type="submit" className={styles.btn}>Log in</Button>
                    </div>

                </form>
            </Paper>
        </div>
    )
}


