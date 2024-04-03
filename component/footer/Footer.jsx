import React from "react";
import style from "../footer/Footer.module.css";
import Images from "../../public/Images/Images";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={`py-3 mt-5 footer container-fluid py-sm-5 ${style.footerContainer}`}>
      <div className="row d-none d-md-flex mx-3 mx-sm-5">
        <div className="col-md-8 col-12">
          <p className={style.firstToKnow}>Be the first to know</p>
          <p className={style.subHeading}>
            Sign up for updates from mettā muse.
          </p>
          <form>
            <input type="text" placeholder="Enter your Email"></input>
            <button>Subscribe</button>
          </form>
        </div>
        <div className="col-md-4 col-12">
          <p className={style.contactUs}>Contact us</p>
          <p className={style.phoneNo}>+44 221 133 5360</p>
          <p className={style.email}>customercare@mettamuse.com</p>
          <p className={style.currency}>Currency</p>
          <Image alt="usd" src={Images.USD}></Image>{" "}
          <span className={style.usd}>USD</span>
          <p className={style.transaction}>
            {" "}
            Transactions will be completed in Euros and a currency reference is
            available on hover.{" "}
          </p>
        </div>
      </div>
      <hr />
      <div className="row d-none d-md-flex py-3 py-sm-5  mx-3 mx-sm-5">
        <div className="col-md-4 col-12">
          <p className={style.bottomHeading}>mettā muse</p>
          <ol className="list-unstyled">
            <li className={style.bottomText}>About us</li>
            <li className={style.bottomText}>Stories</li>
            <li className={style.bottomText}>Artisans</li>
            <li className={style.bottomText}>Artisans</li>
            <li className={style.bottomText}>Boutiques</li>
            <li className={style.bottomText}>Contact Us</li>
            <li className={style.bottomText}>EU Compliances Docs</li>
          </ol>
        </div>
        <div className="col-md-4 col-12">
          <p className={style.bottomHeading}>Quick Links</p>
          <ol className="list-unstyled">
            <li className={style.bottomText}>Orders & Shipping</li>
            <li className={style.bottomText}>Join/Login as a Seller</li>
            <li className={style.bottomText}>Payment & Pricing</li>
            <li className={style.bottomText}>Return & Refunds</li>
            <li className={style.bottomText}>FAQs</li>
            <li className={style.bottomText}>Privacy Policy</li>
            <li className={style.bottomText}>Terms & Conditions</li>
          </ol>
        </div>
        <div className="col-md-4 col-12">
          <p className={style.bottomHeading}>FOLLOW US</p>
          <div className={`d-flex`}>
            <Image alt="insta" src={Images.INSTA} />
            <Image alt="linkedin" className="mx-2" src={Images.LINKEDIN} />
          </div>
          
          <p className="mt-sm-5 mt-3 ">mettā muse Accepts</p>
          <div className={`d-flex overflow-hidden`}>
            <Image alt="gpay" src={Images.GPAY} />
            <Image alt="card" className="mx-2" src={Images.CARD} />
            <Image alt="payu" className="mx-2" src={Images.PAYU} />
            <Image alt="amex" className="mx-2" src={Images.AMEX} />
            <Image alt="apppay" className="mx-2" src={Images.APPPAY} />
            <Image alt="group" className="mx-2" src={Images.GROUP} />
          </div>
        </div>
      </div>
      <div className="row d-block d-md-none mx-2 mx-sm-5">
        <div className={`col-md-8 col-12 ${style.column}`}>
          <p className={style.firstToKnow}>Be the first to know</p>
         <p className="text-break">Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
<div className="row">
            <div className="col-6 ">
              <input type="text" placeholder="Enter your Email"></input>
            </div>
            <div className="col-6">
              <button>Subscribe</button>
           

          </div>
          </div>
        </div>
      
        <div className={`col-md-4 col-12 ${style.column}`}>
          <p className={`mt-3 ${style.contactUs}`}>Call us</p>
          <span className={style.phoneNo}>+44 221 133 5360</span>
          <span className={`ms-5 ${style.email}`}>
           customercare@mettamuse.com
          </span>
        </div>
        <div className={`col-md-4 col-12 ${style.column}`}>
          <p className={`mt-3 ${style.currency}`}>Currency</p>
          <Image alt="usd" src={Images.USD}></Image>{" "}
          <span className={style.usd}>USD</span>
        </div>
      
      </div>
     <div className="row d-block d-md-none mx-2 mx-sm-5 px-0 ">
      <div className="col-md-4 col-12 px-0">
      <div className=" accordion  d-block d-md-none" id="accordionExample">
 
 <div className="accordion-item">
   <h2 className="accordion-header">
     <p className="accordion-button collapsed"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     mettā muse
     </p>
   </h2>
   <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
     <div class="accordion-body">
     <ol className="list-unstyled">
           <li className={style.bottomText}>About us</li>
           <li className={style.bottomText}>Stories</li>
           <li className={style.bottomText}>Artisans</li>
           <li className={style.bottomText}>Artisans</li>
           <li className={style.bottomText}>Boutiques</li>
           <li className={style.bottomText}>Contact Us</li>
           <li className={style.bottomText}>EU Compliances Docs</li>
         </ol>
     </div>
   </div>
 </div>
 <div class="accordion-item">
   <h2 class="accordion-header">
     <p className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     Quick Links
     </p>
   </h2>
   <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
     <div class="accordion-body">
     <div className={`d-flex`}>
           <Image alt="insta" src={Images.INSTA} />
           <Image alt="linkedin" className="mx-2" src={Images.LINKEDIN} />
         </div>
     </div>
   </div>
 </div>
 <div class="accordion-item">
   <h2 class="accordion-header">
     <p className="accordion-button "  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     FOLLOW US
     </p>
   </h2>
   <div id="collapseThree" class="accordion-collapse " data-bs-parent="#accordionExample">
     <div class="accordion-body">
     <div className={`d-flex `}>
           <Image alt="insta" className='img-fluid ' src={Images.INSTA} />
           <Image alt="linkedin"  className=' mx-2 img-fluid'  src={Images.LINKEDIN} />
         </div>
     </div>
   </div>
 </div>
</div>
      </div>
     </div>
     <div className="row d-block d-md-none mx-2 mx-sm-5 px-0 ">
      <div className="col-md-4 col-12 px-0">
      <p className="mt-sm-5 mt-3 d-block d-md-none text-start">mettā muse Accepts</p>
      <div className={` d-block d-md-none`}>
<div className="row ">
  <div className="col-2"> <Image alt="gpay" src={Images.GPAY} /></div>
  <div className="col-2">  <Image alt="card" className="mx-2" src={Images.CARD} /></div>
  <div className="col-2">  <Image alt="payu" className="mx-2" src={Images.PAYU} /></div>
  <div className="col-2"> <Image alt="amex" src={Images.AMEX} /></div>
  <div className="col-2"> <Image alt="apppay" className="mx-2" src={Images.APPPAY} /></div>
  <div className="col-2">  <Image alt="group" className="mx-2" src={Images.GROUP} /></div>

</div>
           
          
          
         
          
          </div>
          </div></div>
          <p className="text-center my-3">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
