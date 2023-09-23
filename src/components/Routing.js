import React from 'react';
import Home from './Home';
import Login from './Login';
import Header from './Header';
import { Routes,Route } from 'react-router-dom';
import Details from './Details';
function Routing() {
  return (
    <div>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/details' element={<Details/>}></Route>
    </Routes>
    </div>
  );
}

export default Routing;
