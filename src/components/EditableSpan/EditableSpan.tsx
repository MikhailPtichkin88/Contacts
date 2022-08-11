import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {TextField} from "@mui/material";


type EditableSpanPropsType = {
    title: string
    callback: (key: string, value: string) => void
    className?: string
    multiline: boolean
    field: string
}

export const EditableSpan = React.memo((props: EditableSpanPropsType) => {

    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState(props.title)
    let [error, setError] = useState(false)

    const setInputMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }

    const setSpanMode = () => setEditMode(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setTitle(e.currentTarget.value)
    }

    const changeTaskName = () => {
        setSpanMode()
        if (title.length > 0) {
            props.callback(props.field, title)
        } else {
            setError(true)
        }
    }

    const enterHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            if (title.length > 0) {
                props.callback(props.field, title)
                setSpanMode()
            } else {
                setError(true)
            }
        }
    }

    return (
        editMode
            ? <TextField value={title}
                         onBlur={changeTaskName}
                         onChange={onChangeHandler}
                         autoFocus
                         size="small"
                         onKeyDown={enterHandler}
                         error={error}
                         helperText={error ? "Empty field" : ""}
                         multiline={props.multiline}
                         style={{minWidth: "60%"}}
                         fullWidth={props.multiline}
            />
            : <span onDoubleClick={setInputMode}
                    className={props.className}>{props.title}</span>
    )
})