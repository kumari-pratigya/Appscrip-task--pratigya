import React from 'react'
import Image from 'next/image'
import style from './Products.module.css'
import Images from '../../public/Images/Images'
const products=[
    {
    id:1,
    title:"PPXOC Milkyway dress in pressed flowers",
    pic:Images.BAG,
    detail:'New Item',
    price:""
},
{
    id:2,
    title:"PPXOC Milkyway dress in pressed flowers",
    pic:Images.TOY,
    stock:"Out of Stock",
    price:""
},
{
    id:3,
    title:"PPXOC Milkyway dress in pressed flowers",
    pic:Images.BELT,
    price:""
},
{
    id:4,
    title:"PPXOC Milkyway dress in pressed flowers",
    pic:Images.CLOTHES,
    price:""
},
{
    id:5,
    title:"PPXOC Milkyway dress in pressed flowers",
    pic:Images.BAG2,
    price:""
},
{
    id:6,
    title:"PPXOC Milkyway dress in pressed flowers",
    pic:Images.TOY,
    price:""
},
{
    id:7,
    title:"PPXOC Milkyway dress in pressed flowers",
    pic:Images.HANDBAG,
    price:""
},
{
    id:8,
    title:"PPXOC Milkyway dress in pressed flowers",
    pic:Images.BAG3,
    price:""
},
{
    id:9,
    title:"PPXOC Milkyway dress in pressed flowers",
    pic:Images.BAG4,
    price:""
},
{
    id:10,
    title:"PPXOC Milkyway dress in pressed flowers",
    pic:Images.SLINGBAG1,
    price:""
},
{
    id:11,
    title:"PPXOC Milkyway dress in pressed flowers",
    pic:Images.SLINGBAG2,

    price:""
},
{
    id:12,
    title:"PPXOC Milkyway dress in pressed flowers",
    pic:Images.SLINGBAG3,
    price:""
},
]
const Products = () => {
  return (
    <div className='row'>
        {products.map((item,i)=>(
            <> 
            <div className='col-xl-4  col-xxl-3 col-sm-6 my-3'>
            <div className='position-relative '>
            <Image alt="productImg" className={item.productImage? `opacity-25 ${style.productImage}`: `opacity-100 ${style.productImage}`} src={item.pic}/>
            {item.detail && <p className={`${style.detail}`}>{item.detail}</p>}
            {item.stock=='Out of Stock' && <p className={`${style.stock}`}>{item.stock}</p>}
            </div>
           
            <p className={`text-break mb-2 mt-2 ${style.productName}`}>Product Name</p>
            <div className='row'>
                <div className='col-10'>
<p className={` mb-0 text-break ${style.subHeading}`}>Sign in or Create an account to see pricing</p>
                </div>
                <div className='col-2 text-right'>
                    <Image alt="heart" src={Images.HEART}/>
                    </div>
            </div>
          
            </div>
            </>
        ))}
    
      
    </div>
  )
}

export default Products
