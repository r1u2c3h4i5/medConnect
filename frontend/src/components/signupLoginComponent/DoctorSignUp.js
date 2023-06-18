import React, { useEffect, useState } from "react";
import {  Input } from "reactstrap";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux';
import { getDoctorSignUpRequest } from "../../redux/actions/doctorAction";
import { Button } from "@mui/material";



const DoctorSignUp = () => {
    const dispatch = useDispatch();
    let signUpSuccessMessage = useSelector(state => state.doctor.doctorSignUp?.message);
    let signUpFailedMessage = useSelector(state => state.doctor.doctorSignUp?.message)
    const [signUpInput, setSignInInput] = useState({
        firstName: "", lastName: "", email: "",
        password: "", qualification: "", specialization: "", contactNo: ""
    });

    const handleInputText = (target) => {
        const { name, value } = target;
        setSignInInput(prev => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const handleRegisterBtn = () => {
        dispatch(getDoctorSignUpRequest(signUpInput))
    }


    useEffect(() => {
        if (signUpSuccessMessage) {
            toast.success(signUpSuccessMessage, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
            })
        } else {
            toast.error(signUpFailedMessage, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
            })
        }
    }, [signUpSuccessMessage, signUpFailedMessage]);

    return (
    <div>
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
                        type="password"
                        name='password'
                        value={signUpInput.password}
                        onChange={(e) => handleInputText(e.target)}
                        required></Input>

                    <label>Qaulification</label>
                    <Input
                        className='mb-3'
                        type="text"
                        name='qualification'
                        value={signUpInput.qualification}
                        onChange={(e) => handleInputText(e.target)}
                        required></Input>

                    <label>Specialization</label>
                    <Input
                        className='mb-3'
                        type="text"
                        name='specialization'
                        value={signUpInput.specialization}
                        onChange={(e) => handleInputText(e.target)}
                        required></Input>

                    <label>Contact No</label>
                    <Input
                        className='mb-3'
                        type="text"
                        name='contactNo'
                        value={signUpInput.contactNo}
                        onChange={(e) => handleInputText(e.target)}
                        required></Input>
                    <Button variant='contained' onClick={handleRegisterBtn}>Register</Button>
                </div>
    )
}

export default DoctorSignUp;