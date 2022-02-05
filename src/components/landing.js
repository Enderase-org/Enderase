
import React from 'react';
import Particles from 'react-tsparticles';
import './Landing.css';
import myOptions from '../particlesjs-config.json';
import EnderaseSVG from '../assets/Untitled-1.svg'
console.log(myOptions)
// const options = require('../particlesjs-config.json')
//  options = JSON.parse(options);

function Landing() {
    const particlesInit = (main)=>{
        console.log(main)
    }
    const particlesLoaded = (container)=>{
        console.log(container)
    }
  return (
    <section className="Landing">
      <div>

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
      </div>
        <div className="headcontainer">
        <img src={EnderaseSVG} height={"500px"} width="800px"/>
        </div>

    </section>
  );
}

export default Landing;

/*
  <Particles id="tsparticles" 
        init={particlesInit} 
        loaded={particlesLoaded} 
       // options={options}//"http://foo.bar/particles.json" 
       options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
        />
        */