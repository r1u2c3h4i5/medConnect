import React, { useState } from 'react';
import { Button, Input, Nav, NavItem, NavLink } from 'reactstrap';
import './Home.css';
import Signup from '../signupLoginComponent/Signup';
// import  {useNavigate} from 'react-router-dom';


const Home = () => {
    const [modal, setModal] = useState(false);

    const handleSignUp = () => {
        setModal(!modal);
    }

    function isSignupModalOpen(){

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
                    <Button className='m-2'>LogIn</Button>
                    <Button className='m-2' onClick={handleSignUp}>SignUp <Signup isOpen={modal} isSignupModalOpen={isSignupModalOpen} /></Button>
                </div>
            </div>
            <div className='home-search d-flex justify-content-center'>
                <Input className="w-50" type='search' placeholder='search for Doctor'></Input>
            </div>
            <div className='home-screen-img'>
                <img  className='w-75' src='/assests/images/HomeScreenImg.jpg' alt='home'></img>
            </div>
        </div>
    )
}

export default Home;