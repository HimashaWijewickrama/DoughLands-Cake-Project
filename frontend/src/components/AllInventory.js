import React, { useState,useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "./AllInventory.css";
import Itemcard from "./Itemcard"; 
import data from "./data";
import "../assets/logo.PNG"


const AllInventories = (props)=>{
  const [inventories, setInventories] = useState([]);

  // search function
  const [results, setResults] = useState([])
  const [searchInput, setSearchInput] = useState('')

    useEffect(()=>{
        loadUsers();
    },[]);

 //on page load display all records
    const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8050/inventory/");
        setInventories(result.data.reverse());
    };

    function deleteInventory(id){
        axios.delete(`http://localhost:8050/inventory/delete/${id}`).then(()=>{
        /*alert("Delete Successful");*/

        }).catch((err)=>{
            console.log(err);
        })
        window.location.reload();
        alert("Inventory item was deleted successfully!");
    }

    //define useEffect method for filter data for search function
    useEffect(() => {

      if (searchInput === '') {
        setResults(inventories)
      } else {
        let results = inventories.filter(
          (inventory) =>
          inventory.name.toLowerCase().includes(searchInput) ||
          inventory.category.toLowerCase().includes(searchInput) 
          )
          setResults(results)
    }
  }, [searchInput, inventories])

//start of the return
    return (         
    <div className="container">
        <div className="container">
           {/*quick guide card views*/}
        <h2 className="text-center mt-3">Quick Guide</h2>
        <section className="py-4 container">
            <div className="row justify-content-center">
                {data.ItemData.map((item,index)=>{
                    return (
                        <Itemcard img={item.img} title={item.title} desc={item.desc} more={item.more}  key={index}/>
                      )
                })}
            </div>
        </section>
        </div><br/><br/>

         {/*start of the table view card*/}
<div className="row">
  <div className="col-lg-9 mt-2 mb-2">   
</div>  </div>
<div className="conatiner">
<div className="col d-flex justify-content-center">
  <div className="card0" style={{width:"1200px"}}>
  <img className="card-img-top0"/>
<div className="card-body">
  <h5 className="card-title">All Inventory Details</h5>
  <h6 className="card-subtitle mb-2 text-muted">* This is the entire inventory details of the company..!</h6><br/>
  {/*Search Function*/}

{/*<input className='form-control' type='search' placeholder='Search inventory' name='searchQue' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>*/}
<div class="input-group rounded"  style={{width:'500px', alignContent:'center'}}>
  <input type="search" className="form-control rounded" placeholder="Search inventory here.." aria-label="Search"
  aria-describedby="search-addon"  name='searchQue' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div><br/>



  {/*Table view for display all the data*/}
  <table className="table table-hover table-bordered border-primary">
  <thead>
    <tr>
      {/*<th scope="col">Item ID</th>*/}
      <th scope="col">Quantity In Stock</th>
        <th scope="col">Item Name</th>
        <th scope="col">Item Category</th>
        <th scope="col">Quantity Of The Used Present</th>
        <th scope="col">Unit Price</th>
        <th scope="col">Total Cost</th>
        <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {results.map((user,index)=>(
      <tr className="raw2">{/*<td>{user._id}</td>*/}
      <td>{user.qinstock}</td>
          <td>{user.name}</td>
          <td>{user.category}</td>
          <td>{user.qusedpresent}</td>
          <td>{user.unitprice}</td>
          <td>{user.totcost}</td>
      <td>
      <th scope="col">
      <Link className="edit" to={`/update/${user._id}`}>
        <button type="submit" className="btn btn-primary">Update</button>
        </Link></th>
        <th></th>
        <th scope="col">
      <Link className="delete" onClick={()=>deleteInventory(user._id)}>
        
        <button type="submit" name="delete_btn" className="btn btn-danger">Delete</button>
        </Link>
        </th>
     </td>
    </tr>
    ))}
    </tbody>
    </table>
    <table>
            <tr><th>
            <a href="/adding" button type="submit" className="btn btn-success" >Add Inventory</a></th>
            <th></th>
           
            <th>
            <a href="/print" type="button" className="btn btn-warning">Create Stock Availability Report</a></th>
            </tr></table>
    </div>
    </div></div></div><br/><br/>
</div>
)
    
  
 }
    

export default AllInventories;