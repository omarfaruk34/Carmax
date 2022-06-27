import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Cars from '../Cars/Cars';
import Contact from '../Contact/Contact';
import Cover from '../Cover/Cover-car';
import Democar from '../DemoCar/Democar';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';
import NavBar from '../NavBar/NavBar';
import Review from '../Review/Review';
import Stat_cont from '../Stat/Stat_cont';
import Team from '../Team/Team';

const Home = () => {
    return(
        <div>
            <HeroSection/>
            <Cars/>
            <Cover/>
            <Democar/>
            <About/>
            <Stat_cont/>
            <Blog/>
            <Review/>
            <Team/>
            <Contact/>
            <Faq/>
            

        </div>
    );
};

export default Home;
