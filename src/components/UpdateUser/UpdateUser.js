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
    },[]);

    // update
    const handleNameChange = (e) =>{
        const updatedName = e.target.value;
        const updatedUser = {name: updatedName, email: user.email};
        setUser(updatedUser);
    }

    const handleEmailChange = (e) =>{
        const updatedEmail = e.target.value;
        const updatedUser = {name: user.name , email: updatedEmail};
        setUser(updatedUser);
    }

    const handleUserUpdate = (e) =>{
        e.preventDefault();
        const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert("User updated successfully.");
                setUser({});
            }
        })

    };

    return (
        <div>
            <h2>Update User Name: {user.name}</h2>
            <p>{id}</p>
            <p>Email: {user.email}</p>
            <form onSubmit={handleUserUpdate}>
                <input onChange={handleNameChange} type="text" name="" id="" value={user.name || ''} /> <br />
                <input onChange={handleEmailChange} type="email" name="" id="" value={user.email || ''} /> <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;