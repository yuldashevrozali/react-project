import React, { useState } from 'react';
import { Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import Inputs from '../../components/inputs';
import male from '../assets/male.svg';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export default function Signup() {
    const pathname = useNavigate('/')
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    function validate() {
        if (!user.trim() || !password.trim() || !email.trim()) {
            message.warning("Barcha joylarni to'ldring");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            message.error("Noto'g'ri email");
            return false;
        }

        return true;
    }

    async function handleClick() {
        if (!validate()) {
            return;
        }

        try {
            const response = await axios.post(apiUrl, {
                username: user,
                password,
                email,
            });

            console.log('Registration successful:', response.data);
            console.log(response);
            message.success('Registration successful!');
            pathname('/signin'); 
        } catch (error) {
            console.error('Error during registration:', error);
            if (error.response) {
                console.log('Server responded with:', error.response.data);
                console.log('Status code:', error.response.status);
                message.error('Server error. Please try again later.');
            } else {
                console.log('Error:', error.message);
                message.error('An error occurred. Please try again later.');
            }
        }
    }



    return (
        <div className='frame'>
            <div className="frame-left">
                <form>
                    <img src={logo} alt="rasm yetib kelmadi" />
                    <h1>Xush kelibsiz!</h1>
                    <p>Ro'yhatdan o'tish uchun ma'lumotlarni to'ldring.</p>
                    <Inputs onChange={e => setUser(e.target.value)} label='User' type='text' />
                    <Inputs onChange={e => setEmail(e.target.value)} label='Email' type='email' />
                    <Inputs onChange={e => setPassword(e.target.value)} label='Parol' type='password' />
                    <Button onClick={handleClick} type="primary">Ro'yhatdan o'tish</Button>
                    <p id='link' style={{ marginTop: '-150px' }}>You have already account? <Link to='/signin'>Login</Link></p>
                    <p id='vim'>Copyright ©  2024 Vim kompaniyasi</p>
                </form>
            </div>
            <div className="frame-right">
                <img src={male} alt="rasm yetib kelmadi" />
            </div>
        </div>
    );
}
