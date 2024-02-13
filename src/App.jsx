import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/sign-up';
import Signin from './pages/sign-in';
import Home from './pages/home';

function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>


  )
}

export default App;
