import React,{useState} from "react";
import './AddMaterial.css';
import axios from "axios";

export default function AddMaterial(){

  const [matname, setMatname] =useState("");
  const [matcategory, setMatcategory] =useState("");
  const [matunit, setMatunit] =useState("");
  const [maxlevel, setMaxlevel] =useState("");
  const [matunitprice, setMatunitprice] =useState("");
  const [mtotcost, setMtotcost] =useState("");
 

  function sendData(e){
    e.preventDefault();

  
  
  const newMaterial={
    matname, 
    matcategory,
    matunit,
    maxlevel,
    matunitprice,
    mtotcost
  }
  axios.post("http://localhost:8050/material/added", newMaterial).then(()=>{
    alert("Material was added successfully!")
  }).catch((err)=>{
    alert(err);
  })
 
}
 
  

    return (
      <div className="container">
      <div className="col d-flex justify-content-center">
<div className="card3">
<img className="card3-img-top"/>
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Adding New Raw Material Item</h1> 
      <form className="needs-validation"  onSubmit={sendData}>
       
                            <div className="form-group" style={{marginBottom:'15px'}} align="left"><div className="col-xs-4">
                  
<label style={{marginBottom:'5px'}} className="textfield2">Raw Material Name</label></div>
<input type="text" className="form-control" pattern="([^\s][A-z0-9À-ž\s]+)" name="matname" placeholder="Enter material name" onChange={(e)=>{
setMatname(e.target.value);

}}/><span className="validity"></span>
<p className="warnmsg">*Material name must be consist alphabets only.Don't start with an empty space</p></div>
          
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield2">Raw Material Category</label>
                           <select className="form-select form-select-sm" name="matcategory" aria-label=".form-select-sm example" onChange={(e)=>{
                                setMatcategory(e.target.value);}}><option selected>Select category here</option><option>Flours</option><option>Sugar</option><option>Fats and Oils</option><option>Nuts and Dry Fruits</option><option>Egg Products</option><option>Essences</option></select>
          </div>
        
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield2">Material Unit</label>
                            <select className="form-select form-select-sm" name="matunit" aria-label=".form-select-sm example" onChange={(e)=>{
                              setMatunit(e.target.value);}}><option selected>Select unit here</option><option>Kg</option><option>g</option><option>mg</option></select>
                        

          </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield2">Quantity In Stock</label>
                            <input type="text" 
                            className="form-control"
                            pattern="^\d*(\.\d{0,2})?$"
                            name="maxlevel"
                            placeholder="Enter maximum stock level" onChange={(e)=>{
                              setMaxlevel(e.target.value);
                              
                              }}/><span className="validity"></span><p className="warnmsg">*Material maximum level must be a number with optional 2 decimal places.</p>
          </div>
       
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield2">Unit Price</label>
                            <input type="text" 
                            className="form-control"
                            name="matunitprice"
                            pattern="^\d*(\.\d{0,2})?$"
                            placeholder="Enter unit price of material" onChange={(e)=>{
                              setMatunitprice(e.target.value);
                              
                              }}/><span className="validity"></span>
                              <p className="warnmsg">*Unit price must be a number with optional 2 decimal places.</p>
          </div>
          
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield2">Total Cost</label>
                            <input type="text" 
                            className="form-control"
                            name="mtotcost"
                            pattern="^\d*(\.\d{0,2})?$"
                            placeholder="Enter total cost of material in the stock" onChange={(e)=>{
                              setMtotcost(e.target.value);
                              
                              }}/><span className="validity"></span>
                              <p className="warnmsg">*Total price must be a number with optional 2 decimal places.</p>
          </div>
          
          <div className="form-group" style={{marginBottom:'15px'}} >
          <table>
            <tr><th>
            <button type="submit" className="btn btn-success">Add Material</button></th>
            <th></th>
            <th>
            <a href="/all" type="button" class="btn btn-secondary">All Materials</a></th>
            </tr></table></div>

  

      
              

      
      </form>
      </div>
      </div>
      </div>
  </div>
    );
}
