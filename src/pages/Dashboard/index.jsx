import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const user = localStorage.getItem('user');
    const username = localStorage.getItem('username');
    const navigate = useNavigate();

    console.log(user);
    
    useEffect(() => {
        if (user && user.length > 101) {
            console.log(true);
        } else {
            console.log(false);
            navigate('/signup');
        }
    }, [user, navigate]);
    
    return (
        <div>Assalomu alaykum  <span style={{color:'green', fontSize:'21px'}}> {username} </span>saytimizga xush kelibsiz </div>
    );
}
