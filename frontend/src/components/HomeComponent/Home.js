import React, { useState } from 'react';
import { Input, Nav, NavItem, NavLink } from 'reactstrap';
import './Home.css';
import SignUp from '../signupLoginComponent/SignUp';
import SignIn from '../signupLoginComponent/SignIn';
import Button from '@mui/material/Button';



const Home = () => {
    const [signUpModal, setSignUpModal] = useState(false);
    const [signInModal, setSignInModal] = useState(false);

    const handleOpenSignUp = () => {
        setSignUpModal(!signUpModal);
    }

    const signUpModalClose = () => {
        setSignUpModal(!signUpModal);
    }

    const handleOpenSignIn = () => {
        setSignInModal(!signInModal);
    }

    const signInModalClose = () => {
        setSignInModal(!signInModal);
    }

    return (
        <div className='container mt-4'>
            <div className='d-flex justify-content-around shadow-sm'>
                <h4 className=''>MedConnect</h4>
                <Nav horizontal='center'>

                    <NavItem>
                        <NavLink href='#' className='font-weight-bold text-dark'>Find Doctor</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#' className='font-weight-bold text-dark'>Find Hospital</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#' className='font-weight-bold text-dark'>Department</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#' className='font-weight-bold text-dark'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#' className='font-weight-bold text-dark'>Contact</NavLink>
                    </NavItem>
                </Nav>
                <div>
                    <Button variant='contained' className='m-2' onClick={handleOpenSignIn}>LogIn</Button>
                    <Button variant='contained' className='m-2' onClick={handleOpenSignUp}>SignUp</Button>                    
                </div>
            </div>
            <div className='home-search d-flex justify-content-center'>
                <Input className="w-50" type='search' placeholder='search for Doctor'></Input>
            </div>
            <div className='home-screen-img'>
                <img  className='w-75' src='/assests/images/HomeScreenImg.jpg' alt='home'></img>
            </div>
            <SignUp isOpen={signUpModal} signUpModalClose={signUpModalClose} />
            <SignIn isOpen={signInModal} signInModalClose={signInModalClose} />

        </div>
    )
}

export default Home;