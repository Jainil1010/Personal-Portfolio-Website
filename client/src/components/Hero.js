import React from 'react'
import '../styles/home.css'
import heroImg from '../images/hero.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='headline'>
            <img src= {heroImg} alt='image not found'></img>
        </div>
        <div className='subheading'>
            <h1>Hi, I'm Jainil — A Passionate Full Stack Web Developer</h1>
            <p>I craft modern, responsive web applications using the MERN stack, blending creativity and functionality to deliver seamless user experiences.</p>
            <button>View my Work</button>
            <button>Contact Me</button>
        </div>
    </div>
  )
}

export default Hero