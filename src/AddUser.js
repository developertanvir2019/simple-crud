import React from 'react';
import { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({});


    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        console.log(user)


        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('user added successfully')
                }
            })


    }
    const handleBlr = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser)
        console.log(value, field);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleBlr} type="text" name='name' placeholder='name' /> <br />
                <input onChange={handleBlr} type="email" name="email" placeholder='email' />  <br />
                <input onChange={handleBlr} type="address" name="address" placeholder='address' />  <br />
                <button type="submit">Add user</button>
            </form>
        </div>
    );
};

export default AddUser;