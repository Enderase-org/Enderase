
import React,{useState,useEffect} from 'react';
import './App.css';

import Landing from './components/landing';
import WhatWeDo from './components/whatwedo';
import Mission from './components/mission';
import Metrics from './components/metrics';
import Navbar from './components/navbar';
import Team from './components/team';
import ContactUs from './components/form';
import Footer from './components/footer';
import Programs from './components/programs'
import Particles from 'react-tsparticles';
import myOptions from './particlesjs-config.json';

import { useMediaQuery } from 'react-responsive';


function App() {
  const [scrolled,setScrolled] = useState(false);
  // useEffect(()=>{
  //   window.addEventListener('scroll',handleScroll)
  // },[])

 const handleScroll = ()=>{
  const offset = window.scrollY;
  console.log("ofset is:",offset)

  if(offset>window.innerHeight-25){
    if(scrolled!==true)
    setScrolled(true);
  }else{
      //if(scrolled!==false)
      setScrolled(false);
    }
  }

const particlesInit = (main)=>{
  console.log(main)
}
const particlesLoaded = (container)=>{
    console.log(container)
}

const onScrolled = (e)=>{
//   // const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
//   const bottom = e.target.scrollHeight - e.target.scrollTop > 0;
    // if (e.target.scrollHeight) { 

      setScrolled(true)
    //  }
//  // }

 //(e)=>{e.target.currentScrollY
}

const isTabletDevice = useMediaQuery({
  query: "(min-width: 700px)",
});
  return (
    <>
   

       <Particles id="tsparticles" 
        init={particlesInit} 
        loaded={particlesLoaded} 
       // options={options}//"http://foo.bar/particles.json" 
       options={myOptions}
       width="500px"
       height='500px'
       style={{
       }}
      //  height='600'
      //  width='400'
        />


    <div className="container" onScroll={onScrolled}>

      <Landing scrolled={scrolled} isTabletDevice={isTabletDevice}/>
      <Navbar scrolled={scrolled} isTabletDevice={isTabletDevice}/>
       <Mission scrolled={scrolled} istabletDevice={isTabletDevice}/>
      <WhatWeDo isTabletDevice={isTabletDevice}/>
      <Metrics isTabletDevice={isTabletDevice}/>
      <Team isTabletDevice={isTabletDevice}/>
      <Programs/>
      <ContactUs isTabletDevice={isTabletDevice}/>

      <Footer/>
    </div>
    </>
  );
}

export default App;

/*
       {
  scrolled?
  <>
  </>:

  }
  */
