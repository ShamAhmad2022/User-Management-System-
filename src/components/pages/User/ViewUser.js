import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import {ListGroup} from 'react-bootstrap';

function ViewUser() {

    const { userId } = useParams();

    const initialState = { name: "", username: "", email: "", phone: "", website: "" };
    const [user, setUser] = useState(initialState);

    const [address, setAddress] = useState({});

    const [company, setCompany] = useState({});

    useEffect(() => {
        fetchUser();
    }, []);


    const fetchUser = async () => {
        const response = await axios.get(`http://localhost:4000/users/${userId}`);
        setUser(response.data);
        setAddress(response.data.address);
        setCompany(response.data.company);
    }

    return (
        <div className='container'>
            <p className='display-2 m-4'>User ID: {user.id}</p>

            <ListGroup variant="flush" className='p-4'>
                <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                <ListGroup.Item>Username: {user.username}</ListGroup.Item>
                <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                <ListGroup.Item>Phone number: {user.phone}</ListGroup.Item>
                <ListGroup.Item>Website: {user.website}</ListGroup.Item>
                <ListGroup.Item>Adress: {address.city} | {address.street}</ListGroup.Item>
                <ListGroup.Item>Company: {company.name}</ListGroup.Item>
            </ListGroup>

            <Link to="/" className='btn btn-dark m-4'>Back</Link>
        </div>
    )
}

export default ViewUser
