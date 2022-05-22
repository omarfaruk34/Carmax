import React from 'react';
import Slider from "react-slick";
import "./Review.css"
import {ImQuotesRight} from "react-icons/im"
import {AiFillStar} from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"
const Review = () => {
  // const settings = {
  //             dots: true,
  //             infinite: true,
  //            speed: 500,
  //            slidesToShow: 3,
  //          slidesToScroll: 3,
  //           autoplay: true,
  //            autoplaySpeed: 4000,
  //            cssEase: "linear"
  //          };
    return (
       <div className='my-5'>
            <p className='text-center text-danger'>Review</p>
            <h1 className='text-center text-muted py-3'>Customers Review</h1>

   <div className='review bg-white py-5'>
   {/* <Slider {...settings}> */}
            <div className="review1 shadow">
                 <div className="review1_1">
                    
                 </div>
                 <div className="review1-1">
                 <h1 className='reviewer text-danger'> <span><ImQuotesRight/></span> <br /> John <br /> </h1>
                 <p className='reviewrcont text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, mollitia. <br /> <span className='text-muted'> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></span> </p>
                 </div>
            </div>

            <div className="review1 shadow">
            <div className="review1_2">

            </div>
            <div className="review1-2">
                 <h1 className='reviewer text-danger'> <span><ImQuotesRight/></span> <br /> Kane <br /> </h1>
                 <p className='reviewrcont text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, mollitia. <br /> <span className='text-muted'> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></span> </p>

                 </div>
            </div>

            <div className="review1 shadow">
            <div className="review1_3">

              </div>
              <div className="review1-3">
                 <h1 className='reviewer text-danger'> <span><ImQuotesRight/></span> <br /> Ben <br /> </h1>
                 <p className='reviewrcont text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, mollitia. <br /> <span className='text-muted'> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></span> </p>

                 </div>
            </div>
            {/* </Slider> */}
			</div>
       </div>
        
        
    );
};

export default Review;


// import React from 'react'
// import Slider from "react-slick";

// export default function Review() {
//      const settings = {
//           dots: true,
//           infinite: true,
//           speed: 500,
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           autoplay: true,
//           autoplaySpeed: 4000,
//           cssEase: "linear"
//         };
//   return (
//     <div>
//          <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//     </div>
//   )
// }
