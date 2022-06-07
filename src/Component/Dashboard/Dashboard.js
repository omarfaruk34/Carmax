import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import { Badge } from 'react-bootstrap';
// import { Doughnut } from 'react-chartjs-2';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { FcSalesPerformance } from "react-icons/fc";
import { GiGrowth } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { BiArrowToBottom } from "react-icons/bi";
import { BiArrowFromBottom } from "react-icons/bi";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { MdOutlineVisibility } from "react-icons/md";


// import { VictoryPie } from "victory";

import { Table } from 'react-bootstrap';




export default function Dashboard() {
  const data = [{ name: '2018', uv: 400, pv: 2400, amt: 2400 }, { name: '2019', uv: 600, pv: 2700, amt: 2700 }, { name: '2020', uv: 300, pv: 2000, amt: 2000 }, { name: '2021', uv: 600, pv: 2900, amt: 2900 }, { name: '2022', uv: 700, pv: 3000, amt: 3000 }];
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/orders?email=${user.email}')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);
  return (
    <div className='py-2'>
      <div className="welcome bg-light mb-3 shadow border rounded">
        <h4 className='text-light'>Welcome Admin</h4>
        <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quidem minima id dolore ducimus quia quos quibusdam a blanditiis impedit!</p>
      </div>
      <div className="portfolio-performance shadow">
        <h2>Portfolio Performance</h2>
        <div className="portfolio">
          <div className="performance">
            <div className="logo">
              <p><FcSalesPerformance /></p>
            </div>
            <div className="perform-content">
              <h4>Total sales</h4>
              <h1>1.5M</h1>
              <p><span><BiArrowToBottom />14.1%</span> less sales</p>
            </div>
          </div>

          <div className="performance">
            <div className="logo">
              <p><GiGrowth /></p>
            </div>
            <div className="perform-content">
              <h4>Capital Gains</h4>
              <h1>323K</h1>
              <p><span><BiArrowFromBottom />14.1%</span> Growth Rate</p>
            </div>
          </div>

          <div className="performance">
            <div className="logo">
              <p><IoIosPeople /></p>
            </div>
            <div className="perform-content">
              <h4>Regular Clients</h4>
              <h1>3230</h1>
              <p><span><BiArrowFromBottom />5.1%</span> Growth Rate</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sales-container">
        <div className='sales shadow'>
          <h2><HiCurrencyBangladeshi />20k</h2>
          <h4>sales last month</h4>


        </div>
        <div className='sales shadow'>
          <h2><HiCurrencyBangladeshi />50k</h2>
          <h4>sales income</h4>

        </div>
        <div className='sales shadow'>
          <h2><MdOutlineVisibility />10k</h2>
          <h4>website visitors</h4>

        </div>
        <div className='sales shadow'>
          <h2><HiCurrencyBangladeshi />550k</h2>
          <h4>total revenue</h4>

        </div>
      </div>
      <div className="chart">
        <div className="single-chart bg-light">
          <h4 className='text-center'>Lorem ipsum dolor</h4>
          <p> <LineChart width={700} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart></p>
        </div>
      </div>

      <div className="table bg-light">
        <h2 className="p-2">View All Orders</h2>
        <div className="table-content">
          <div className="content1">
            <label>show
              <select className=''>
                <option value="10" className='form-control'>10</option>
                <option value="20" className='form-control'>20</option>
                <option value="30" className='form-control'>30</option>
                <option value="40" className='form-control'>40</option>

              </select>
              entries</label>
          </div>
          <div className="content2">
            <label>search:<input type="search" className='form-control'></input></label>
          </div>
        </div>
        <Table striped bordered hover>
          <thead className='bg-dark text-light'>
            <tr>
              <th>Car</th>
              <th>Price</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          {
            orders.map(order =>
              <tbody key={order?._id}>
                <tr>
                  <td>{order?.title}</td>
                  <td>{order?.price}</td>
                  <td>{order?.name}</td>
                  <td>{order?.email}</td>
                  <td>{order?.number}</td>
                  <td>{order?.date}</td>
                  <td><Badge bg="info" text="dark">
                    {order?.status}
                  </Badge></td>

                </tr>

              </tbody>
            )
          }
        </Table>


      </div>
    </div>

  )
}
