import React from 'react';
import {AiFillEdit} from "react-icons/ai";
import {GrUpdate} from "react-icons/gr";
import {AiFillDelete} from "react-icons/ai";


export default function Orders() {
  return (
    <div className='row'>
      {/* <Table striped bordered hover variant="dark"> */}
      <div className="col-xl-10">
      <h2 className='bg-primary text-light text-center p-2'>Customer Order</h2>
      <table className='table'>
  <thead className='table-dark'>
    <tr>
      <th>#</th>
      <th>Order</th>
      <th>Purchased</th>
      <th>Toatal</th>
      <th>Date</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>147 admin</td>
      <td>1 item</td>
      <td>2000000/-</td>
      <td>12-02-22</td>
      <td><AiFillEdit/><GrUpdate/><AiFillDelete/></td>
    </tr>
    <tr>
      <td>2</td>
      <td>157 admin</td>
      <td>1 item</td>
      <td>2000000/-</td>
      <td>12-02-22</td>
      <td><AiFillEdit/><GrUpdate/><AiFillDelete/></td>
    </tr>
    <tr>
      <td>3</td>
      <td>147 admin</td>
      <td>1 item</td>
      <td>2000000/-</td>
      <td>12-02-22</td>
      <td><AiFillEdit/><GrUpdate/><AiFillDelete/></td>
    </tr>
  </tbody>
</table>
      </div>
  
    </div>
  )
}
