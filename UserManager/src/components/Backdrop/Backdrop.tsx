import React from "react";

import './Backdrop.css';

const Backdrop = (props: any) => {
    return (
        <div className='backdrop' onClick={props.onDismiss}/>
    )
}

export default Backdrop;