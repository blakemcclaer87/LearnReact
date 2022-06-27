import React from "react";
import classes from './Input.module.css';

//forward ref as it's a custom component
//
const Input = React.forwardRef((props: any, ref: any) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    );
});

export default Input;