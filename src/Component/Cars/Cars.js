import React, {useState, useEffect} from 'react';
import {AiFillStar} from "react-icons/ai"

import "./Cars.css"

const Cars = () => {
    const [cars,setCars] =useState();
    useEffect(()=>{
        fetch('./data/addcar.json')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])

    return (
       <div className='car'>
           <h4 className='text-center pt-5 text-danger pweight'>Popular Cars</h4>
           <h2 className='car text-center my-5 text-muted h1weight'>Most <span className='text-danger'>Popular</span> Cars<br /> In Our Shop</h2>
           <div className='car-box d-flex flex-wrap'>
               {
                   cars?.map(item=>
                    <div key={item?.id} className=" car-item my-3 border rounded shadow"> 
                        
                        <div className='image px-2 py-3 img-thumbnail'><img className='' src={item?.image} width="100%" alt="" />
                        
                        </div>
                        <div className='content d-flex justify-content-between bg-black p-3 '>
                        <div className='content_title'>
                         <h2 className='text-left text-light font-weight-bold px-1 h1weight'>{item?.title}</h2> 
                        <p className='text-danger font-weight-light mx-1 pweight'>Price: ${item?.price}</p>
                        <h4 className='text-light fs-5'>Rating: <AiFillStar/>{item?.rating}</h4>
                         </div>
                         <div className='buton car-btn'>
                             <button className='btn btn-danger'>Book Now</button>
                         </div>
                        </div>
                         
                    </div>
                    )
               }
           </div>
       </div>


        
    );
};

export default Cars;