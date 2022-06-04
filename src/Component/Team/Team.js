import React from 'react';
import "./Team.css"


export default function Team() {
  return (
    <section className="team-area" id="team">
    <div className="team-container">
        <div className="section-title">
            <h4>What we do</h4>
            <h2>Team Member</h2>
            <p>Lorem ipsum dolor sit. vitae eaque minima suscipit, rem odio exercitationem!</p>
        </div>
        <div className="team shadow">
            {/* <div className="single-team" style="background-image: url('../../../public/banner-6.jpg');"> */}
            <div className="single-team img-thumbnail">
                <div className="team-content">
                    <h4>Mahfujur Rahman Khaled<span>Web Devoloper</span></h4>
                    {/* <a href=""><i class="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a> */}
                </div>
            </div>
            <div className="single-team img-thumbnail" >
                <div className="team-content">
                    <h4>Humaira Akila Nishat <span>Web Devoloper</span></h4>
                    {/* <a href=""><i class="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a> */}
                </div>
            </div>
            <div className="single-team img-thumbnail">
                <div className="team-content">
                    <h4>Omar Faruk <span>Web Devoloper</span></h4>
                    {/* <a href=""><i class="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a> */}
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
