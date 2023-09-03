import React from 'react'

import "./About.css"

import img  from '../../assets/pf.jpg' 

import Boxachivment from './Boxachivment'
 const About = () => {
  return (
 <section className=" about container section" id='about'>
    <h2 className="section__title">About Me</h2>


    <div className="about__container grid">
         <img src={img} alt="" className='about__img' />
             <div className="about__data grid">
                    <div className="about__info">
                         <p className="about__description">Welcome to my portfolio! I'm Sabrine Attia, and I'm passionate about develpment. As a jonior developer, I've dedicated myself to exploring the limitless possibilities within this domain.</p>
                        
                    </div>
                   <div className="about__cv grid">
                    <div className="cv">
                    <a href="" className="btn">Download CV</a>
                    </div>
                   </div>
               </div>
             
         </div>
         <Boxachivment />
 </section>
  )
}

export default About ;