import React from 'react'

const Card = (props) => {
  return (
  <div className="skill__item">

            <div class="skill-box">
                    <div class="Skill-title">
                        <div class="img">
                                    <img  src={props.image}class="skill-icon" />
                                   
                        </div>
                        <h3 className="timeline__text">{props.title}</h3>                     
                    </div>
            </div>
  </div>
  )
}

export default Card