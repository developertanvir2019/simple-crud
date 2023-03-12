import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storeUser = useLoaderData();
    console.log(storeUser.address);
    const [user, setUser] = useState(storeUser);


    const handleSubmit = e => {
        e.preventDefault();
        fetch(`http://localhost:5000/user/${storeUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated successfully')
                }
                console.log(data)
            })

    }


    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...storeUser }
        newUser[field] = value;
        setUser(newUser)
    }
    console.log(user)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" defaultValue={storeUser.name} name='name' placeholder='name' /> <br />
                <input onChange={handleChange} type="email" defaultValue={storeUser.email} name="email" placeholder='email' /> <br />
                <input onChange={handleChange} type="address" defaultValue={storeUser.address} name="address" placeholder='address' /> <br />
                <button type="submit">update user</button>
            </form>
        </div>
    );
};

export default Update;