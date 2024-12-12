import React,{useState} from 'react';
import { auth } from './firebase';
import { Element } from 'react-scroll';
import Poll from './Poll.js';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar.js'
import Hom from './Hom.js';
import Refer from './Refer.js';
import Signm from './Signm.js';
import Register from './Register.js'
import Login from './Login.js'
import Create from './Create.js';
import AuthDetails from './AuthDetails.js';

function App() {
 

  return (
    <>
      <NavBar />

      <div>
      
        <Routes>
          <Route path='/' element={<Hom />} />
          <Route path='/refer' element={<Refer />} />
          <Route path='/signm' element={<Signm />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/poll' element={<Poll />} />
          <Route path='/create' element={<Create />} />
          <Route path="/authdetils" element={<AuthDetails/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;

