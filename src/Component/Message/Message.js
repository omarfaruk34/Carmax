import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import "./Message.css";
import {AiFillEdit} from "react-icons/ai";
import {AiFillDelete} from "react-icons/ai";




export default function Message() {
  const [message, setMessage] = useState([]);
  // const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/contact')
        .then(res => res.json())
        .then(data=> setMessage(data));
    },[]);
   

  return (
    <div className='row'>
        <div className="col-xl-12">
            <div className="message-heading my-2">
                <h2 className='p-2'>Messages</h2>
            </div>
        <Table className='table'>
  <thead className='table-dark'>
    <tr>
      <th>User Name</th>
      <th>Email</th>
      <th>subject</th>
      <th>Message</th>
      <th>Edit</th>
    </tr>
  </thead>
  {
  message.map(item=>
  <tbody key={item?._id}>
   <tr>
   <td>{item?.name}</td>
    <td>{item?.email}</td>
      <td>{item?.subject}</td>
      <td>{item?.message}</td>
      <td><AiFillEdit/><AiFillDelete/></td>
      </tr>
  </tbody>
  )
}
</Table>
        </div>
    </div>
  )
}
