import React from 'react'
import style from './Product.module.css'
const ProductBar = () => {
  return (
    <>
      <div className={`row px-0 mx-5 ${style.ProductBarContainer}`}>
    <div className='col-md-3 col-6 px-0'>
    <div className='row'>
        <div className={`col-md-6  col-6 ${style.totalItem}`}>
        3435Item 
        </div>
    <div className={`col-md-6 d-none d-md-flex text-end ${style.filterItem}`}>Hide Filter</div>
    </div>
    </div>
   
 <div className={`col-md-9 col-6 text-end ${style.recommenedItem}`}>
 RECOMMENDED
</div>
      </div>
    </>
  )
}

export default ProductBar
