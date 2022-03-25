import React from 'react';
import "./About.css"
import {FaPeopleCarry} from "react-icons/fa"
import {FcServices} from "react-icons/fc"
import {GrProductHunt} from "react-icons/gr"
import {AiTwotoneCar} from "react-icons/ai"


const About = () => {
    return (
        <div className="about bg-light">
            {/* <p className='w-2 text-danger text-center pt-4'>About Us</p> */}
           <h1 className='title text-left mx-5 mt-5 px-5 text-muted h1weight'>Every Time We Provide <br /> <span className='text-danger'>Best Services</span></h1>
            <div className='about-content'>   
            <div className="content1 mx-3">
            <div className="content1_1">
                 <h1 className='  text-danger h1weight'><span className='icon'><FaPeopleCarry/></span> <br /> Best Instruction Guide <br /> <span className='text-justify text-muted pweight'>Make sure the car is in neutral before releasing the clutch. The neutral slot is the empty space between the gears, represented by the bar in the middle of the "H."</span>  </h1>
                 
            </div>
            <div className="side-image">

            </div>
             </div>
             <div className="content2 d-flex mx-1">
             <div className="content2_1 p-2 ">
             <h1 className='  text-danger h1weight'><span className='icon text-center'><AiTwotoneCar/></span> <br /> Laxury Cars <br /> <span className='text-justify text-muted pweight'>Make sure the car is in neutral before releasing the clutch. The neutral slot is the empty space between the gears, represented by the bar in the middle of the "H."</span>  </h1>
            </div>
            <div className="content2_2   p-2  ">
            <h1 className=' text-danger h1weight'><span className='icon'><FcServices/></span> <br /> World Class Service <br /> <span className='text-justify text-muted pweight'>Make sure the car is in neutral before releasing the clutch. The neutral slot is the empty space between the gears, represented by the bar in the middle of the "H."</span>  </h1>
             </div>
             <div className="content2_3  p-2 ">
               <h1 className=' text-danger h1weight'><span className='icon'><GrProductHunt/></span> <br /> Original Spare Parts <br /> <span className='text-justify text-muted pweight'>Make sure the car is in neutral before releasing the clutch. The neutral slot is the empty space between the gears, represented by the bar in the middle of the "H."</span>  </h1>
              
             </div>
             </div>
             </div>
             </div>
     
       
  
        
    );
};

export default About;