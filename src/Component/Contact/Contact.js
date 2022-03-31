import React from 'react';
import "./Contact.css"
const Contact = () => {
    return (
        <div className='form-container '>
            <h1 className='text-muted'>If You Have Any Question <br /><span className='text-green'>Drop A Message</span></h1>
            <div className="form-box mt-5">
                <form action="">
                     <div className="row">
                         <div className="col-xl-6 my-3 bg">
                             <input type="text" className='form-control' placeholder='Your Name Here' />
                         </div>
                         <div className="col-xl-6 my-3 bg">
                             <input type="text"  className='form-control' placeholder='Your Number Here' />
                         </div>
                         <div className="col-xl-12 my-3 bg">
                             <input type="text"  className='form-control'  placeholder='Your Email Here' />
                         </div>
                        
                         <div className="col-xl-12 my-3 bg">
                             <input type="text" className='form-control'  placeholder='Text Here' />
                         </div>
                         <div className="sub-btn col-xl-12 text-end">
                         <input type="submit" className=' rounded'/>
                         </div>
                        
                     </div>

                </form>
            </div>
				
			</div>
        
        
    );
};

export default Contact;