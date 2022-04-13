import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
const NavBar = () => {
    return (
        <div className='nav'>
				<div className="logobar">
                    <h1 className='mx-5 pt-2 logo'><Link to={"/"}> <span className='text-danger'>Car</span><span className='text-dark'>Max</span></Link></h1>
                   {/* <img src="\..\..\..\carmax-logo.png" alt="" /> */}
                </div>
                <div className="navbar">
                    <ul className='list-unstyled d-flex pt-3 demo'>
                        <li className='mx-3 text-decoration-none text-muted'><Link to={"/"}>Home</Link></li>
                        <li className='mx-3'><Link to={"/cars"}>Cars</Link></li>
                        <li className='mx-3'><Link to={"/about"}>About Us</Link></li>
                        <li className='mx-3'><Link to={"/contact"}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="navbtn btn buttom mx-4">
                    <button className='btn-danger px-4 py-2 rounded'>Login</button>
                </div>
			</div>
        
        
    );
};

export default NavBar;