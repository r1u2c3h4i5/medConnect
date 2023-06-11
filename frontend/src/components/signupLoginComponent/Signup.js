import React from 'react';
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import './Signup.css';

const Signup = () => {


    return(
        <Modal>
            <ModalHeader><h1 className='mb-5'>Register to MedConnect</h1></ModalHeader>
            <ModalBody>
                <Input className="sign-up-input w-50" type="text" placeholder="Firstname"></Input>
                <Input className="sign-up-input w-50" type="text" placeholder="Lastname"></Input>
                <Input className="sign-up-input w-50" type="text" placeholder="Email"></Input>
                <Input className="sign-up-input w-50" type="text" placeholder="Password"></Input>
            </ModalBody>
            <ModalFooter>
                <Button>Register</Button>
            </ModalFooter>
        </Modal>
    )
}

export default Signup;
