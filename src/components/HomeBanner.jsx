
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner1 from "../images/indexbanner1.png";
import banner2 from "../images/indexbanner2.png";
import banner3 from "../images/indexbanner3.png";
import banner4 from "../images/indexbanner4.png";
import banner5 from "../images/indexbanner5.png";
import banner6 from "../images/indexbanner6.png";
import salesforceimg from "../images/salesforce.png";
import sapimg from "../images/sap.png";
import checkpointimg from "../images/checkpoint.png";
import outsystemimg from "../images/outsystems.png";
import aiimg from "../images/ai.png";
import planimg from "../images/planning.png";
import profileside from "../images/profileshape.png"
import pen from "../images/writing.png";
import team from "../images/team.png";
import star from "../images/four-stars.png";
import office from "../images/office-worker.png";
import verify from "../images/guarantee.png";
import svg from "../images/sidesvg.svg";
import contemporary from "../images/contemporary.jpg"
import expert from "../images/expert.jpg"
import value from "../images/value.jpg"
import approach from "../images/approach.jpg"
import n_one from "../images/one.png";
import n_two from "../images/two.png";
import n_three from "../images/three.png";
import n_four from "../images/four.png";
import n_five from "../images/five.png";
import redarrow from "../images/redarrow.png";
import bluearrow from "../images/bluearrow.png";
import greenarrow from "../images/greenarrow.png";
import yellowarrow from "../images/yellowarrow.png";
import icon1 from "../images/brainstorming.png";
import icon2 from "../images/solution.png";
import icon3 from "../images/search.png";
import icon4 from "../images/technical-support.png";
import instagramlogo from "../images/instagram.png";
import twitterlogo from "../images/twitter.png";
import facebooklogo from "../images/facebook.png";
import linkedinlogo from "../images/linkedin.png";
import GPTW from "../images/GPTW.jpg"










// import required modules
import { Pagination, Navigation } from "swiper";

export default function Homeswiper() {

  function readmore1() {
    let check1 = document.getElementById("open_1");
    let btn1 = document.getElementById("diff_btn1");
    let height1 = document.getElementById("diff_content1");
    let spantag = document.getElementById("spanhide");
    if (check1.style.display === "none") {
      check1.style.display = "block"
      height1.style.height = "auto"
      spantag.style.display = "none"

      btn1.innerHTML = "Read less"
      btn1.style.bottom="0%"


    }
    else {
      check1.style.display = "none"
      height1.style.height = "230px"
      btn1.innerHTML = "Read more"
      btn1.style.bottom="10%"
    }
  }
  function readmore2() {
    let check1 = document.getElementById("open_2");
    let btn1 = document.getElementById("diff_btn2");
    let height1 = document.getElementById("diff_content2");
    let spantag = document.getElementById("spanhide1");
    if (check1.style.display === "none") {
      check1.style.display = "block"
      height1.style.height = "auto"
      btn1.innerHTML = "Read less"
      btn1.style.bottom="0%"
      spantag.style.display = "none"
    }
    else {
      check1.style.display = "none"
      height1.style.height = "230px"
      btn1.style.bottom="10%"
      btn1.innerHTML = "Read more"
      spantag.style.display = "block"
    }
  }
  function readmore3() {
    let check1 = document.getElementById("open_3");
    let btn1 = document.getElementById("diff_btn3");
    let height1 = document.getElementById("diff_content3");
    let spantag = document.getElementById("spanhide2");
    if (check1.style.display === "none") {
      check1.style.display = "block"
      height1.style.height = "auto"
      btn1.innerHTML = "Read less"
      btn1.style.bottom="0%"
      spantag.style.display = "none"
    }
    else {
      check1.style.display = "none"
      height1.style.height = "230px"
      btn1.innerHTML = "Read more"
      btn1.style.bottom="10%"
      spantag.style.display = "block"
    }
  }
  function readmore4() {
    let check1 = document.getElementById("open_4");
    let btn1 = document.getElementById("diff_btn4");
    let height1 = document.getElementById("diff_content4");
    let spantag = document.getElementById("spanhide3");
    if (check1.style.display === "none") {
      check1.style.display = "block"
      height1.style.height = "auto"
      btn1.innerHTML = "Read less"
      spantag.style.display = "none"
      btn1.style.bottom="0%"
    }
    else {
      check1.style.display = "none"
      height1.style.height = "230px"
      btn1.innerHTML = "Read more"
      btn1.style.bottom="10%"
      spantag.style.display = "block"
    }
  }



  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        // navigation={{
        //     prevEl: ".swiper-button-next",
        //     nextEl: ".swiper-button-prev"
        //   }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper1">
            <img src={banner1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper1">
            <img src={banner2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper1">
            <img src={banner3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper1">
            <img src={banner4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper1">
            <img src={banner5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper1">
            <img src={banner6} alt="" />
          </div>
        </SwiperSlide>

      </Swiper>

      <div className="Pillersec container-fluid">
        <div className="container">
          <div className="pillersec_head">
            <h1><span>O</span>ur practice pillers</h1>
            <p>We do our best to give you more services</p>
          </div>
          <div className="row piller_sec_card">
            <div className="col-lg-4">
              <div className="piller_card" data-aos="fade-left">
                <img src={sapimg} alt="sap" />
                <h5>SAP</h5>
                <p>SAP solution is tailored to support your business needs in your industry and any geography for the digital age. </p>
                <a href="#">Learn more</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="piller_card card_pink" data-aos="fade-up">
                <img src={salesforceimg} alt="salesforce" />
                <h5>Salesforce</h5>
                <p>Get back to growth with the world’s #1 CRM, powered by Customer 360 to deliver seamless customer experiences across multiple business units and touchpoints.</p>
                <a href="#">Learn more</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="piller_card" data-aos="fade-right">
                <img src={checkpointimg} alt="checkpoint" />
                <h5>Checkpoint</h5>
                <p>Protect your enterprise network from the most sophisticated cyber-attacks with the highest caliber of security, and world’s highest performing security gateways.</p>
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
          <div className="row piller_sec_card">
            <div className="col-lg-4">
              <div className="piller_card card_green" data-aos="fade-left">
                <img src={outsystemimg} alt="outsystem" />
                <h5>Outsystem</h5>
                <p>Build Applications Fast, Right, and for the Future with Low-Code. With the OutSystems low-code development platform.</p>
                <a href="#">Learn more</a>

              </div>
            </div>
            <div className="col-lg-4">
              <div className="piller_card" data-aos="fade-up">
                <img src={aiimg} alt="AI" />
                <h5>AI</h5>
                <p>AI's ability to adeptly work with data analytics is the primary reason why artificial intelligence and big data are now seemingly inseparable.</p>
                <a href="#">Learn more</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="piller_card card_orange" data-aos="fade-right">
                <img src={planimg} alt="ML" />
                <h5>Business Process Re-engineering</h5>
                <p>Involves the radical redesign of core business processes to achieve dramatic improvements in productivity, cycle times and quality.</p>
                <a href="#">Learn more</a>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid company_aboutsec">
        <div className="about_sec container">
          <div className="about_sec_head">
            <h1><span>P</span>rofile at a Glance</h1>
          </div>
          <div className="profile_card_head container">
            <div className="col-lg-6">
              <div className="profile_card_left">
                <h2><span>W</span>e are an IT consulting firm Empowering customers in their digital transformation initiative.</h2>
                {/* <img src={profileside} alt="" className="sideimgprofile" /> */}
                {/* <a href="#" className="btn btn-success">learn more</a> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="svg_side">
                <img src={svg} alt="svg" />
              </div>
            </div>
            <div className="cards_profile_">
              <div className="profile_card_right">
                <div className="profile_row row">
                  <div className="Profile_side col-lg-6 ">
                    <div className="served spec" data-aos="zoom-in-up">
                      <img src={pen} alt="" />
                      <img src={n_one} alt="" className="side_pro" />
                      <h2>Served 65+</h2>
                      <p>Enterprise customers Worldwide</p>
                    </div>
                  </div>
                  <div className="Profile_side col-lg-6">
                    <div className="team spec" data-aos="zoom-in-up">
                      <img src={team} alt="" />
                      <img src={n_two} alt="" className="side_pro" />
                      <h2>Team of 120+</h2>
                      <p>Information Technology professionals</p>
                    </div>
                  </div>

                </div>
                <div className="profile_row row">
                  <div className="Profile_side col-lg-6 ">
                    <div className="iso spec" data-aos="zoom-in-up">
                      <img src={verify} alt="" />
                      <img src={n_three} alt="" className="side_pro" />
                      <h2>ISO 27001:2013,ISO 9001:2015</h2>
                      <p>And PCI-DSS certified</p>
                    </div>
                  </div>
                  <div className="Profile_side col-lg-6 ">
                    <div className="CMMI spec" data-aos="zoom-in-up">
                      <img src={star} alt="" />
                      <img src={n_four} alt="" className="side_pro" />
                      <h2>CMMi Level 5</h2>
                      <p>Compliance Certification</p>
                    </div>

                  </div>
                  <div className="profile_row">

                  </div>
                </div>
                <div className="Profile_side">
                  <div className="greatplace spec" data-aos="zoom-in-up">
                    <img src={office} alt="" />
                    <img src={n_five} alt="" className="side_pro side_p1" />
                    <img src={GPTW} alt="great place to work" className="GPTW"/>
                    <h2>Greate place to work</h2>
                    <p>Certified March 2022-March 2023</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="difference_content container-fluid">
        <div className="diff_head container">
          <h1><span>O</span>ur Core Differentiators</h1>
        </div>
        <div className="diff_cards container">
          <div className="row">
            <div className="col-lg-3" data-aos="fade-left"
              data-aos-duration="500">
              <div className="diff_card_main">
                <div className="Diff_img1">
                  <img src={contemporary} alt="contemporary" />
                </div>
                <div className="diff_content" id="diff_content1">
                  <h3>Contemporary</h3>
                  <p>Our team has expertise in a host of contemporary solutions such as Salesforce, SAP,<span id="spanhide">...</span><span id="open_1"> Tableau, MuleSoft, CPQ, Custom development, and Industry specific clouds .</span>
                  </p>
                  <button className="btn1" id="diff_btn1" onClick={readmore1}>Read more</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3" >
              <div className="diff_card_main" data-aos="fade-left"
                data-aos-duration="500">
                <div className="Diff_img2">
                  <img src={expert} alt="contemporary" />
                </div>
                <div className="diff_content" id="diff_content2">
                  <h3>Expertise</h3>
                  <p>Our team is 100% certified and has the experience of working in various<span id="spanhide1">...</span><span id="open_2">domain as well as industry verticals with our subject matter experts adding value at every step .</span>
                  </p>
                  <button className="btn2" id="diff_btn2" onClick={readmore2}>Read more</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="diff_card_main" data-aos="fade-left"
                data-aos-duration="500">
                <div className="Diff_img3">
                  <img src={value} alt="contemporary" />
                </div>
                <div className="diff_content" id="diff_content3">
                  <h3>Value Added Services</h3>
                  <p>Along with product implementation, we also<span id="spanhide2">...</span><span id="open_3"> re–engineering  offer process consulting and services which are some of the crucial offerings from our portfolio. We assist the enterprise with a complete adoption of new technology.</span>
                  </p>


                  <button className="btn3" id="diff_btn3" onClick={readmore3}>Read more</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="diff_card_main" data-aos="fade-left"
                data-aos-duration="500">
                <div className="Diff_img4">
                  <img src={approach} alt="contemporary" />
                </div>
                <div className="diff_content" id="diff_content4">
                  <h3>Templatized Delivery Approach</h3>
                  <p>Our quick start templates are defined <span id="spanhide3">...</span><span id="open_4">business process wise and industry wise and are enriched with best practices and industry standards.</span>
                  </p>

                  <button className="btn4" id="diff_btn4" onClick={readmore4}>Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid wedosec ">
        <div className=" container">
          <div className="head_wedo_Sec">
            <h1><span>W</span>hat we do?</h1>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="wedo_cards1 wedocard_S" data-aos="fade-right"
                data-aos-duration="500" >
                <img src={icon1} alt="icon" />
                <h3>Consulting</h3>
                <ul>
                  <li>Process Audit</li>
                  <li>KPI Setup</li>
                  <li>Process Engineering</li>
                  <li>Data Science</li>
                </ul>
                <img src={bluearrow} alt="arrow" className="arrow_wedo" />
              </div>
            </div>
            <div className="col-lg-3 ">
              <div className="wedo_cards2 wedocard_S" data-aos="fade-right"
                data-aos-duration="500">
                <img src={icon2} alt="icon" />
                <h3>Solution Implementation</h3>
                <ul>
                  <li>implementation</li>
                  <li>System Integration</li>
                  <li>Migration</li>
                </ul>
                <img src={yellowarrow} alt="arrow" className="arrow_wedo" />
              </div>
            </div>
            <div className="col-lg-3 ">
              <div className="wedo_cards3 wedocard_S" data-aos="fade-right"
                data-aos-duration="500">
                <img src={icon3} alt="icon" />
                <h3>Audit and Optimization</h3>
                <ul>
                  <li>Quality Audit</li>
                  <li>Best practice</li>
                  <li>Product Re-Engineering​</li>
                </ul>
                <img src={greenarrow} alt="arrow" className="arrow_wedo" />
              </div>
            </div>
            <div className="col-lg-3 ">
              <div className="wedo_cards4 wedocard_S" data-aos="fade-right"
                data-aos-duration="500">
                <img src={icon4} alt="icon" />
                <h3>Support and Adoption</h3>
                <ul>
                  <li>Dedicated Support</li>
                  <li>Change Management</li>
                  <li>SLA Based Support​</li>
                  <li>Training

                  </li>
                </ul>
                <img src={redarrow} alt="arrow" className="arrow_wedo" />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="blog_index_sec container-fluid">
        <div className="social_blocks">
          <div className="fb_">
              <a href="#"><img src={facebooklogo} alt="fb" /></a>
          </div>
          <div className="insta_">
          <a href="#"><img src={instagramlogo} alt="instagram" /></a>
          </div>
          <div className="twitter_">
          <a href="#"><img src={twitterlogo} alt="twitter" /></a>
            </div>
            <div className="linkdin_">
          <a href="#"><img src={linkedinlogo} alt="linkedin" /></a>
            </div>
        </div>
        <div className="container">
          <div className="head_blog_index">
            <h1><span>I</span>nsights</h1>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="b_card_" data-aos="zoom-in-down">
                <div className="blog_card_one">
                  <div className="date_blog">
                      <p>Date: 07 August 2022</p>
                  </div>
                </div>
                
                <h3>A 360 degree customer experience in banking using Salesforce.com</h3>
                <p>The strength of retail banks around the world is that they provide their customers an immersive experience into the multi-faceted banking products and..</p>
                <a href="#">Read more</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="b_card_" data-aos="zoom-in-down">
                <div className="blog_card_two">
                  <div className="date_blog">
                      <p>Date: 24 July 2022</p>
                  </div>
                </div>
                <h3>low-code application development will be responsible for...</h3>
                <p>This isn’t just about streamlining development, it’s about developing solutions that move the needle for the business Low-code is a visual approach to..</p>
                <a href="#">Read more</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="b_card_" data-aos="zoom-in-down">
                <div className="blog_card_three">
                  <div className="date_blog">
                  <p>Date: 13 June 2022</p>
                  </div>
                </div>
                <h3>Metaverse – A <br /> paradigm shift in Technology</h3>
                <p>One of the most hyped or overhyped word in Technology realm today is Metaverse. Metaverse will be the immersive 3D transformation..</p>
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    
    </>
  );
}



