import React, { useState,useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "./AllSupplier.css";
import ItemcardSup from "./ItemcardSup"; 
import dataSup from "./dataSup";


const AllSuppliers=(props)=>{
    const [suppliers, setSuppliers] = useState([]);
     // search function
  const [results, setResults] = useState([])
  const [searchInput, setSearchInput] = useState('')

    useEffect(()=>{
        loadUsers();
    },[]);
//on page load display all records
    const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8050/supplier/allsup");
        setSuppliers(result.data.reverse());
    };

    function deleteSupplier(id){
        axios.delete(`http://localhost:8050/supplier/delete/${id}`).then(()=>{
        /*alert("Delete Successful");*/

        }).catch((err)=>{
            console.log(err);
        })
        window.location.reload();
        alert("Supplier was deleted successfully!");
    }
  //define useEffect method for filter data for search function
  useEffect(() => {

    if (searchInput === '') {
      setResults(suppliers)
    } else {
      let results = suppliers.filter(
        (supplier) =>
        supplier.compname.toLowerCase().includes(searchInput) ||
        supplier.applyby.toLowerCase().includes(searchInput) ||
        supplier.supaddr.toLowerCase().includes(searchInput)||
        supplier.supdis.toLowerCase().includes(searchInput)||
        supplier.email.toLowerCase().includes(searchInput)||
        supplier.country.toLowerCase().includes(searchInput)||
        supplier.telephone.toLowerCase().includes(searchInput)||
        supplier.postalcode.toLowerCase().includes(searchInput)||
        supplier.fax.toLowerCase().includes(searchInput)
        )
        setResults(results)
  }
}, [searchInput, suppliers])


//start of the return

    return (        
    <div className="container">
<div className="container">
      {/*quick guide card views*/}
        <h2 className="text-center mt-3">Quick Guide</h2>
        <section className="py-4 container">
            <div className="row justify-content-center">
                {dataSup.ItemData.map((item,index)=>{
                    return (
                        <ItemcardSup img={item.img} title={item.title} desc={item.desc} more={item.more} key={index}/>

                    )
                })}
             
            </div>
        </section>
        </div><br/><br/>

     {/*start of the table view card*/}

<div className="col d-flex justify-content-center">
  <div className="card6" style={{width:"1200px"}}>
  <img className="card-img-top6"/>
 <div className="card-body">
  <h5 className="card-title">All Supplier Details</h5>
  <h6 className="card-subtitle mb-2 text-muted">* This is the entire all supplier details of the company..!</h6>
    {/*Search Function*/}
    <div class="input-group rounded"  style={{width:'500px', alignContent:'center'}}>
  <input type="search" className="form-control rounded" placeholder="Search suppliers here.." aria-label="Search"
  aria-describedby="search-addon"  name='searchQue' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div><br/>

  <table className="table table-hover table-bordered border-primary">
  <thead>
    <tr>
      {/*<th scope="col">Item ID</th>*/}
      <th scope="col" style={{width:"100px"}}>Applying for this by</th>
        <th scope="col" style={{width:"100px"}}>Company Name</th>
        <th scope="col" style={{width:"100px"}}>Address</th>
        <th scope="col">Distrinct</th>
        <th scope="col">Postal Code</th>
        <th scope="col">Country</th>
        <th scope="col">Company Telephone</th>
        <th scope="col">Fax</th>
        <th scope="col">Email Address</th>
        <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {results.map((user,index)=>(
      <tr className="raw2">{/*<td>{user._id}</td>*/}
      <td>{user.applyby}</td>
          <td>{user.compname}</td>
          <td>{user.supaddr}</td>
          <td>{user.supdis}</td>
          <td>{user.postalcode}</td>
          <td>{user.country}</td>
          <td>{user.telephone}</td>
          <td>{user.fax}</td>
          <td>{user.email}</td>
      <td>
 

      <th scope="col">
      <Link className="edit" to={`/updates/${user._id}`}>
        <button type="submit" className="btn btn-primary">Update</button>
        </Link></th>
        <th></th>
        <th scope="col">
      <Link className="delete" onClick={()=>deleteSupplier(user._id)}>
        
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
            <a href="/add" button type="submit" className="btn btn-success" >Add Supplier</a></th>
            <th></th>
           
            </tr></table>
    </div>
    </div>

</div>
 </div>






            
   
    )

}

export default AllSuppliers; 