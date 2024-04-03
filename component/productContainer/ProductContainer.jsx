import React from 'react'
import Products from '../products/Products'
import SideBar from '../sideBar/SideBar'
const ProductContainer = () => {
  return (
    <div className='row gx-0 mx-0 mx-sm-5 bg-white'>
      <div className='col-md-3 ps-md-0 pe-md-3 d-none d-md-block'>
        <SideBar/>
      </div>
      <div className='col-md-9 col-12'><Products/></div>   
    </div>
  )
}

export default ProductContainer
