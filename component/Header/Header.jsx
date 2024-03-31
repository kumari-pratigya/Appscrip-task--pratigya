import React from "react";
import style from "../Header/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import Images from "../../public/Images/Images";
const Header = () => {
  return (
    <>
      <div className={`container-fluid  px-0 ${style.headerContainer}`}>
        <nav class="navbar w-100 navbar-expand-lg pt-0 ">
          <div className=" d-none d-md-block container-fluid d-block">
            <div
              className={` d-none d-md-flex row bg-black d-flex align-items-center justify-content-center ${style.upperRow}`}
            >
              <div className="col-3">dgfdgd</div>
              <div className="col-3 text-center">fdhfght</div>
              <div className="col-3 text-end">fdhfght</div>
            </div>
            <div className="row mx-5 my-2 d-flex align-items-center justify-content-center">
              <div className="col-md-3">
                <Link class="navbar-brand" href="/">
                  <Image alt="Logo" src={Images.LOGO}></Image>
                </Link>
              </div>
              <div className="col-md-6 text-center">
                <span className={style.logo}>Logo</span>
              </div>
              <div className="col-md-3">
                <Link className="px-2" href="/">
                  <Image alt="searchImg" src={Images.SEARCH}/>
                </Link>
                <Link className="px-2" href="/">
                  <Image alt="heartImg" src={Images.HEART}/>
                </Link>
                <Link className="px-2" href="/">
                  <Image alt="bagImg" src={Images.SHOPPINGBAG}/>
                </Link>
                <Link className="px-2" href="/">
                  <Image  alt="profile" src={Images.PROFILE}/>
                </Link>
                <Link className="px-2" href="/">
                  <Image alt="language" src={Images.LANGUAGE}/>
                </Link>
              </div>
            </div>
            <div
              className={`row d-flex align-items-center justify-content-center  ${style.bottomRow}`}
            >
              <div className=" col-md-12 text-center">
                <Link className="px-4" href="/shop">
                  Shop
                </Link>
                <Link className="px-4" href="/skills">
                  Skills
                </Link>
                <Link className="px-4" href="/stories">
                  Stories
                </Link>
                <Link className="px-4" href="/about">
                  About
                </Link>
                <Link className="px-4" href="/COntact Us">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div
            className={` d-flex w-100  mx-0 d-md-none row bg-black d-flex align-items-center justify-content-center ${style.upperRow}`}
          >
            <div className="col-12 text-center">fdhfght</div>
          </div>
          <div className="row d-flex align-items-center justify-content-center  mx-0 px-2 my-3 w-100 d-inline-flex d-md-none">
            <div className="col-4 px-0">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <Link className="navbar-brand mx-3" href="/">
                <Image alt="Logo" src={Images.LOGO}/>
              </Link>
            </div>

            <div className="col-4 px-0 text-center">
              <span>Logo</span>
            </div>
            <div className="col-4 px-0 text-end">
              <Link className="px-2" href="/">
                <Image alt="search" src={Images.SEARCH}/>
              </Link>
              <Link className="px-2" href="/">
                <Image alt="heart" src={Images.HEART}/>
              </Link>
              <Link className="px-2" href="/">
                <Image alt="bag" src={Images.SHOPPINGBAG}/>
              </Link>
            </div>
          </div>

          {/* <div class="d-flex w-100 d-md-none collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
     
    </div> */}
        </nav>
      </div>
    </>
  );
};

export default Header;
