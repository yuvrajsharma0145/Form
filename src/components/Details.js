import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import Home from './Home';
function Details() {
    const home=useNavigate();
  return (
    <div>
      Details
      <NavLink to="/">Go to Sign Up</NavLink>
    </div>
  );
}

export default Details;
