import React, { useImperativeHandle, useRef } from "react";
import classes from './Input.module.css';

const Input = (props: any, ref: any) => {

    //ref pointer to the input element
    //
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
        <div className={classes.input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input {...props.input}/>
        </div>
    );
};

export default Input;