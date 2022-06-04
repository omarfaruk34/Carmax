import React from "react";
import {AiFillStar} from "react-icons/ai";
import { Link } from "react-router-dom";

const Car = (props) => {
const {image,title,price,rating, _id} = props.demo;
    return(
        <div className=" car-item my-3 shadow"> 
                        
        
        <div className='image img-thumbnail'> <img className='' src={image} width="100%" alt="" />
        <div className='car-buton'>
        <h3 className='logo'><Link to={`cars/${_id}`}>Explore Now</Link></h3>
         </div>
        </div>
        <div className='car-content p-3 '>
        <div className='car-content_title'>
         <h3 className=' text-light'>{title}</h3> 
        
        </div>
        <div className="rating">
        <h3 className='text-light'>Rating: <AiFillStar /> {rating}</h3>
        <h3 className='text-danger'>Price: ${price}</h3>
        </div>
         </div>
        
        </div>
         
     

  
    );
};

export default Car;

