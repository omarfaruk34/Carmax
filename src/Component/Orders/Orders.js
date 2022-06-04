import React from 'react';
import {HiOutlineDesktopComputer} from "react-icons/hi";

import { Table } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';


export default function Orders() {
  return (
    <div className="table bg-light">
        <h4 className=""><span><HiOutlineDesktopComputer/></span>Order</h4>
        <Table striped bordered hover>
  <thead>
  <tr>
  <th>#</th>
      <th>User Name</th>
      <th>Car Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Phone</th>
      <th>Email</th>
      <th>staus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>1</td>
      <td>Kaled</td>
      <td>Corola</td>
      <td>2000000/-</td>
      <td>1</td>
      <td>+88033 1343 1</td>
      <td>kaled23@gmail.com</td>
      <td><Badge bg="info" text="dark">
      pending
  </Badge>{' '}</td>
    </tr>
    <tr>
    <td>1</td>
      <td>Kaled</td>
      <td>Corola</td>
      <td>2000000/-</td>
      <td>1</td>
      <td>+88033 1343 1</td>
      <td>kaled23@gmail.com</td>
      <td><Badge bg="danger" text="dark">
      pending
  </Badge>{' '}</td>
    </tr>
    <tr>
    <td>1</td>
      <td>Kaled</td>
      <td>Corola</td>
      <td>2000000/-</td>
      <td>1</td>
      <td>+88033 1343 1</td>
      <td>kaled23@gmail.com</td>
      <td><Badge bg="light" text="dark">
      pending
  </Badge>{' '}</td>
    </tr>
    <tr>
    <td>1</td>
      <td>Kaled</td>
      <td>Corola</td>
      <td>2000000/-</td>
      <td>1</td>
      <td>+88033 1343 1</td>
      <td>kaled23@gmail.com</td>
      <td><Badge bg="dark" text="danger">
      pending
  </Badge>{' '}</td> 
    </tr>
    <tr>
    <td>1</td>
      <td>Kaled</td>
      <td>Corola</td>
      <td>2000000/-</td>
      <td>1</td>
      <td>+88033 1343 1</td>
      <td>kaled23@gmail.com</td>
      <td><Badge bg="light" text="dark">
      pending
  </Badge>{' '}</td>  
    </tr>
    <tr>
    <td>1</td>
      <td>Kaled</td>
      <td>Corola</td>
      <td>2000000/-</td>
      <td>1</td>
      <td>+88033 1343 1</td>
      <td>kaled23@gmail.com</td>
      <td><Badge bg="light" text="dark">
      pending
  </Badge>{' '}</td> 
    </tr>
    <tr>
    <td>1</td>
      <td>Kaled</td>
      <td>Corola</td>
      <td>2000000/-</td>
      <td>1</td>
      <td>+88033 1343 1</td>
      <td>kaled23@gmail.com</td>
      <td><Badge bg="light" text="dark">
      pending
  </Badge>{' '}</td> 
    </tr>
    <tr>
    <td>1</td>
      <td>Kaled</td>
      <td>Corola</td>
      <td>2000000/-</td>
      <td>1</td>
      <td>+88033 1343 1</td>
      <td>kaled23@gmail.com</td>
      <td><Badge bg="light" text="dark">
      pending
  </Badge>{' '}</td> 
    </tr>
    <tr>
    <td>1</td>
      <td>Kaled</td>
      <td>Corola</td>
      <td>2000000/-</td>
      <td>1</td>
      <td>+88033 1343 1</td>
      <td>kaled23@gmail.com</td>
      <td><Badge bg="light" text="dark">
      pending
  </Badge>{' '}</td> 
    </tr>
  </tbody>
</Table>
        </div>
    
    
  )
}
