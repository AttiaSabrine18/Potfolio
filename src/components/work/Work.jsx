import React, { useState } from 'react'
import './work.css'
import Data from './data'
const Work = () => {
    const [items , setItems] = useState(Data);
    const filterItem = (categoryItem) =>{
        const updateItems = Data.filter((curElem)=>{
            return curElem.category === categoryItem;
        })

        setItems(updateItems)
    }
  return (
    <section className="work container section" id='work'>
        <h2 className="section__title">Recent Works</h2>
        <div className="work__container grid">
            {items.map((elem) =>{
                const {id, image , title } = elem
                return (
                    <div className="work__card" key={id}>
                                <div className="work__thumbail">
                                    <img src={image} alt="" className='work__img'/>
                                  <div className="work__mask"></div>    
                                </div>
                            <h3 className="work__title">{title}</h3>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Work