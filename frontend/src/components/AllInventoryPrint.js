import React, { useState,useEffect } from 'react';
import axios from "axios";


const AllInventories=()=>{
    const [inventories, setInventories] = useState([]);
    useEffect(()=>{
        loadUsers();
    },[]);
     //on page load display all records
     const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8050/inventory/");
        setInventories(result.data.reverse());
    };
    
    return (
        <div className="container" align='left'>
            {/*Table view for display all the data*/}
  <table className="table table-hover table-bordered border-primary" style={{ width:'60%'}}>
  <thead>
    <tr style={{width:'10px'}}>
      {/*<th scope="col">Item ID</th>*/}
      <th scope="col" style={{width:'10px',align:'left'}} >Quantity In Stock</th>
        <th scope="col" style={{width:'10px',align:'left'}}>Item Name</th>
        <th scope="col" style={{width:'10px',align:'left'}}>Item Category</th>
        <th scope="col" style={{width:'10px',align:'left'}}>Quantity Of The Used Present</th>
        <th scope="col" style={{width:'10px',align:'left'}}>Unit Price</th>
        <th scope="col" style={{width:'2px',align:'left'}}>Total Cost</th>

    </tr>
  </thead>
  <tbody>
    {inventories.map((user,index)=>(
      <tr className="raw2">{/*<td>{user._id}</td>*/}
      <td>{user.qinstock}</td>
          <td style={{width:'10px'}}>{user.name}</td>
          <td>{user.category}</td>
          <td>{user.qusedpresent}</td>
          <td>{user.unitprice}</td>
          <td>{user.totcost}</td>
    
    </tr>
    ))}
    </tbody>
    </table>
   
            </div>
    );
}
export default AllInventories; 
