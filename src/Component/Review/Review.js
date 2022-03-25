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

   <div className='Review bg-white d-flex py-5'>
 
            <div className="review1 px-3 mx-5 my-3">
                 <div className="review1-1">
                    
                 </div>
                 <div className="review1-2">
                 <h1 className='reviewer text-danger'> <span><ImQuotesRight/></span> <br /> John <br /> <span className='reviewercont text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, mollitia.</span> <br /> <span className='text-muted'> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></span></h1>
                 </div>
            </div>

            <div className="review1 mx-2 my-3">
            <div className="review1-1">

            </div>
            <div className="review1-2">
                 <h1 className='reviewer text-danger'> <span><ImQuotesRight/></span> <br /> Kane <br /> <span className='reviewercont text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, mollitia.</span> <br /> <span className='text-muted'><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/></span></h1>
                 </div>
            </div>

            <div className="review1 px-3 mx-1 my-3">
            <div className="review1-1">

              </div>
              <div className="review1-2">
                 <h1 className='reviewer text-danger'> <span><ImQuotesRight/></span> <br /> Ben <br /> <span className='reviewercont text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, mollitia.</span> <br /> <span className='text-muted'><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/></span></h1>
                 </div>
            </div>
				
			</div>
       </div>
        
        
    );
};

export default Review;