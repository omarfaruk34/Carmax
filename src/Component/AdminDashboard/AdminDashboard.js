import React, { useState } from 'react';
import "./Admindashboard.css";
import { MdPayment } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { FaFirstOrderAlt } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import { AiOutlineFolderView } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

import { Link } from 'react-router-dom';
import Orders from '../Orders/Orders';
import Payment from '../Payment/Payment';
import ReviewPost from '../ReviewPost/ReviewPost';
import Dashboard from '../Dashboard/Dashboard';
import AddCar from '../AddCar/AddCar';
import Message from '../Message/Message';
import Manageorders from '../Manage-order/Manage-order';


export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("dashboard");
    console.log(activeTab)
    return (
        <div className='admin-dashboard'>
            <div className='sidebar'>
                <div className='side-nav' style={{ backgroundColor: "#333" }}>
                    <div className="logobar">
                        <h1 className='mx-3 pt-2 logo'><Link to={"/"}> <span className='text-danger'>Car</span><span className='text-light'>Max</span></Link></h1>
                        {/* <img src="\..\..\..\carmax-logo.png" alt="" /> */}
                    </div>
                    <ul className='text-light list-unstyled'>
                        <li className='' onClick={() => setActiveTab("dashboard")}><span><MdOutlineDashboard /></span>Dashboard</li>
                        <li className='' onClick={() => setActiveTab("payment")}><span><MdPayment /></span>Payment</li>
                        <li onClick={() => setActiveTab("review")}><span><MdReviews /></span>Review</li>
                        <li onClick={() => setActiveTab("orders")}><span><FaFirstOrderAlt /></span>Orders</li>
                        <li onClick={() => setActiveTab("addcar")}><span><AiFillFileAdd /></span>Add Car</li>
                        <li onClick={() => setActiveTab("manageorders")}><span><AiOutlineFolderView /></span>Manage All Orders</li>
                        <li onClick={() => setActiveTab("message")}><span><AiFillMessage /></span>View all message <span className="badge bg-danger mx-1 fs-5">4</span></li>
                        {/* <li onClick={() => setActiveTab("message")}><span><AiFillMessage/></span>View all message</li> */}
                    </ul>
                </div>
                <div className='side-content'>
                    {
                        activeTab === "dashboard" && <Dashboard />
                    }
                    {
                        activeTab === "payment" && <Payment />
                    }
                    {
                        activeTab === "review" && <ReviewPost />
                    }
                    {
                        activeTab === "orders" && <Orders />
                    }
                    {
                        activeTab === "addcar" && <AddCar />
                    }
                    {
                        activeTab === "message" && <Message />
                    }
                    {
                        activeTab === "manageorders" && <Manageorders />
                    }

                </div>
            </div>

        </div>
    )
}



