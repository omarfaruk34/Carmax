
import './App.css';
import About from './Component/About/About';
import Cars from './Component/Car/Cars';
import Contact from './Component/Contact/Contact';
import Cover from './Component/Cover/Cover-car';
import Footer from './Component/Footer/Footer';
import HeroSection from './Component/HeroSection/HeroSection';
import NavBar from './Component/NavBar/NavBar';
import Review from './Component/Review/Review';
import Stat_cont from './Component/Stat/Stat_cont';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <HeroSection/>
     <Cars/>
     <Cover/>
     <About/>
     <Stat_cont/>
     <Review/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
