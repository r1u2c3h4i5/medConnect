import React, { useEffect, useState } from "react";
import { Input } from "reactstrap";
import { getPatientSignUpFailed, getPatientSignUpRequest, getPatientSignUpSuccess } from "../../redux/actions/patientAction";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@mui/material";

const PatientSignUp = () => {
    const dispatch = useDispatch();
    let signUpSuccessMessage = useSelector(state => state.patient.patientSignUp?.message);
    let signUpFailedMessage = useSelector(state => state.patient.errorMessage?.message)
 
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
            toast.success(signUpSuccessMessage, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
            })
            dispatch(getPatientSignUpSuccess(signUpSuccessMessage, ""));
        } else {
            toast.error(signUpFailedMessage, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
            })
            dispatch(getPatientSignUpFailed(signUpFailedMessage, ""));
        }
    }, [signUpSuccessMessage, signUpFailedMessage]);


    return (
        <div>
            <label className="mt-3">Firstname</label>
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
                type="email"
                name='email'
                value={signUpInput.email}
                onChange={(e) => handleInputText(e.target)}
                required></Input>
            <label>Password</label>
            <Input
                className='mb-3'
                type="password"
                name='password'
                value={signUpInput.password}
                onChange={(e) => handleInputText(e.target)}
                required></Input>
            <Button variant='contained' onClick={handleRegisterBtn}>Register</Button>
        </div>
    )
}

export default PatientSignUp;