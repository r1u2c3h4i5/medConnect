import React from 'react';
import { Button,Card, CardBody,  CardImg, CardSubtitle, CardTitle } from 'reactstrap';

const Cards = () => {
    return (
            <Card style={{width: '18rem' , marginRight: "40px"}}>
                <CardImg  src='/assests/images/doctorAvatar.webp' alt='DoctorImg' width="100%" top />
                <CardBody>
                    <CardTitle tag="h5">img</CardTitle>
                    <CardSubtitle className='mb-2 text-muted' tag="h6">ddd</CardSubtitle>
                    <Button color='warning'>Book Appointment</Button>
                </CardBody>
            </Card>
    )
}

export default Cards;