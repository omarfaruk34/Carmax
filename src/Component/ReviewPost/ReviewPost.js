import React from 'react'

export default function ReviewPost() {
  return (
    <div className='row'>
       <div className="col-xl-10">
         <h2 className='bg-primary text-light text-center p-2'>Review Customer</h2>
       <table className='table'>
  <thead className='table-dark'>
    <tr>
      <th>ORDERID</th>
      <th>DELIVERY DATE</th>
      <th>sENDER</th>
      <th>RATING</th>
      <th>COMMENT</th>
      <th>sTATUs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>10034834</td>
      <td>12-04-22</td>
      <td>MARTIN</td>
      <td>sTAIsFIED</td>
      <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, voluptatum!</td>
      <td><input type="submit" className="btn btn-danger" value="VIEW ORDER"  /></td>
    </tr>
    <tr>
      <td>10034834</td>
      <td>12-04-22</td>
      <td>MARTIN</td>
      <td>sTAIsFIED</td>
      <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, voluptatum!</td>
      <td><input type="submit" className="btn btn-danger" value="VIEW ORDER"  /></td>
    </tr>
    <tr>
      <td>10034834</td>
      <td>12-04-22</td>
      <td>MARTIN</td>
      <td>sTAIsFIED</td>
      <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, voluptatum!</td>
      <td><input type="submit" className="btn btn-danger" value="VIEW ORDER"  /></td>
    </tr>
  </tbody>
</table>
       </div>
    </div>
  )
}
