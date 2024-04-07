import React, { useState } from 'react';
import { Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import Inputs from '../../components/inputs';
import male from '../assets/male.svg';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
const apiUrl2 = import.meta.env.VITE_API_URL2;

export default function Signin() {
  const pathname = useNavigate('/')
  const [password, setPassword] = useState('');
  const [Login, setLogin] = useState('');


  async function handleClick() {

    try {
      const response = await axios.post(apiUrl2, {
        username: Login,
        password:password
      });

      console.log('Signin successful:', response.data);
      console.log(26,response);
      const token = response.data.accessToken;
      const usernameset = response.data.username;
      message.success('Tizimga kiritish muvaffaqiyatli!');
      localStorage.setItem('user', (token))
      localStorage.setItem('username', (Login))
      pathname('/dashboard');
    } catch (error) {
      console.error('Error during signin:', error);
      if (error.response) {
        console.log('Server responded with:', error.response.data);
        console.log('Status code:', error.response.status);
        message.error('Server error. Please try again later.');
      } else if (error.request) {
        console.log('No response received:', error.request);
        message.error('No response received from the server. Please try again later.');
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
          <p>Tizimga kirish uchun ma'lumotlarni to'ldring.</p>
          <Inputs onChange={e => setLogin(e.target.value)} label='login' type='rexr' />
          <Inputs onChange={e => setPassword(e.target.value)} label='Parol' type='password' />
          <Button onClick={handleClick} type="primary">Kirish</Button>
          <p id='link' style={{ marginTop: '-150px' }}>Akkauntiz yo'qmi? <Link to='/signup'>Ro'yhatdan o'ting</Link></p>
          <p id='vim'>Hak tushgan ©  2024 Vim kompaniyasi</p>
        </form>
      </div>
      <div className="frame-right">
        <img src={male} alt="rasm yetib kelmadi" />
      </div>
    </div>
  );
}
