import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Cardetails.css"


const Cardetails = () => {
  const [review, setReview] = useState({
    review :"",
    rating: "",
  });
  console.log(new Date());
  const handleReview = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value
    });
  }
  const handleReviewSubmit = async(e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/reviews', review)
    .then(res=>{
      if(res.status === 200){
        alert('review done');
      }
    })
  }
  // fetch('/url', {
  //   method: "POST",
  //   headers: {
  //     "content-type": 'appliction/json',
  //   },
  //   body: {
  //     JSON.stringify(review)
  //   }
  // })
  const [orders, setOrder] = useState({
    name :"",
    email: "",
    number: ""
  });
  const handleOrder = (e) => {
    setOrder({
      ...orders,
      [e.target.name]: e.target.value
    });
  }
  const handleOrderSubmit = async(e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/orders', orders)
    .then(res=>{
      console.log(res);
      if(res.status === 200){
        alert('Order in pending now');
      }
    })
  }

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
          <h1>order now</h1>
          <form onSubmit={handleOrderSubmit}>
            <input type="text" name="name" onChange={handleOrder}  placeholder="Your Name" />
            <input type="email" name="email" onChange={handleOrder} placeholder="Your email" />
            <input type="number" name="number" onChange={handleOrder} placeholder="Your Phone Number" />
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
        <form onSubmit={handleReviewSubmit}>
          <input type="text" name="review" onChange={handleReview} placeholder="write your opinion" />
          <input type="text" name="rating" onChange={handleReview} placeholder="rating" />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
};
export default Cardetails;