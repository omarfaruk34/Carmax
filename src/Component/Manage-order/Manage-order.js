// import React from 'react';
import React, { useEffect, useState } from 'react';
import {HiOutlineDesktopComputer} from "react-icons/hi";

import { Table } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';


export default function Manageorders() {
  const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/orders?email=${user.email}')
        .then(res => res.json())
        .then(data=> setOrders(data));
    },[]);

  return (
    
    <div className="table my-2">
        <h2 className="p-2">Here Your Order</h2>
        
   
        <Table striped bordered hover>
  <thead className='bg-dark text-light'>
  <tr>
  <th>Car Name</th>
  <th>Price</th>
      <th>User Name</th>
      <th>Email</th>
      <th>Number</th>
      <th>Date</th>
      <th>Status</th>
      <th>Action</th>
      {/* <th>Email</th>
      <th>staus</th> */}
    </tr>
  </thead>
{
orders.map(order=>
  <tbody key={order?._id}>
    <tr>
    <td>{order?.title}</td>
    <td>{order?.price}</td>
      <td>{order?.name}</td>
      <td>{order?.email}</td>
      <td>{order?.number}</td>
      <td>{order?.date}</td>
      <td><Badge bg="info" text="dark">
     { order?.status}
  </Badge></td>
  <td>Edit Delete</td>
    </tr>

  </tbody>
  )
}
</Table>
</div>
  )
}

 
  