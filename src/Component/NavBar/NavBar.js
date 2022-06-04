import React from 'react';
import { Link } from 'react-router-dom';
// import { HashLink } from "react-router-hash-link";

import "./Navbar.css"
const NavBar = () => {
    return (
        <div className='nav sticky-top'>
				<div className="logobar">
                    <h1 className='logo'><Link to={"/"}> <span className='text-danger'>Car</span><span className='text-light'>Max</span></Link></h1>
                   {/* <img src="\..\..\..\carmax-logo.png" alt="" /> */}
                </div>
                <div className="navbar">
                    <ul className='list-unstyled d-flex demo'>
                        <li className='mx-3'><Link to={"/"}>Home</Link></li>
                        <li className='mx-3'><Link to={"/cars"}>Cars</Link></li>
                        <li className='mx-3'> <Link to ={"/about"} > About Us</Link></li>
                        <li className='mx-3'> <Link to ={"/blog"} >Blog</Link></li>
                       <li > <Link to ={"/contact"} >Contact Us</Link></li>
                       {/* <li><HashLink to={"/home#contact"}>contact</HashLink></li> */}
                    </ul>
                </div>
                <div className="navbtn btn">
                <button className='btn-danger px-4 py-2 mx-1 rounded'><Link to ={"/registration"} className="text-decoration-none  text-light ">Registration</Link></button>
                <button className='btn-danger px-4 py-2 rounded'> <Link to ={"/login"} className="text-decoration-none  text-light ">Login</Link></button>
                </div>
			</div>
        
        
    );
};

export default NavBar;