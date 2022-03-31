import React from 'react';
import "./HeroSection.css"
import {HiArrowCircleRight} from "react-icons/hi"
const HeroSection = () => {
    return (
       <div className='hero-container text-light '>
           <h1 className='text-left mx-5 h1weight'>Welcome To Car<span className='text-danger'>Max</span></h1>
           <h2 className='text-left text-danger mx-5 mb-4 h1weight'>Find Your Deam Car</h2>
           <p className='text-left text-justify text-light mx-5 mb-4 pweight'>CarMax Verso focuses on luxury cars, performance cars and also on unique limited edition vehicles. The blog contains a range of car reviews as well as products, gadgets, and accessory reviews.</p>
           <button className='btn btn-danger rounded mx-5'>Explore Our Car <HiArrowCircleRight/> </button>
           
       </div>


        
    );
};

export default HeroSection;