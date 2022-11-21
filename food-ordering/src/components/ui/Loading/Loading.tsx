import Card from "../Card/Card";
import React from "react";
import classes from './Loading.module.css';

const Loading = () => {
    return (
        <div className={classes.loading}>
            <Card>
                <div className={classes.loadingcontainer}>
                    <h2>
                        Loading your meals....
                    </h2>
                    <div className={classes['lds-default']}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Loading;

