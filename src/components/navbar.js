import React,{useEffect,useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCaretRight} from 'react-icons/ai';
import './Navbar.css';
const fixedClass = {
  position:"fixed",
  top:0,
   backgroundColor: "rgb(51, 51, 51)"
}

const fixedClassTransparent = {
  position:"fixed",
  top:0,
  backgroundColor: "rgba(51, 51, 51,0)"
}
function Navbar({scrolled, isTabletDevice}) {
  const [expanded,setExpanded] = useState(false)
console.log("is table devfice",isTabletDevice)
  return (
    <div className="navbar" style={scrolled?fixedClass:fixedClassTransparent}>

{
  isTabletDevice?
  <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#values">Values</a></li>
  <li><a href="#team">Our Team</a></li>
  <li><a href="#form">Contact Us</a></li>
</ul>:
expanded?
<>
    <div className="backburger" onClick={()=>{setExpanded(false)}}>
      <AiFillCaretRight color="white" size={22}/>
    </div>

    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#values">Values</a></li>
      <li><a href="#team">Our Team</a></li>
      <li><a href="#form">Contact Us</a></li>
    </ul>
</>
:
<div className="hambruger_menu" onClick={()=>{
  setExpanded(expanded?false:true)
}}>
<GiHamburgerMenu  color="white" size={22}/>
</div>
  
}
    </div>
  );
}

export default Navbar;

