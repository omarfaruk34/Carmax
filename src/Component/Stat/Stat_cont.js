import React from 'react';
import "./Stat_cont.css"
import {RiUserSmileFill} from "react-icons/ri"
import {RiUserAddLine} from "react-icons/ri"
import {BiSupport} from "react-icons/bi"


const Stat_cont = () => {
    return (
        <div className='statContainer'>
            <p className='text-danger text-center pt-5 '>CarMax Statistics</p>
            <h2 className='text-light text-center mt-1'>We Expert <span className='text-danger'>Our Goals and</span>  We Strive <br /><span>To Provide Best</span></h2>
            <div className='stat '>
                <div className="stat1">
                    <h1 className='text-center text-light'><RiUserSmileFill/> <br /> 10072+ <br /><span className='text-light text-center mt-5'>Happy <span className='text-danger'>Customers</span> </span> </h1>
                </div>
                <div className="stat1">
                <h1 className='text-center text-light'><RiUserAddLine/> <br /> 872+ <br /><span className='text-light text-center mt-5'>Verified <span className='text-danger'>Dealers</span> </span> </h1>
                </div>
                <div className="stat1">
                <h1 className='text-center text-light'><BiSupport/> <br /> 872+ <br /><span className='text-light text-center mt-5'>Support <span className='text-danger'>Casess</span> </span> </h1> 
                </div>
            </div>
        </div>
        
        
    );
};

export default Stat_cont;