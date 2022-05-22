import React from 'react';
import "./Message.css";
import {AiFillEdit} from "react-icons/ai";
import {AiFillDelete} from "react-icons/ai";
import {BsFillReplyAllFill} from "react-icons/bs";



export default function Message() {
    let circleClasses = "inline-block p-7 rounded-full w-20 mx-auto";
    let iconStyles = { color: "#2c3e50", padding:"5px", background: "#ecf0f1", fontSize: "1.5em" };
   

  return (
    <div className='row'>
        <div className="col-xl-10">
            <div className="message-heading bg-primary text-light my-2">
                <h2 className='p-2'>Messages</h2>
                <h4 className='p-2 border-rounded'>selected 0-04 <AiFillDelete style={iconStyles}/></h4>
            </div>
        <table className='table'>
  <thead className='table-dark'>
    <tr>
      <th>Mark</th>
      <th>User</th>
      <th>Linked-in Product</th>
      <th>Message</th>
      <th>Reply</th>
      <th>Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="checkbox"/></td>
      <td>Kaled</td>
      <td><img src="../../../public/1.jpg"/></td>
      <td>Lorem, ipsum dolor sit amet consectetur adipisicing.</td>
      <td><BsFillReplyAllFill/></td>
      <td><AiFillEdit/><AiFillDelete/></td>
    </tr>
    <tr>
      <td><input type="checkbox"/></td>
      <td>Kaled</td>
      <td><img src="../../../public/1.jpg"/></td>
      <td>Lorem, ipsum dolor sit amet consectetur adipisicing.</td>
      <td><BsFillReplyAllFill/></td>
      <td><AiFillEdit/><AiFillDelete/></td>
    </tr>
    <tr>
      <td><input type="checkbox"/></td>
      <td>Kaled</td>
      <td><img src="../../../public/1.jpg"/></td>
      <td>Lorem, ipsum dolor sit amet consectetur adipisicing.</td>
      <td><BsFillReplyAllFill/></td>
      <td><AiFillEdit/><AiFillDelete/></td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
  )
}
