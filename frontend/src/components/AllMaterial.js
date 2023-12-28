import React, { useState,useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "./AllMaterial.css";
import ItemcardMat from "./ItemcardMat"; 
import dataMat from "./dataMat";

const AllMaterials=(props)=>{
    const [materials, setMaterials] = useState([]);

      // search function
  const [results, setResults] = useState([])
  const [searchInput, setSearchInput] = useState('')

    useEffect(()=>{
        loadUsers();
    },[]);
 //on page load display all records
    const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8050/material/all");
        setMaterials(result.data.reverse());
    };

    function deleteMaterial(id){
        axios.delete(`http://localhost:8050/material/delete/${id}`).then(()=>{
        /*alert("Delete Successful");*/

        }).catch((err)=>{
            console.log(err);
        })
        window.location.reload();
        alert("Raw material was deleted successfully!");
    }
  
//define useEffect method for filter data for search function
useEffect(() => {

  if (searchInput === '') {
    setResults(materials)
  } else {
    let results = materials.filter(
      (material) =>
      material.matname.toLowerCase().includes(searchInput) ||
      material.matcategory.toLowerCase().includes(searchInput) ||
      material.matunit.toLowerCase().includes(searchInput) 
   

      )
      setResults(results)
}
}, [searchInput, materials])

 //start of the return   

    return (
      <div className="container">

<div className="container">
  {/*quick guide card views*/}
        <h2 className="text-center mt-3">Quick Guide</h2>
        <section className="py-4 container">
            <div className="row justify-content-center">
                {dataMat.ItemData.map((item,index)=>{
                    return (
                        <ItemcardMat img={item.img} title={item.title} desc={item.desc} more={item.more}  key={index}/>
                      

                    )
                })}
             
            </div>
        </section>
        </div><br/><br/>
{/*start of the table view card*/}
<div className="col d-flex justify-content-center">
  <div className="card5" style={{width:"1200px"}}>
  <img className="card-img-top5"/>


  <div className="card-body">
  <h5 className="card-title">All Raw Material Details</h5>
  <h6 className="card-subtitle mb-2 text-muted">* This is the entire raw material details of the company..!</h6>
  {/*Search Function*/}

{/*<input className='form-control' type='search' placeholder='Search inventory' name='searchQue' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>*/}
<div class="input-group rounded"  style={{width:'500px', alignContent:'center'}}>
  <input type="search" className="form-control rounded" placeholder="Search material here.." aria-label="Search"
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
      <th scope="col">Raw Material Name</th>
        <th scope="col">Raw Material Category</th>
        <th scope="col">Material Unit</th>
        <th scope="col">Quantity In Stock</th>
 
        <th scope="col">Unit Price</th>
        <th scope="col">Total Cost</th>
        <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {results.map((user,index)=>(
      <tr className="raw1">{/*<td>{user._id}</td>*/}
      <td>{user.matname}</td>
          <td>{user.matcategory}</td>
          <td>{user.matunit}</td>
          <td>{user.maxlevel}</td>
       
          <td>{user.matunitprice}</td>
          <td>{user.mtotcost}</td>
      <td>
 

      <th scope="col">
      <Link className="edit" to={`/updated/${user._id}`}>
        <button type="submit" className="btn btn-primary">Update</button>
        </Link></th>
        <th></th>
        <th scope="col">
      <Link className="delete" onClick={()=>deleteMaterial(user._id)}>
        
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
            <a href="/added" button type="submit" className="btn btn-success">Add Material</a></th>
            <th></th>
           
            </tr></table>
    </div>
    </div>

</div>
 </div>




            
   
    )

}

export default AllMaterials; 