import React from 'react';
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import './SignIn.css';

const SignIn = (props) => {

    const handleCloseBtn = () => {
        props.signInModalClose();
    }
    return (
        <div>
            <Modal  isOpen={props.isOpen}  className="sign-up-modal">
                <ModalHeader>Register to MedConnect</ModalHeader>
                <ModalBody className='m-2 p-2'>
                    <label>Email</label>
                    <Input className='mb-3' type="text"></Input>
                    <label>Password</label>
                    <Input className='mb-3' type="text"></Input>
                </ModalBody>
                <ModalFooter>
                    <Button>LogIn</Button>
                    <Button onClick={handleCloseBtn}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default SignIn;
