import React, { useState } from 'react';
import { Button, message } from 'antd';
import Inputs from '../../components/inputs';
import male from '../assets/male.svg';
import logo from '../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 

export default function Signin() {
  const pathname = useNavigate('/')

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function handleClick() {
    try {
      const response = await axios.post('https://strapi-store-server.onrender.com/api/auth/local', {
        identifier: email,
        password: password
      });

      const data = response.data;
      console.log(21,data);

      const username = data.user ? data.user.username : '';

      message.success(`Welcome, ${username}!`);
      pathname('/home'); 
    } catch (error) {
      console.error('There was an error!', error);
      // message.error('There was an error during login. Please try again.');
    }
  }

  return (
    <div className='frame'>
      <div className="frame-left">
        <form>
          <img src={logo} alt="Logo" />
          <h1>Xush kelibsiz!</h1>
          <p>Login parolingizni kiritib o‘z kabinetingizga kiring.</p>
          <Inputs onChange={e => setEmail(e.target.value)} label='Email' type='email' />
          <Inputs onChange={e => setPassword(e.target.value)} label='Parol' type='password' />
          <Button onClick={handleClick} type="primary">Kirish</Button>
          <p id='link' style={{ marginTop: '-150px' }}>Do you have an account? <Link to='/'>Register</Link></p>
          <p id='vim'>Copyright ©  2024 Vim kompaniyasi</p>
        </form>
      </div>
      <div className="frame-right">
        <img src={male} alt="Male Avatar" />
      </div>
    </div>
  );
}
