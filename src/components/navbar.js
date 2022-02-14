import React,{useEffect,useState} from 'react';
import './Navbar.css';
const fixedClass = {
  position:"fixed",
  top:0,
   backgroundColor: "rgb(51, 51, 51)"
}
function Navbar({scrolled}) {

  
  return (
    <div className="navbar" style={scrolled?fixedClass:fixedClass}>
      <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#values">Values</a></li>
          <li><a href="#team">Our Team</a></li>
          <li><a href="#form">Contact Us</a></li>
      </ul>
    </div>
  );
}

export default Navbar;

