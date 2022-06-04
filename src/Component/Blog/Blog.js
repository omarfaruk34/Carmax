import React from 'react';

import {RiAdminLine} from "react-icons/ri";
import {AiOutlineComment} from "react-icons/ai";
import "./Blog.css"


export default function Blog() {
  return (
  
    <section className="blog-area" id="blog">
        <div className="blog-container">
            <div className="section-title">
                <h4>What we do</h4>
                <h2>Latest News</h2>
                <p>Lorem ipsum dolor sit. vitae eaque minima suscipit, rem odio exercitationem!</p>
            </div>
         <div className="blog">
                <div className="single-blog shadow">
                    <div className="blog-img">
                        <img src="" alt=""/>
                        <div className="img-content">
                        <p><RiAdminLine/> admin</p>
                            <p><AiOutlineComment/> 5 comments</p>
                        </div>
                    </div>
                    <h4>blog title</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repudiandae deleniti quos, rem maxime, eveniet maiores iusto consequatur quibusdam voluptatem voluptas non esse, aut cumque!
                    </p>
                    <a href="">read more</a>
                </div>

                <div className="single-blog shadow">
                    <div className="blog-img">
                        <img src="" alt=""/>
                        <div className="img-content">
                           <p><RiAdminLine/> admin</p>
                            <p><AiOutlineComment/> 5 comments</p>
                        </div>
                    </div>
                    <h4>blog title</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repudiandae deleniti quos, rem maxime, eveniet maiores iusto consequatur quibusdam voluptatem voluptas non esse, aut cumque!
                    </p>
                    <a href="">read more</a>

                </div>

                <div className="single-blog shadow">
                    <div className="blog-img">
                        <img src="" alt=""/>
                        <div className="img-content">
                        <p><RiAdminLine/> admin</p>
                            <p><AiOutlineComment/> 5 comments</p>
                        </div>
                    </div>
                    <h4>blog title</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repudiandae deleniti quos, rem maxime, eveniet maiores iusto consequatur quibusdam voluptatem voluptas non esse, aut cumque!
                    </p>
                    <a href="">read more</a>

                </div>
            </div>
        </div>
    </section>
    
   
  )
}
