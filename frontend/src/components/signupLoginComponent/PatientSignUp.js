import React, { useEffect, useState } from "react";
import { Card, CardBody, Collapse, Input, Button } from "reactstrap";
import { getPatientSignUpRequest } from "../../redux/actions/userAction";
import { toast } from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

const PatientSignUp = (props) =>{
    const dispatch = useDispatch();
    let signUpSuccessMessage = useSelector(state => state.user.patientSignUp);
    let signUpFailedMessage = useSelector(state => state.user.errorMessage)

    const [signUpInput, setSignInInput] = useState({ firstName: "", lastName: "", email: "", password: "" });

    const handleInputText = (target) => {
        const { name, value } = target;
        setSignInInput(prev => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const handleRegisterBtn = () => {
        dispatch(getPatientSignUpRequest(signUpInput))
    }

    useEffect(() => {
        if (signUpSuccessMessage) {
            toast.success(signUpSuccessMessage?.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
            })
        } else {
            toast.error(signUpFailedMessage?.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
            })
        }
    }, [signUpSuccessMessage, signUpFailedMessage]);


    return (
        <Collapse isOpen={props.collapse} className="mt-3">
            <Card>
                <CardBody>
                <label>Firstname</label>
                            <Input
                                className='mb-3'
                                type="text"
                                name="firstName"
                                value={signUpInput.firstName}
                                onChange={(e) => handleInputText(e.target)}
                                required></Input>
                            <label>Lastname</label>
                            <Input
                                className='mb-3'
                                type="text"
                                name='lastName'
                                value={signUpInput.lastName}
                                onChange={(e) => handleInputText(e.target)}
                                required></Input>
                            <label>Email</label>
                            <Input
                                className='mb-3'
                                type="text"
                                name='email'
                                value={signUpInput.email}
                                onChange={(e) => handleInputText(e.target)}
                                required></Input>
                            <label>Password</label>
                            <Input
                                className='mb-3'
                                type="text"
                                name='password'
                                value={signUpInput.password}
                                onChange={(e) => handleInputText(e.target)}
                                required></Input>                        
                            <Button onClick={handleRegisterBtn}>Register</Button>
                            {/* <Button onClick={props.handlePatientCollapse}>Cancel</Button>     */}
                </CardBody>
            </Card>
        </Collapse>
    )
}

export default PatientSignUp;