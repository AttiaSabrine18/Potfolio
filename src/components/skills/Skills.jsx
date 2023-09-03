import React from 'react'

import './Skills.css'

import skillData from './skillData'

import Card from './Card'

const Experience = () => {
  return (
  <section className="resume container section" id='skills'>
    <h2 className="section__title">Skills</h2>



    <div className="skills__container grid">
        <div className="skills grid">
          
                {skillData.map((val , id) =>{
                         if(val.category === "basic"){
                        return (
                            <Card key={id}
                            title={val.title}
                            image={val.image}
                    />
                        )
                        }
                })}
        </div>

        <div className="skills grid">
                {skillData.map((val , id) =>{
                    if(val.category === "FrameWork--FrontEnd"){
                        return (
                            <Card key={id}
                            title={val.title}
                            image={val.image} 
                            />

                        )
                    }
                })}
        </div>
        <div className="skills grid">
                {skillData.map((val , id) =>{
                    if(val.category === "BackEnd"){
                        return (
                            <Card key={id}
                            title={val.title}
                            image={val.image} 
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