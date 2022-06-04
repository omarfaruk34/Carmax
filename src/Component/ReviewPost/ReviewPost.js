import React from 'react';
import { Table } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import {HiOutlineDesktopComputer} from "react-icons/hi";


export default function ReviewPost() {
  return (
    <div className='row'>
       <div className="col-xl-12">
       
       <div className="table bg-light">
        <h4 className=""><span><HiOutlineDesktopComputer/></span>Dynamic Table</h4>
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
      <td><Badge bg="light" text="dark">
      pending
  </Badge>{' '}</td>
    
    </tr>
    <tr>
      <td>2</td>
      <td>157 admin</td>
      <td>1 item</td>
      <td>2000000/-</td>
      <td>12-02-22</td>
      
    </tr>
    <tr>
      <td>3</td>
      <td>147 admin</td>
      <td>1 item</td>
      <td>2000000/-</td>
      <td>12-02-22</td>
      
    </tr>
    <tr>
      <td>3</td>
      <td>147 admin</td>
      <td>1 item</td>
      <td>2000000/-</td>
      <td>12-02-22</td>
      
    </tr>
    <tr>
      <td>3</td>
      <td>147 admin</td>
      <td>1 item</td>
      <td>2000000/-</td>
      <td>12-02-22</td>
      
    </tr>
    <tr>
      <td>3</td>
      <td>147 admin</td>
      <td>1 item</td>
      <td>2000000/-</td>
      <td>12-02-22</td>
      
    </tr>
    <tr>
      <td>3</td>
      <td>147 admin</td>
      <td>1 item</td>
      <td>2000000/-</td>
      <td>12-02-22</td>
      
    </tr>
    <tr>
      <td>3</td>
      <td>147 admin</td>
      <td>1 item</td>
      <td>2000000/-</td>
      <td>12-02-22</td>
      
    </tr>
    <tr>
      <td>3</td>
      <td>147 admin</td>
      <td>1 item</td>
      <td>2000000/-</td>
      <td>12-02-22</td>
      
    </tr>
  </tbody>
</Table>
        </div>
       </div>
    </div>
  )
}
