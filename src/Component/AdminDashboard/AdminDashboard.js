import React, { useState } from 'react'
import Orders from '../Orders/Orders';
import Payment from '../Payment/Payment';
import ReviewPost from '../ReviewPost/ReviewPost';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("payment");
    console.log(activeTab)
  return (
    <div className='row'>
        <div className='col-md-2' style={{backgroundColor: "red"}}>
            <ul>
                <li onClick={() => setActiveTab("payment")}>Payment</li>
                <li onClick={() => setActiveTab("review")}>Review</li>
                <li onClick={() => setActiveTab("orders")}>Orders</li>
                <li onClick={() => setActiveTab("addcar")}>Add Car</li>
                <li onClick={() => setActiveTab("allorders")}>View All Orders</li>
                <li onClick={() => setActiveTab("manageorders")}>Manage All Orders</li>
                <li onClick={() => setActiveTab("message")}>View all message</li>
            </ul>
        </div>
        <div className='col-md-10'>
            {
                activeTab === "payment" && <Payment/>
            }
            {
                activeTab === "review" && <ReviewPost/>
            }
            {
                activeTab === "orders" && <Orders/>
            }
        </div>
    </div>
  )
}
