import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])


    return (
        <div>
            <h2>Update User Name: {user.name}</h2>
            <p>{id}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UpdateUser;