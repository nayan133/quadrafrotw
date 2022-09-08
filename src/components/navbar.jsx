import React, { useEffect } from 'react';
import { BsFacebook } from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs'; 
import {FaEnvelope} from 'react-icons/fa';
import {IoCall} from 'react-icons/io5';
import logoimg from '../images/quadrafort_logo.png'




export default function Navbar() {
    
    // document.addEventListener('', function() {
    //     window.addEventListener('scroll', myFunctionForSticky);
    //       // Get the navbar
    //   var header = document.getElementById("bar1");
      
    
    //   // Get the offset position of the navbar
    //   var sticky = header.offsetTop;
    //   console.log(sticky);
    //   alert("nayan")
    //     function myFunctionForSticky() {
    //   if (window.pageYOffset > sticky) {
    //     header.classList.add("sticky1");
    //   } else {
    //     header.classList.remove("sticky1");
    //   }
    // }
    
    // })
    window.onscroll = function() {myFunction()}; 

function myFunction() {
  if (document.documentElement.scrollTop > 55 && document.documentElement.scrollTop < 1201   ) {
    document.getElementById("c_nav").className = "navbar navbar-expand-lg CP-nav";
    document.getElementById("c_nav").style="transition:0.5s";
    document.getElementById("bar1").style="opacity:0";
    // document.getElementById("bar1").style.transition = "all 2s";
    document.getElementById("bar1").style="display:none";
  } 
  else if (document.documentElement.scrollTop > 1200 && document.documentElement.scrollTop < 2501   ) {
    document.getElementById("c_nav").className = "navbar navbar-expand-lg CP-nav1";
    document.getElementById("c_nav").style="transition:0.5s";
    document.getElementById("bar1").style="display:none;transition:1s";
  } 
  else if (document.documentElement.scrollTop > 2501  ) {
    document.getElementById("c_nav").className = "navbar navbar-expand-lg CP-nav2";
    document.getElementById("c_nav").style="transition:0.5s";
    document.getElementById("bar1").style="display:none;transition:1s";
  } 
    else {
    document.getElementById("c_nav").className = "navbar navbar-expand-lg  ";
    document.getElementById("c_nav").style="transition:0.5s";
    document.getElementById("bar1").style="display:visible;transition:1s";
  }
}
// window.onscroll = function() {myFunction1()};


// function myFunction1() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky1");
//   } else {
//     header.classList.remove("sticky1");
//   }
// }






  return (
    <div>
     <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div> 
    
    
    <div className="site-navbar-wrap" >
      <div className="site-navbar-top" id='bar1'>
        <div className="container py-3 first_bar" >
          <div className="row align-items-center">
            <div className="col-6 col-sm-7">
              <div className="d-flex mr-auto">
                <a href="#" className="d-flex align-items-center mr-4">
                  <span className="icon-envelope mr-2"><FaEnvelope/></span>
                  <span className="d-none d-md-inline-block ml-2">info@domain.com</span>
                </a>
                <a href="#" className="d-flex align-items-center mr-auto">
                  <span className="icon-phone mr-2"><IoCall/></span>
                  <span className="d-none d-md-inline-block ml-2">+1 234 4567 8910</span>
                </a>
              </div>
            </div>
            <div className="col-6 col-sm-5 text-right icons-section">
              <div className="mr-auto">
                <a href="#" className="p-2 pl-0"><span className="icon-twitter"><BsFacebook/></span></a>
                <a href="#" className="p-2 pl-0"><span className="icon-facebook"><BsInstagram/></span></a>
                <a href="#" className="p-2 pl-0"><span className="icon-linkedin"><BsLinkedin/></span></a>
                <a href="#" className="p-2 pl-0"><span className="icon-instagram"><BsTwitter/></span></a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg "id='c_nav'>
  <div className="container">
    <a className="navbar-brand nav_brand" href="#"><img src={logoimg} alt="" /></a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}

    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="tg-icon icon-bar1"></span>
    <span class="tg-icon icon-bar2"></span>
    <span class="tg-icon icon-bar3"></span>
    </button> 

    {/* <button type="button" class="navbar-toggle x collapsed" data-toggle="collapse" data-target="#navbar-collapse-x">
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button> */}


    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <hr />
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Aboutus</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Technologies</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Careers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact us</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

     
    </div>
    

    <div className="Banner"></div>
    </div>
    
  )
  
}
