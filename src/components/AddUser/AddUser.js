import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleAddUser = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = { name, email };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    e.target.reset()
                }
            })

    }
    return (
        <div>
            <h2>This is Add User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" placeholder="Name" ref={nameRef} /> <br />
                <input type="email" name="" id="" placeholder="Email" ref={emailRef} /> <br />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;