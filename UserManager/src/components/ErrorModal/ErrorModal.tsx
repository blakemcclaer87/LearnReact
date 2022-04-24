import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button/Button';
import Backdrop from '../Backdrop/Backdrop';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import './ErrorModal.css';

const ErrorModal = (props: any) => {

    return (
        <>         
            {ReactDOM.createPortal(
                <Backdrop onDismiss={props.onDismiss}></Backdrop>, (document.getElementById('backdrop-root') as HTMLElement)
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>
                    <header className='header'>
                        <h2>
                            {props.title}
                        </h2>
                    </header>
                    <div className='content'>
                        <p>
                            {props.message}
                        </p>
                    </div>
                    <footer className='actions'>
                        <Button onClick={props.onDismiss}>OK</Button>
                    </footer>
                </ModalOverlay>,
                (document.getElementById('overlay-root') as HTMLElement)
            )}
        </>
    )
};

export default ErrorModal;