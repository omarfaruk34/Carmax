import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Cardetails.css"


const Cardetails = () => {
  const [matchedCar, setMatchedCar] = useState({})
  const { carId } = useParams();
  console.log(carId);
  useEffect(() => {
    fetch(`http://localhost:8000/addCar/${carId}`)
      .then(res => res.json())
      .then(data => setMatchedCar(data))
  }, [carId]);

  const [review, setReview] = useState({
    review: "",
    rating: "",
    profession: ""
  });

  const handleReview = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value
    });
  }
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/reviews', review)
      .then(res => {
        if (res.status === 200) {
          alert('review done');
        }
      })
  }
  console.log(matchedCar)
  const [orders, setOrder] = useState({
    carName: matchedCar?.title,
    title: "",
    price: matchedCar?.price,
    name: "",
    email: "",
    number: "",
    date: new Date(),
    status: 'pending'
  });
  const handleOrder = (e) => {
    setOrder({
      ...orders,
      [e.target.name]: e.target.value
    });
  }
  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/orders', orders)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          alert('Order in pending now');
        }
      })
  }

 

  return (
    <div className='box'>
      <div className='bradcumb'>
        <h1><span>Car</span> Order</h1>
      </div>
      {/* <div className='cod-md-8 col-sm-12 package_details'> */}
      <div className='car-detail-container'>
        <div className='car-detail-container-left'>
          <img src={matchedCar?.image} alt="" />
          <h1 className='title-detail'>{matchedCar?.title}</h1>
        </div>
        <div className='car-detail-container-right'>
          {/* <h1 className='title'>{matchedCar?.title}</h1> */}
          <h3 className='specification'>Vehicle Specifications</h3>
          <div className="list-description">
            <div className="col-lg-12">
              <ul>
                <li>
                  <span>Model:: </span>
                  <span className='Specification-part'>{matchedCar?.Model}</span>
                </li>
                <li>
                  <span>per km:: </span>
                  <span className='Specification-part'>{matchedCar?.km}</span>
                </li>
                <li>
                  <span>fuel:: </span>
                  <span className='Specification-part'>{matchedCar?.fuel}</span>
                </li>

                <li>
                  <span>engine:: </span>
                  <span className='Specification-part'>{matchedCar?.engine}</span>
                </li>
                <li>
                  <span>horsepower:: </span>
                  <span className='Specification-part'>{matchedCar?.horsepower}</span>
                </li>

                <li>
                  <span>color:: </span>
                  <span className='Specification-part'>{matchedCar?.color}</span>
                </li>
                <li>
                  <span>warrenty:: </span>
                  <span className='Specification-part'>{matchedCar?.warrenty}</span>
                </li>

              </ul>
            </div>
          </div>

        </div>
      </div>


      <div className="car-details">
        <div className="car-description">
          <h4 className='middle-title'>Vehicle Description</h4>
          <p>{matchedCar?.description}</p>
        </div>
        {/* <div className="features-safety"> */}
        <div className="car-features">
          <h4 className='middle-title'>Features</h4>
          <div className="features-list">
            <div className="features-list-part">
              <ul>
                <li>{matchedCar?.features1}</li>
                <li>{matchedCar?.features2}</li>
              </ul>
            </div>
            <div className="features-list-part">
              <ul>
              <li>{matchedCar?.features3}</li>
                <li>{matchedCar?.features4}</li>
              </ul>
            </div>
            <div className="features-list-part">
              <ul>
              <li>{matchedCar?.features5}</li>
                <li>{matchedCar?.features6}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="car-safety">
          <h4 className='middle-title'>Safety</h4>
          <div className="safety-list">
            <div className="safety-list-part">
              <ul>
                <li>{matchedCar?.safety1}</li>
              </ul>
            </div>
            <div className="safety-list-part">
              <ul>
                <li>{matchedCar?.safety2}</li>
              </ul>
            </div>
            <div className="safety-list-part">
              <ul>
                <li>{matchedCar?.safety3}</li>
              </ul>
            </div>

          </div>
        </div>
        {/* </div> */}

        <div className="warranty">
          <h4 className='middle-title'>Warranty</h4>
          <ul>
                <li>{matchedCar?.warranty}</li>
              </ul>
        </div>
      </div>




      {/* <div className='cod-md-4 col-sm-12 booking-form'>
                         <h4>Fill Up The Form For Booking Your Dream Car</h4>
                        <form>
                           
                           <input type="text" placeholder='Your Name' name="name" />
                           <br />
                           <input  type="text" placeholder='Your Email' name="email"/>
                           <br />
                           <input type="text" placeholder='Your Number' name="number" />
                           <br />
                          <div className='text-center'>
                          <input type="submit" name="submit" value="Submit"/>
                          </div>
                     </form>
                </div> */}


      <div className="contact-area">
        <div className="wrapper">
          <div className="section-title">
            {/* <h4><span>get hurry</span>contact us</h4> */}
            <h4><span>Looking for Car?</span>Fill Up The Form For Order Your Dream Car</h4>
            {/* <h4><span>Fill Up The Form For Booking Your Dream Car</span>contact us</h4> */}

          </div>
          <div className="contact">
            <div className="contact-form">
              <h5 class="title">Order Now</h5>
              <form onSubmit={handleOrderSubmit}>
                <input type="text" name="name" onChange={handleOrder} placeholder="Your Name" />
                <input type="email" name="email" onChange={handleOrder} placeholder="Your email" />
                <input type="number" name="number" onChange={handleOrder} placeholder="Your Phone Number" />
                <input type="submit" value="SEND" />

              </form>
            </div>
            <div className="contact-form">
            <h5 class="title">Review</h5> 
            <form onSubmit={handleReviewSubmit}>
        <input type="text" name="name" onChange={handleReview} placeholder="write your name" />
          <input type="text" name="review" onChange={handleReview} placeholder="write your opinion" />
          <input type="text" name="profession" onChange={handleReview} placeholder="profession" />
          <input type="text" name="rating" onChange={handleReview} placeholder="rating" />
          <input type="submit" value="submit" />
        </form>
            </div>
          </div>
        </div>
      </div>


    </div>


  );
};
export default Cardetails;