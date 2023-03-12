import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const user = useLoaderData();
    const [displayUser, setDisplayUser] = useState(user);
    const handleDelete = us => {
        const agree = window.confirm(`are you sure to delete`, us.name);
        if (agree) {
            fetch(`http://localhost:5000/user/${us._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('user deleted successfully')
                        const remainingUser = displayUser.filter(usr => usr._id !== us._id)
                        setDisplayUser(remainingUser)
                    }
                    console.log(data)
                });
        }
    }
    return (
        <div>
            {
                displayUser.map(us => <h2 key={us._id}>
                    {us.name} --- email:{us.email}
                    <button onClick={() => handleDelete(us)}>X</button>
                    <Link to={`update/${us._id}`}><button >update</button></Link>
                </h2>)
            }
        </div>
    );
};

export default Home;