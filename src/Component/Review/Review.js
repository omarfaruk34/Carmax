import React from 'react';
import "./Review.css"
import {ImQuotesRight} from "react-icons/im"
import {AiFillStar} from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"
const Review = () => {
    return (
       <div className='my-5'>
            <p className='text-center text-danger'>Review</p>
            <h1 className='text-center text-muted py-3'>Customers Review</h1>

   <div className='review bg-white py-5'>
 
            <div className="review1 mx-5 p-3 shadow">
                 <div className="review1_1">
                    
                 </div>
                 <div className="review1-1">
                 <h1 className='reviewer text-danger'> <span><ImQuotesRight/></span> <br /> John <br /> </h1>
                 <p className='reviewrcont text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, mollitia. <br /> <span className='text-muted'> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></span> </p>
                 </div>
            </div>

            <div className="review1 mx-2 p-3 shadow">
            <div className="review1_2">

            </div>
            <div className="review1-2">
                 <h1 className='reviewer text-danger'> <span><ImQuotesRight/></span> <br /> Kane <br /> </h1>
                 <p className='reviewrcont text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, mollitia. <br /> <span className='text-muted'> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></span> </p>

                 </div>
            </div>

            <div className="review1 mx-5 p-3 shadow">
            <div className="review1_3">

              </div>
              <div className="review1-3">
                 <h1 className='reviewer text-danger'> <span><ImQuotesRight/></span> <br /> Ben <br /> </h1>
                 <p className='reviewrcont text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, mollitia. <br /> <span className='text-muted'> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></span> </p>

                 </div>
            </div>
				
			</div>
       </div>
        
        
    );
};

export default Review;