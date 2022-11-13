import Card from "../Card/Card";
import React from "react";
import classes from './ErrorNotification.module.css';

const ErrorNotification = (props: any) => {
    return (
        <Card>
            <h2>
                {props.errorMessage}
            </h2>
        </Card>
    )
};

export default ErrorNotification;