import React from 'react'
import './Navbar.css'
const NavBar = () => {
  return (
    <header className="header">
       <nav className="nav container">
              <a href="" className="nav__logo"> bine</a>


                  <div className="nav__menu">
                        <ul className="nav__list grid">
                                <li className="nav__item">
                                    <a href="#home" className="nav__link">
                                    Home </a>
                                   
                                    </li>

                            <li className="nav__item">
                               <a href="#about" className="nav__link">
                               About </a>
                            
                            </li>
                            <li className="nav__item">
                                <a href="#experience" className="nav__link">
                                <i class="uil uil-chart-line nav__icon"></i>
                                 Experience </a>
                              
                            </li>
                            <li className="nav__item">
                                <a href="#skills" className="nav__link">
                                    <i className="uil uil-briefcase nav__icon"></i>
                                    skills</a>
                               
                            </li>
                            <li className="nav__item">
                                <a href="#work" className="nav__link">
                                    <i className="uil uil-briefcase nav__icon"></i>
                                 work</a>
                               
                            </li>
                         
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                         <i class="uil uil-comment-medical nav__icon"></i>
                                  Contact</a>
                              
                            </li>
                        </ul>

                        <i className="uil uil-times nav__close"></i>
                  </div>

                  <div className="nav__toggle">
                     <i class="uil uil-apps"></i>
                  </div>
       </nav>

    </header>
  )
}

export default NavBar ;