import React,{useEffect,useState} from 'react';
import './Navbar.css';
const fixedClass = {
  position:"fixed",
  top:0
}
function Navbar() {
  const [scrolled,setScrolled] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
  },[])
 const handleScroll = ()=>{
  const offset = window.scrollY;
  console.log("ofset is:",offset)

  if(offset>window.innerHeight-25){
    if(scrolled!==true)
    setScrolled(true);
  }else{
    if(scrolled!==false)
    setScrolled(false);
  }
  }
  return (
    <div className="navbar" style={scrolled?fixedClass:{}}>
      <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#whatwedo">Values</a></li>
          <li><a href="#team">Our Team</a></li>
          <li><a href="#form">Contact Us</a></li>
      </ul>
    </div>
  );
}

export default Navbar;

