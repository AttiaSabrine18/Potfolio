import React from 'react'

const Boxachivment = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box ">
              <i class='bx bxs-hot about__icon'></i>


              <div>
              <h3 className="about__title">Projects</h3>
                <span className="about__subtitle">+10 projects</span>
              </div>
        </div>
        <div className="about__box">
        <i class='bx bx-briefcase about__icon' ></i>
              <div>
           
            <h3 className="about__title">internship</h3>
                <span className="about__subtitle">+2 internships</span>
              </div>
        </div>

        <div className="about__box">
            <i class='bx bx-support about__icon' ></i>


              <div>
              <h3 className="about__title">Support </h3>
                <span className="about__subtitle">Online 24/7</span>
              </div>
        </div>
        
      
    </div>
  )
}

export default Boxachivment