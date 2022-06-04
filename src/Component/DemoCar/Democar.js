import React from 'react';
import Slider from "react-slick";
import "./Democar.css"

export default function Democar() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true
      };
  return (
    <section className="car-area">
        <div className="car-container">
            <div className="car-container1">
                <div className="section-title">
                   <h4>What we do</h4>
                   <h2>Latest Car</h2>
                </div>
    
                <div className="latest-car">
                <Slider {...settings}>
                    <div className="single-latest-car shadow ">
                        <div className="image">
                            <img src="" alt="" />
                        </div>
                        <div className="latest-car-content">
                            <h1>BMW</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur <br /> Lorem ipsum dolor sit amet.</p>
                            <div className="price">
                                <h2>Price: $8487</h2>
                                <h2>Milege: 42 mi</h2>
                            </div>
                            <h4>Rating: </h4>
                            <button className='btn btn-light'>Explore Now</button>
                        </div>
                    </div>
                    <div className="single-latest-car shadow">
                        <div className="image">
                            <img src="" alt="" />
                        </div>
                        <div className="latest-car-content">
                            <h1>BMW</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur <br /> Lorem ipsum dolor sit amet.</p>
                            <div className="price">
                                <h2>Price: $8487</h2>
                                <h2>Milege: 42 mi</h2>
                            </div>
                            <h4>Rating: </h4>
                            <button className='btn btn-light'>Explore Now</button>
                        </div>
                    </div>
                    <div className="single-latest-car shadow">
                        <div className="image">
                            <img src="" alt="" />
                        </div>
                        <div className="latest-car-content">
                            <h1>BMW</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur <br /> Lorem ipsum dolor sit amet.</p>
                            <div className="price">
                                <h2>Price: $8487</h2>
                                <h2>Milege: 42 mi</h2>
                            </div>
                            <h4>Rating: </h4>
                            <button className='btn btn-light rounded'>Explore Now</button>
                        </div>
                    </div>
                    </Slider>
                </div>
            </div>

        </div>
    </section>
  )
}
