import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export function SaveBtn({ type = "default", className, children, onClick }) {

    const [show, setAlert] = useState(false);

    const closeWindow = () => setAlert(false);

    const showAlert = () => setAlert(true);

    const click = () => {
        showAlert()
        onClick()
    };

    return (
        
        <>
            <button onClick={click} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
                {children}
            </button>

            <Modal show={show} onHide={closeWindow}>
                <Modal.Header closeButton>
                    <Modal.Title>Book Saved</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="warning" onClick={closeWindow}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>      
        
    );
};

export function DeleteBtn({ type = "default", className, children, onClick }) {
    return (
        <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
            {children}
        </button>
    );
}
