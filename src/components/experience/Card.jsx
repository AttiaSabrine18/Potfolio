import React from 'react'

const Card = (props) => {
  return (
  <div className="timeline__item">
            <i className={props.icon}></i>
            <span className="timeline__data">{props.year}</span>
            <h3 className="timeline__title">{props.title}</h3>
            <h5 className="timeline__text">{props.Local}</h5>
  </div>
  )
}

export default Card