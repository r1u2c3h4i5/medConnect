import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getDoctorListRequest } from '../../redux/actions/doctorAction';
import {Table} from 'reactstrap';

const DoctorList = () => {
    const dispatch = useDispatch();
    const doctorsList = useSelector(state => state?.doctor?.doctorObj)

    useEffect(() => {
        dispatch(getDoctorListRequest());
    },[])
    return (
        <div>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Qualification</th>
                        <th>Specialization</th>
                        <th>ConsultFees</th>
                        <th>Contact No</th>
                    </tr>
                </thead>
                <tbody>
                    {doctorsList ? doctorsList.map(item =>(
                        <tr key={item._id}>
                            <td>{item.firstName}</td>
                            <td>{item.lastname}</td>
                            <td>{item.qualification}</td>
                            <td>{item.specialization}</td>
                            <td>{item.consultfees}</td>
                            <td>{item.contactNo}</td>
                        </tr>
                    )) :  null}
                </tbody>
            </Table>
        </div>
    )
}

export default DoctorList;