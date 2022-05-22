import React, {useState, useEffect} from 'react';
import {AiFillStar} from "react-icons/ai";
import { Link } from 'react-router-dom';
import Car from '../Car/Car';



import "./Cars.css"

const Cars = () => {
    const [cars,setCars] = useState(); 
    const [filterData, setFilterData] = useState();
    const[filteredCar,setFilteredCar] = useState({
        name: "",
        priceFrom: 0,
        priceTo: 0,
        fuel: ""
    });
    const [name, setName] = useState("")
    const [priceFrom, setPriceFrom] = useState(0)
    const [priceTo, setPriceTo] = useState(0)
    const [fuel, setFuel] = useState("")
    useEffect(() => {
        fetch('http://localhost:5000/addCar')
        .then(res=> res.json())
        .then(data=>{
            setCars(data)
            setFilterData(data)
        })
    },[])
    const handleNameSearch = (e) => {
        const searchName = e.target.value ;
        console.log(searchName);
        let findCars = cars.filter(car => car.title.toLowerCase().includes(searchName?.toLowerCase()));
        console.log(findCars); 
        setFilteredCar(findCars);

    }
    const handlePriceSearch = (p) => {
        const searchPrice = p.target.value ;
        console.log(searchPrice);
        let findCars = cars.filter(car => typeof(parseInt(car.price)).includes(searchPrice?.typeof(parseInt)));
        console.log(findCars);
        setFilteredCar(findCars);
    }
    const handleBrandSearch = (b) => {
        const searchBrand = b.target.value ;
        console.log(searchBrand);
        let findCars = cars.filter(car => car.price);
        console.log(findCars);
        setFilteredCar(findCars);
    }
const handleSubmit = (e) =>{
    e.preventDefault();
    
    console.log(name,fuel,priceFrom)
    // if(name !== "" || fuel !== "" || priceFrom !== "" || priceTo !== ""){
    //     let data = cars.filter(car => car.title.toLowerCase().includes(name.toLowerCase()) && car.fuel.toLowerCase().includes(fuel.toLowerCase()) && parseInt(priceFrom) <= parseInt(car.price) && parseInt(priceTo) >= parseInt(car.price));
    //     // console.log(data)
    //     setFilterData(data);
    // }
    console.log(cars);
}

    return (
       <div className='car'>
           <h4 className='text-center pt-5 text-danger pweight'>Popular Cars</h4>
           <h2 className='car text-center my-5 text-muted h1weight'>Most <span className='text-danger'>Popular</span> Cars<br /> In Our Shop</h2>
        
         <form onSubmit={handleSubmit}>
         <div className="form-contain row">
                        <div className="col-xl-12 my-1 bg">
                             <input type="text" className='form-control' placeholder='Your Brand Name Here' onChange={e=> setName(e.target.value)} />
                         </div>
            {/* <input type="text" placeholder="Search by " onChange={e=> setName(e.target.value)}/> <br/> */}
            <div className="col-xl-12 my-1 bg">
            <label htmlFor="" className='mx-2 text-primary font-weight-bold'>Fuel:</label><select className='col-xl-10 mx-2 px-2 py-1' name="" id="" onChange={e=> setFuel(e.target.value)}>
                <option value="">select option</option>
                <option value="petrol">petrol</option>
                <option value="diesel">diesel</option>
                <option value="cng">cng</option>
            </select>
                         </div>
                         <div className="col-xl-6 my-1 bg">
                         <input type="text" className='my-1 form-control' placeholder="Search by Price from" onChange={e=> setPriceFrom(e.target.value)}/>
                         </div>
                         <div className="col-xl-6 my-1 bg">
            <input type="text"  className='my-1 form-control' placeholder="Search by Price to" onChange={e=> setPriceTo(e.target.value)}/>
                         </div>
                         <div className="col-xl-12 ">
                         <input type="submit" className='rounded' value="search"/>
                         </div>
            </div>
            </form>
         
           <div className='car-box d-flex flex-wrap'>
               {
                   filterData?.map(item=> <Car key={item.id} demo={item}/>)
                // cars?.map(item=>
                //     <div key={item?._id} className=" car-item my-3 border rounded shadow"> 
                        
                //         <div className='image px-2 py-3 img-thumbnail'><img className='' src={item?.image} width="100%" alt="" />
                        
                //         </div>
                //         <div className='content d-flex justify-content-between bg-black p-3 '>
                //         <div className='content_title'>
                //          <h2 className='text-left text-light font-weight-bold px-1 h1weight'>{item?.title}</h2> 
                //         <p className='text-danger font-weight-light mx-1 pweight'>Price: ${item?.price}</p>
                //         <h4 className='text-light fs-5'>Rating: <AiFillStar/>{item?.rating}</h4>
                //          </div>
                //          <div className='buton car-btn'>
                //            <Link to={`cars/${item?._id}`}>  <button className='btn btn-danger'>Book Now</button></Link>
                //          </div>
                //         </div>
                         
                //     </div>
                // )
                   
               }
           </div>
       </div>


        
    );
};

export default Cars;