import React from "react";
import {AiFillStar} from "react-icons/ai";
import { Link } from "react-router-dom";

const Car = (props) => {
const {image,title,price,rating, _id} = props.demo;
    return(
        <div className=" car-item my-3 border rounded shadow"> 
                        
        
        <div className='image px-2 py-3 img-thumbnail'><img className='' src={image} width="100%" alt="" />
        
        </div>
        <div className='content d-flex justify-content-between bg-black p-3 '>
        <div className='content_title'>
         <h2 className='text-left text-light font-weight-bold px-1 h1weight'>{title}</h2> 
        <p className='text-danger font-weight-light mx-1 pweight'>Price: ${price}</p>
        <h4 className='text-light fs-5'>Rating: <AiFillStar /> {rating}</h4>
         </div>
         <div className='buton car-btn'>
            <Link to={`cars/${_id}`}> <button className='btn btn-danger'>Book Now</button></Link>
         </div>
        </div>
         
    </div>
    );
};

export default Car;

