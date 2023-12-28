import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useHistory, useParams} from 'react-router-dom';
import "./AddInventory.css";


function UpdateInventory() {


 let history = useHistory();
 const {id} = useParams();
 const [users,setUsers]= useState({
    qinstock: "",
    name: "",
    category: "",
    qusedpresent: "",
    unitprice: "",
    totcost: ""
 

 });
   
 const{qinstock, name,category,qusedpresent, unitprice,totcost} = users;
 const onInputChange = e =>{
   setUsers({...users, [e.target.name]:e.target.value});
 };
   
    
      useEffect(() =>{
    loadUser();
 }, []);    

   const onSubmit = async e =>{
   e.preventDefault();

   await axios.put(`http://localhost:8050/inventory/update/${id}`,users)
     history.push('/');
     alert("Inventory item was updated successfully!")

     };


     const loadUser = async () =>{

       const result = await axios.get(`http://localhost:8050/inventory/get/${id}`);
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
<div className="card1">
<img className="card1-img-top"/>
    <div className="col-md-8 mt-4 mx-auto">
      <h3 className="h3 mb-3 font-weight-normal">Update Inventory Item</h3> 
      <form className="needs-validation"  onSubmit={e => onSubmit(e)}>

      <div className="form-group" style={{marginBottom:'15px'}} align="left">
              <label style={{marginBottom:'5px'}}  className="textfield1">Item ID</label><br/>
              <input type="text" className="form-control"   name="id" value={id} onChange={(e)=>onInputChange(e)} readOnly required/>
              </div>

              <div className="form-group1" style={{marginBottom:'15px'}} align="left">
                <label for="qinstock" className="form-label"  className="textfield1" style={{marginBottom:'5px'}}>Quantity Of The Use Present</label><br/>
                <input type="text" className="form-control" id="qinstock"  pattern="[0-9]+" placeholder="Enter quantity" name="qinstock" value={qinstock}  onChange={(e)=>onInputChange(e)} required  /><span className="validity"></span>
<p className="warnmsg">*Quantity must be a number</p>
                </div>
                <div className="form-group2" style={{marginBottom:'15px'}} align="left">
                  <label for="name" className="form-label"  className="textfield1" style={{marginBottom:'5px'}}>Item Name</label><br/>
                  <input type="text" className="form-control"  id="name"  pattern="([^\s][A-z0-9À-ž\s]+)" placeholder="Enter inventory item name" name="name" value={name} onChange={(e)=>onInputChange(e)} required />
                  <span className="validity"></span>
                              <p className="warnmsg">*Item name must be consist alphabets only.Don't start with an empty space</p></div>
                  <div className="form-group3" style={{marginBottom:'15px'}} align="left">
                    <label for="category"   className="textfield1" style={{marginBottom:'5px'}}>Item Category</label><br/>
                    <select className="form-select form-select-sm" id="category" aria-label=".form-select-sm example" name="category" value={category} onChange={(e)=>onInputChange(e)}><option selected>Select category here</option><option>Ovens</option><option>Spoons</option><option>Beaters</option><option>Pans</option><option>Bowls</option><option>Nozels</option><option>Piping Bags</option></select></div>
                    <div className="form-group4" style={{marginBottom:'15px'}} align="left">
                      <label for="qusedpresent"  className="textfield1"  style={{marginBottom:'5px'}}>Quantity Of the use Present</label><br/>
                            <input type="text" className="form-control" id="qusedpresent" pattern="[0-9]+" name="qusedpresent" value={qusedpresent} placeholder="Enter present use item quantity" onChange={(e)=>onInputChange(e)} required />
                            <p className="warnmsg">*Quantity must be a number</p></div>
                            <div className="form-group5" style={{marginBottom:'15px'}} align="left">
                              <label for="unitprice"  className="textfield1" style={{marginBottom:'5px'}}>Unit Price</label><br/>
                              <input type="text" className="form-control" pattern="[0-9]+" id="unitprice" name="unitprice" placeholder="Enter unit price of item" value={unitprice} onChange={(e)=>onInputChange(e)} required />
                              <span className="validity"></span>
                              <p className="warnmsg">*Price must be a number</p></div>
                              <div className="form-group6" style={{marginBottom:'15px'}} align="left">
                                <label for="totcost"  className="textfield1"style={{marginBottom:'5px'}}>Total Cost</label><br/>
                                <input type="text" className="form-control" id="totcost" name="totcost"  pattern="[0-9]+" placeholder="Enter total cost of inventory in the stock" value={totcost} onChange={(e)=>onInputChange(e)} required />
                                <span className="validity"></span>
                              <p className="warnmsg">*Price must be a number</p></div>
                                <div className="form-group7" style={{marginBottom:'15px'}} >
                                <table>
                                  <tr>
                                  <th>
                                  <button type="submit" className="btn btn-success">Update and Save</button></th>
                                  <th></th>
                                  <th>
                                    <a href="/" type="button" class="btn btn-secondary">All Inventories</a></th>
                                    </tr></table>
                                    </div>
                                    </form>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    );
                                  }
export default UpdateInventory;