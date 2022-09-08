import React from 'react'
import instagramlogo from "../images/instagram.png";
import twitterlogo from "../images/twitter.png";
import facebooklogo from "../images/facebook.png";
import linkedinlogo from "../images/linkedin.png";

export default function Footer() {
    return (
        <>
            <div className="container-fluid footer_main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer_sec1">
                                <h4>INDUSTRIES</h4>
                                <ul>
                                    <li>
                                        <a href="#">Banking & Financial Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Consumer Goods & Distribution</a>
                                    </li>
                                    <li>
                                        <a href="#">Hi-Tech</a>
                                    </li>
                                    <li>
                                        <a href="#">Life Sciences & Healthcare</a>
                                    </li>
                                    <li>
                                        <a href="#">Manufacturing</a>
                                    </li>
                                    <li>
                                        <a href="#">Retail</a>
                                    </li>
                                    <li>
                                        <a href="#">Automobile</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-3">
                            <div className="footer_sec2">
                                <h4>SERVICES</h4>
                                <ul>
                                    <li>
                                        <a href="#">Consulting</a>
                                    </li>
                                    <li>
                                        <a href="#">Audit</a>
                                    </li>
                                    <li>
                                        <a href="#">Cloud</a>
                                    </li>
                                    <li>
                                        <a href="#">Cyber Security</a>
                                    </li>
                                    <li>
                                        <a href="#">Enterprise Applications</a>
                                    </li>
                                    <li>
                                        <a href="#">Automation & AI</a>
                                    </li>
                                    <li>
                                        <a href="#">Analytics & AI</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_sec3">
                                <h4>INSIGHTS</h4>
                                <ul>
                                    <li>
                                        <a href="#">Blogs</a>
                                    </li>
                                    <li>
                                        <a href="#">Corporate Social Responsibility</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_sec4">
                                <h4>CONNECT WITH US</h4>
                                <ul>
                                    <li>
                                        <a href="#"><img src={instagramlogo} alt="insta" /><img src={facebooklogo} alt="faceabook" /><img src={linkedinlogo} alt="linkedin" /></a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Notice</a>
                                    </li>
                                    <li>
                                        <a href="#">Cookie Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Disclaimer</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="footer_bottom">
                        <p>©2022 Quadrafort Technologies Private Limited. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>

    )
}
