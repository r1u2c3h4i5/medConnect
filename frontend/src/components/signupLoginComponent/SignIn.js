import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import './SignIn.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSignInFailed, getUserSignInRequest, getUserSignInSuccess } from '../../redux/actions/userAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = (props) => {
    const[signInText, setSignInText] = useState({email: "", password: ""});
    const dispatch = useDispatch();
    let signInSuccessMessage = useSelector(state => state.user.signIn?.message);
    let signInFailedMessage = useSelector(state => state.user.errorMessage?.message)


    const handleCloseBtn = () => {
        props.signInModalClose();
    }

    const handleInput = (e) =>{
        const{name, value} = e.target;
        setSignInText(prev => ({
            ...prev, [name]: value
        }))
    }

    const handleLogInbtn = () => {
        dispatch(getUserSignInRequest(signInText))
    }

    useEffect(() => {
        if (signInSuccessMessage) {
            toast.success(signInSuccessMessage, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
            })
            dispatch(getUserSignInSuccess(signInSuccessMessage, ""));
        } else {
            toast.error(signInFailedMessage, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
            })
            dispatch(getUserSignInFailed(signInFailedMessage, ""));
        }
    }, [signInSuccessMessage, signInFailedMessage]);

    return (
        <div>
            <Modal  isOpen={props.isOpen}  className="sign-up-modal">
                <ModalHeader>Register to MedConnect</ModalHeader>
                <ModalBody className='m-2 p-2'>
                    <label>Email</label>
                    <Input className='mb-3' type="email" value={signInText.email} name="email" onChange={(e) =>handleInput(e)}></Input>
                    <label>Password</label>
                    <Input className='mb-3' type="password" value={signInText.password} name="password" onChange={(e) =>handleInput(e)}></Input>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleLogInbtn}>LogIn</Button>
                    <Button onClick={handleCloseBtn}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default SignIn;
