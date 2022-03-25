import React from 'react';
import "./Footer.css"
import {BsFillPhoneFill} from "react-icons/bs"
import {AiTwotoneMail} from "react-icons/ai"
import {FaLocationArrow} from "react-icons/fa"


const Footer = () => {
    return (
        <div className='footer d-flex mt-5'>

             <div className="contact d-flex p-5">
                 <div className="shop-details text-muted mx-2">
                     <h1 className='h1weight'>Car<span className='text-danger'>Max</span></h1>
                     <p className=''>Choose from over 1 thousand cars in more than 200 countries, 1000
                      professional's reviews. Book car to over 5000 destinations worldwide.</p>
                 </div>
                 <div className="contact-us text-light">
                     <h1 className='h1weight'>Con<span className='text-danger'>tact</span></h1>
                 <ul className='list-unstyled text-muted'>
                          <li> <span className='text-light'><BsFillPhoneFill/></span> Phone <br />11-55-777-88</li> <br />
                          <li><span className='text-light'><AiTwotoneMail/></span> Email <br />travel@go.com</li> <br />
                          <li> <span className='text-light'><FaLocationArrow/></span> Address <br />123, Paltan, Dhaka</li>
                      </ul>
                 </div>
                 <div className="about-us text-light">
                     <h1 className='h1weight'>About <span className='text-danger'>Us</span></h1>
                         <ul className='list-unstyled'>
                             <li className='my-1'><a className='text-decoration-none text-muted' href="">Cars</a></li>
                             <li className='my-1'><a className='text-decoration-none text-muted'  href="">About</a></li>
                             <li><a  className='text-decoration-none text-muted' href="">Contact</a></li>
                         </ul>
                 </div>
                 <div className="support text-light">
                     <h1 className='h1weight'>Sup<span className='text-danger'>port</span></h1>
                     <ul className='list-unstyled text-muted'>
                             <li className='my-1'><a className='text-decoration-none text-muted p1weight' href="">Instruction Guide</a></li>
                             <li className='my-1'><a className='text-decoration-none text-muted p1weight'  href="">Luxury Cars</a></li>
                             <li className='my-1'><a  className='text-decoration-none text-muted p1weight' href="">World Class Service</a></li>
                             <li className='my-1'><a  className='text-decoration-none text-muted p1weight' href="">Original Spare Parts</a></li>

                     </ul>
                 </div>
             </div>
<hr />

             <div className="copyright text-center text-light p-3">
                 <h2 className=' h1weight'>Copyright © 2021 CarMax.Designed By <br /><span className='text-danger'>Omar Faruk</span></h2>
                 <p className='text-danger pweight'>Term & Conditions <span className='text-light'>|</span> Privacy Policy</p>
             </div>
				
			</div>
        
        
    );
};

export default Footer;