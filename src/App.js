
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Cardetails from './Component/Cardetails/Cardetails';
import Cars from './Component/Cars/Cars';
import Contact from './Component/Contact/Contact';
import Cover from './Component/Cover/Cover-car';
import Footer from './Component/Footer/Footer';
import HeroSection from './Component/HeroSection/HeroSection';
import Home from './Component/Home/Home';
import NavBar from './Component/NavBar/NavBar';
import Review from './Component/Review/Review';
import Stat_cont from './Component/Stat/Stat_cont';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/cars" element={<Cars/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/cars/:carId" element={<Cardetails/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
