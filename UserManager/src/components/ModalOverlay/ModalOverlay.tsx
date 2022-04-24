import React from "react";
import Card from "../Card/Card";

import './ModalOverlay.css';

const ModalOverlay = (props:any) => {
    return (
        <Card className='modal'>
            {props.children}
        </Card>
    );
}

export default ModalOverlay;