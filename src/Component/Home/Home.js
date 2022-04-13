import React from 'react';
import About from '../About/About';
import Cars from '../Cars/Cars';
import Contact from '../Contact/Contact';
import Cover from '../Cover/Cover-car';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';
import NavBar from '../NavBar/NavBar';
import Review from '../Review/Review';
import Stat_cont from '../Stat/Stat_cont';

const Home = () => {
    return(
        <div>
            <HeroSection/>
            <Cars/>
            <Cover/>
            <About/>
            <Stat_cont/>
            <Review/>
            <Contact/>

        </div>
    );
};

export default Home;
