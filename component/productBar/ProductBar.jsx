import React from 'react'
import Image from 'next/image'
import style from './Product.module.css'
import Images from '../../public/Images/Images'
const ProductBar = () => {
  return (
    <>
      <div className={`row px-0 mx-5 ${style.ProductBarContainer}`}>
    <div className='col-md-3 col-6 px-0'>
    <div className='row'>
        <div className={`col-md-6  col-6 ${style.totalItem}`}>
        3435Item 
        </div>
    <div className={`col-md-6 align-items-center d-none d-md-flex text-end ${style.filterItem}`}><Image alt="rightArrow"  src={Images.RIGHTARROW}></Image>Hide Filter</div>
    </div>
    </div>
   
 <div className={`col-md-9 col-6  text-end ${style.recommenedItem}`}>
 RECOMMENDED<Image  alt="bottomArrow" src={Images.BOTTOMARROW}></Image>
</div>
      </div>
    </>
  )
}

export default ProductBar
