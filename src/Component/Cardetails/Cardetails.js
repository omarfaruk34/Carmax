import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Cardetails.css"


const Cardetails = () => {
    const {carId} = useParams();
    const [cars,setCars] =useState();
    useEffect(()=>{
        fetch('/data/addcar.json')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[]);
    let matchedcar = cars?.find(car => car._id === carId);
    console.log(carId);

    return(
      <div className="details">
       <div className="details-form">
       <div className="details-img">
        <img src={matchedcar?.image} alt="" /> 
        </div>
        <div className="contact-form">
          <h1>Contact Us</h1>
          <form action="">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your email" />
            <input type="number" placeholder="Your Phone Number" />
            <input type="submit" value="SEND" />

          </form>
        </div>
       </div>
        <div className="details-content">
          <h1> {matchedcar?.title} <span>{matchedcar?.brand}</span></h1>
          <h3>${matchedcar?.price}</h3>
          <p>Color: {matchedcar?.color}</p>
          <p><span>Description:</span> {matchedcar?.description}</p>
          <button>Add to Cart</button>


        </div>

       

      </div>
    );
};
export default Cardetails;