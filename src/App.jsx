import './App.css'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/sign-up';
import Signin from './pages/sign-in';

function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
        </Routes>
      </BrowserRouter>


  )
}

export default App;
