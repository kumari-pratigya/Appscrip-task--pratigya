import React from 'react'
import style from './Description.module.css'
const Description = () => {
  return (
    <>
      <div className={`mx-auto my-3 my-sm-5 text-break ${style.descriptionContainer}`}>
        <p className={style.heading}>DISCOVER OUR PRODUCTS</p>
        <p className={style.description}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
    </>
  )
}

export default Description
