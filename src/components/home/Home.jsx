import React from 'react'
import profil from '../../assets/pf.jpg'
import './Home.css'
import IconSocials from './IconSocials'
import ScrollDown from './ScrollDown'
const Home = () => {
  return (
    <section className="home container" id='home'>
      <div className="intro">
          < img src={profil} alt="" className="home__img" />
          <h1 className="home__name">Sabrine Attia</h1>
          <span className="home__education">I' m full stack developer</span>
    
    
    <IconSocials />

    <a href="#contact" className="btn">Hire Me</a>
    <ScrollDown />
      </div>
    </section>
  )
}
export  default Home ;

