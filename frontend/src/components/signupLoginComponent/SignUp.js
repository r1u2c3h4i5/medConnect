import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import './SignUp.css';
import 'react-toastify/dist/ReactToastify.css';
import PatientSignUp from './PatientSignUp';


const Signup = (props) => {
    const [patientCollapse, setPatientCollapse] = useState(false);

    const handleCloseBtn = () => {
        props.signUpModalClose();
    }   

    const handlePatientCollapse = () => {
        setPatientCollapse(!patientCollapse);
    }

   
    return (
        <div>
            <Modal isOpen={props.isOpen} className="sign-up-modal">
                <ModalHeader>Register to MedConnect</ModalHeader>
                <ModalBody className='m-2 p-2'>
                    <Button className='me-3'>Doctor</Button>
                    <Button onClick={handlePatientCollapse}>Patient</Button>
                    <PatientSignUp collapse={patientCollapse} handlePatientCollapse={handlePatientCollapse}/>               
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleCloseBtn}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Signup;