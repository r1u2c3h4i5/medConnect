import React, { useState } from 'react';
import {  Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import './SignUp.css';
import 'react-toastify/dist/ReactToastify.css';
import PatientSignUp from './PatientSignUp';
import DoctorSignUp from './DoctorSignUp';
import { Button, Tab, Tabs } from '@mui/material';


const Signup = (props) => {
    const [patientCollapse, setPatientCollapse] = useState(false);
    const [doctorCollapse, setDoctorCollapse] = useState(false);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const handleCloseBtn = () => {
        props.signUpModalClose();
    }   

    const handlePatientCollapse = () => {
        setPatientCollapse(!patientCollapse);
    }

    const handleDoctorCollapse = () => {
        setDoctorCollapse(!doctorCollapse);
    }
     
    const handleTapChange = (e, tabIndex) =>{
        console.log(tabIndex, "index")
        setCurrentTabIndex(tabIndex);
    }
    return (
        <div>
            <Modal isOpen={props.isOpen} className="sign-up-modal">
                <ModalHeader>Register to MedConnect</ModalHeader>
                <ModalBody className='m-2 p-2'>
                    <Tabs value={currentTabIndex} onChange={handleTapChange}>
                        <Tab label="Patient" />
                        <Tab label = "Doctor" />
                    </Tabs>
                    {currentTabIndex === 0 && (                    
                            <PatientSignUp /> 
                    )}
                    {currentTabIndex === 1 &&(
                        <DoctorSignUp />            
                    )}

                    {/* <Button className='me-3'>Doctor</Button> */}
                    {/* <Button onClick={handlePatientCollapse}>Patient</Button> */}
                </ModalBody>
                <ModalFooter>
                    <Button variant='contained' onClick={handleCloseBtn}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Signup;