import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Workflows.css'

const Workflows = ({callback}) => {
    const [user, setUser] = useState([]);

    const fetchData = () => {
        return fetch("https://64307b10d4518cfb0e50e555.mockapi.io/workflow")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="container">
            <div className='column'>
                <div className='header'>NAME</div>
                {user && user.length > 0 && user.map((userObj, index) => (
                    <Link to='/workflow' onClick={() => callback(userObj.name)} className={`block ${index%2===0?'even':'odd'}`} key={userObj.id} >{userObj.name}</Link>
                ))}
            </div>
            <div className='column'>
                <div className='header'>Input Type</div>
                {user && user.length > 0 && user.map((userObj, index) => (
                    <div className={`block ${index%2===0?'even':'odd'}`} key={userObj.id}>{userObj.input_type}</div>
                ))}
            </div>
            <div className='column'>
                <div className='header'>Created At</div>
                {user && user.length > 0 && user.map((userObj, index) => (
                    <div className={`block ${index%2===0?'even':'odd'}`} key={userObj.id}>{userObj.createdAt.slice(0, 10)}</div>
                ))}
            </div>

        </div>
    )
}

export default Workflows;