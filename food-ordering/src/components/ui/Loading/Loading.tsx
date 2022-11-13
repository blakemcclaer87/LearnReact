import Card from "../Card/Card";
import React from "react";
import classes from './Loading.module.css';

const Loading = () => {
    return (
        <div className={classes.loading}>
            <Card>
                <h2>
                    Loading your meals....
                </h2>
            </Card>
        </div>
    );
};

export default Loading;

