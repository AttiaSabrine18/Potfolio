import React from 'react'

import './Experience.css'

import experData from './experData'

import Card from './Card'

const Experience = () => {
  return (
  <section className="resume container section" id='experience'>
    <h2 className="section__title">Experience</h2>



    <div className="resume__container grid">
        <div className="timeline grid">
                {experData.map((val , id) =>{
                    if(val.category === "education"){
                        return (
                            <Card key={id} 
                            icon={val.icon}
                            title={val.title}
                            year={val.year}
                            Local={val.Local}  
                    />
                        )
                    }
                })}
        </div>

        <div className="timeline grid">
                {experData.map((val , index) =>{
                    if(val.category === "Entership"){
                        return (
                            <Card key={index} 
                                    icon={val.icon}
                                    title={val.title}
                                    year={val.year}
                                    Local={val.Local}  
                            />

                        )
                    }
                })}
        </div>
    </div>
  </section>
  )
}

export default Experience