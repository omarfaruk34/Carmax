import React from 'react';
import "./Navbar.css"
const NavBar = () => {
    return (
        <div className='nav'>
				<div className="logobar">
                    <h1 className='text-danger mx-5 pt-2 logo'>Car<span className='text-dark'>Max</span></h1>
                   {/* <img src="\..\..\..\carmax-logo.png" alt="" /> */}
                </div>
                <div className="navbar">
                    <ul className='list-unstyled d-flex pt-3'>
                        <li className='mx-3'><a href="" className='text-decoration-none text-muted'>Home</a></li>
                        <li className='mx-3'><a href="" className='text-decoration-none text-muted'>Cars</a></li>
                        <li className='mx-3'><a href="" className='text-decoration-none text-muted'>About Us</a></li>
                        <li className='mx-3'><a href="" className='text-decoration-none text-muted'>Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbtn btn buttom mx-4">
                    <button className='btn-danger px-4 py-2 rounded'>Login</button>
                </div>
			</div>
        
        
    );
};

export default NavBar;