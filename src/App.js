
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Registration from '../../../grid/src/Component/Registration/Registration';
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
import Registration from './Component/Registration/Registration';
import Login from './Component/Login/Login';
import AdminDashboard from './Component/AdminDashboard/AdminDashboard';
import AuthProvider from './Context/AuthProvider';
import AddCar from './Component/AddCar/AddCar';
import Orders from './Component/Orders/Orders';
import ReviewPost from './Component/ReviewPost/ReviewPost';
import Message from './Component/Message/Message';
import Dashboard from './Component/Dashboard/Dashboard';
import Blog from './Component/Blog/Blog';

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
       <Route path="/blog" element={<Blog/>} />
       <Route path="/cars/:carId" element={<Cardetails/>} />
       <Route path='/registration' element={<Registration/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/admin' element={<AdminDashboard/>}/>
       <Route path='/addcar' element={<AddCar/>}/>
       <Route path='/order' element={<Orders/>}/>
       <Route path='/reviewpost' element={<ReviewPost/>}/>
       <Route path='/message' element={<Message/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>




     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
