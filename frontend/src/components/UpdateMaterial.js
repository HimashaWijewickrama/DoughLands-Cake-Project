import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useHistory, useParams} from 'react-router-dom';
import "./AddMaterial.css";


function UpdateMaterial() {


 let history = useHistory();
 const {id} = useParams();
 const [users,setUsers]= useState({

    matname: "", 
    matcategory: "",
    matunit: "",
    maxlevel: "",

    matunitprice: "",
    mtotcost: ""
 

 });
   
 const{matname, matcategory,matunit,maxlevel, matunitprice,mtotcost} = users;
 const onInputChange = e =>{
   setUsers({...users, [e.target.name]:e.target.value});
 };
 
   
    
      useEffect(() =>{
    loadUser();
 }, []);    

   const onSubmit = async e =>{
   e.preventDefault();

   await axios.put(`http://localhost:8050/material/updated/${id}`,users)
     history.push('/all');
     alert("Material item was updated successfully!")


     };


     const loadUser = async () =>{

       const result = await axios.get(`http://localhost:8050/material/gets/${id}`);
       setUsers(result.data);
       
     };

/*
  

  function EditInventory(props) {
  let id = props.match.params.id;

  const [data, setData] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8050/inventory/${id}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  const onInputChange = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };



  function onSubmit() {

    axios.put(`http://localhost:8050/inventory/update/${id}`, data).then(()=>{
      alert("Updated successfully"); 
    }).catch((err) => {
      console.log(err);
    })
    window.location.replace('/');
  };
*/
return (
  <div className="container">
     <div className="col d-flex justify-content-center">
     <div className="card3">
<img className="card3-img-top"/>  <div className="col-md-8 mt-4 mx-auto">

 <h3 className="h3 mb-3 font-weight-normal">Update Raw Material Item</h3> 
      <form className="needs-validation" onSubmit={e => onSubmit(e)}>

    
<div className="form-group" style={{marginBottom:'15px'}} align="left"><label for="id" className="form-label" style={{marginBottom:'5px'}} className="textfield2">Material ID</label>
<input type="text" className="form-control"  placeholder="Update material ID" name="id" value ={id} onChange={(e)=>onInputChange(e)} readOnly required />
</div>
<div className="form-group" style={{marginBottom:'15px'}} align="left">
                  <label for="matname" className="form-label" style={{marginBottom:'5px'}} className="textfield2">Material Name</label>
                  <input type="text" className="form-control"  id="matname" pattern="([^\s][A-z0-9À-ž\s]+)" placeholder="Enter material name" name="matname" value ={matname} onChange={(e)=>onInputChange(e)} required /> <span className="validity"></span>
                              <p className="warnmsg">*Material name must be consist alphabets only.Don't start with an empty space</p></div>
<div className="form-group" style={{marginBottom:'15px'}} align="left">
                  <label for="matcategory" className="form-label" style={{marginBottom:'5px'}} className="textfield2">Material Category</label>
                 
                  <select className="form-select form-select-sm" id="matcategory" aria-label=".form-select-sm example" name="matcategory" value={matcategory} onChange={(e)=>onInputChange(e)}>
                  <option selected>Select category here</option><option>Flours</option><option>Sugar</option><option>Fats and Oils</option><option>Nuts and Dry Fruits</option><option>Egg Products</option><option>Essences</option></select></div>
<div className="form-group" style={{marginBottom:'15px'}} align="left">
                  <label for="matunit" className="form-label" style={{marginBottom:'5px'}} className="textfield2">Material Unit</label>
                  
                  <select className="form-select form-select-sm" id="matunit" aria-label=".form-select-sm example" name="matunit" value={matunit} onChange={(e)=>onInputChange(e)}>
                  <option selected>Select unit here</option><option>Kg</option><option>g</option><option>mg</option></select></div>
<div className="form-group" style={{marginBottom:'15px'}} align="left">
                  <label for="maxlevel" className="form-label" style={{marginBottom:'5px'}} className="textfield2">Quatity In Stock</label>
                  <input type="text" className="form-control"  id="maxlevel" placeholder="Enter material level" name="maxlevel" pattern="^\d*(\.\d{0,2})?$" value ={maxlevel} onChange={(e)=>onInputChange(e)} required />
                  <span className="validity"></span>
                              <p className="warnmsg">*Material maximum level must be a number with optional 2 decimal places.</p></div>

<div className="form-group" style={{marginBottom:'15px'}} align="left">
                  <label for="matunitprice" className="form-label" style={{marginBottom:'5px'}} className="textfield2">Material Unit Price</label>
                  <input type="text" className="form-control"  id="matunitprice" placeholder="Enter material unit price" name="matunitprice" pattern="^\d*(\.\d{0,2})?$" value ={matunitprice} onChange={(e)=>onInputChange(e)} required />
                  <span className="validity"></span>
                              <p className="warnmsg">*Unit price must be a number with optional 2 decimal places.</p></div>
<div className="form-group" style={{marginBottom:'15px'}} align="left">
                  <label for="mtotcost" className="form-label" style={{marginBottom:'5px'}} className="textfield2">Total Cost</label>
                  <input type="text" className="form-control"  id="mtotcost" placeholder="Enter total cost" name="mtotcost"  pattern="^\d*(\.\d{0,2})?$"  value ={mtotcost} onChange={(e)=>onInputChange(e)} required />
                  <span className="validity"></span>
                              <p className="warnmsg">*Total Cost must be a number with optional 2 decimal places.</p></div> <div className="form-group7" style={{marginBottom:'15px'}} >
              <table>
                                  <tr>
                                  <th>
              <button type="submit" className="btn btn-success">Update and Save</button></th><th></th>
                                  <th>
                                  <a href="/all" type="button" class="btn btn-secondary">All Materials</a></th>
                                    </tr></table></div>



</form>
</div></div></div>
</div>




    
      

      
                                   
                                    );
                                  }
export default UpdateMaterial;