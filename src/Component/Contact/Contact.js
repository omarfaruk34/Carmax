
import React from 'react';
import "./Contact.css";
import {FaLocationArrow} from "react-icons/fa";
import {AiFillPhone} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {DiWebplatform} from "react-icons/di";



export default function Contact() {
  return (
      
             <section className="contact-area">
        <div className="contact-container">
            <div className="section-title">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit. vitae eaque minima suscipit, rem odio exercitationem!</p>
            </div>
            <div className="contact">
                <div className="contact-address">
                      <div className="single-address">
                        <p><FaLocationArrow/></p>
                          <h4>Address <span>1123,west B block, London</span></h4>
                      </div>
                      <div className="single-address">
                        <p><AiFillPhone/></p>
                          <h4>Phone <span>+123 123 3434 454</span></h4>
                      </div>
                      <div className="single-address">
                        <p><AiOutlineMail/></p>
                          <h4>Email <span>info@gmail.com</span></h4>
                      </div>
                      <div className="single-address">
                        <p><DiWebplatform/></p>
                          <h4>Website <span>www.gmail.com</span></h4>
                      </div>
                </div>
                <div className="contact-form1">
                    <form action="">
                       <input type="text" placeholder="Your name"/>
                       <input type="email" placeholder="Your email"/>
                       <input type="text" placeholder="Your subject"/>
                       <textarea name="" id="" placeholder="Message"/>
                       <input type="submit" value="send"/>

                    </form>
                </div>
            </div>
        </div>
    </section>
       
  )
}
