import React,{useState} from "react";
import './AddInventory.css';
import axios from "axios";


export default function AddInventory(){
  


  

  const [qinstock, setQinstock] =useState("");
  const [name, setName] =useState("");
  const [category, setCategory] =useState("");
  const [qusedpresent, setQusedpresent] =useState("");
  const [unitprice, setUnitprice] =useState("");
  const [totcost, setTotcost] =useState("");

 

  function sendData(e){
    e.preventDefault();


  
  
  const newInventory ={
    qinstock, 
        name,
        category,
        qusedpresent,
        unitprice,
        totcost
  }
  axios.post("http://localhost:8050/inventory/adding", newInventory).then(()=>{
    alert("Inventory item was added successfully!")


  }).catch((err)=>{
    alert(err);
  })


 
}

 
  

    return (
      <div className="container">
        <div className="col d-flex justify-content-center">
  <div className="card1">
  <img className="card1-img-top"/>
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Adding New Inventory Item</h1> 
      <form className="needs-validation"  onSubmit={sendData}>
       
                            <div className="form-group" style={{marginBottom:'15px'}} align="left">  <div className="col-xs-4">
                  
<label style={{marginBottom:'5px'}} className="textfield1">Quantity In Stock</label></div>
<input type="text" className="form-control" name="qinstock"  pattern="[0-9]+" placeholder="Enter quantity in stock" onChange={(e)=>{
setQinstock(e.target.value);

}}/><span className="validity"></span>
<p className="warnmsg">*Quantity must be a number</p>
          </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield1">Item Name</label>
                            <input type="text" 
                            className="form-control"
                            pattern="([^\s][A-z0-9À-ž\s]+)"
                            
                            name="name"
                            placeholder="Enter inventory item name" onChange={(e)=>{
                              setName(e.target.value);
                              
                              }}/>
          </div>

                              
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield1">Item Category</label>
                            <select className="form-select form-select-sm" name="category" aria-label=".form-select-sm example" onChange={(e)=>{
                                setCategory(e.target.value);}}><option selected>Select category here</option><option>Ovens</option><option>Spoons</option><option>Beaters</option><option>Pans</option><option>Bowls</option><option>Nozels</option><option>Piping Bags</option></select>
                          
          </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield1">Quantity Of the use Present</label>
                            <input type="text" 
                            className="form-control"
                            pattern="[0-9]+"
                            name="qusedpresent"
                            placeholder="Enter present use item quantity" onChange={(e)=>{
                              setQusedpresent(e.target.value);
                              
                              }}/><span className="validity"></span>
                              <p className="warnmsg">*Quantity must be a number</p>
          </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield1">Unit Price</label>
                            <input type="text" 
                            className="form-control"
                            name="unitprice"
                            pattern="[0-9]+"
                            placeholder="Enter unit price of item" onChange={(e)=>{
                              setUnitprice(e.target.value);
                              
                              }}/><span className="validity"></span>
                              <p className="warnmsg">*Price must be a number</p>
          </div>
        
          
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield1">Total Cost</label>
                            <input type="text" 
                            className="form-control"
                            name="totcost"
                            pattern="[0-9]+"
                            placeholder="Enter total cost of inventory in the stock" onChange={(e)=>{
                              setTotcost(e.target.value);
                              
                              }}/><span className="validity"></span>
                              <p className="warnmsg">*Price must be a number</p>
          </div>
          
         
          <div className="form-group" style={{marginBottom:'15px'}} >
          <table>
            <tr><th>
            <button type="submit" className="btn btn-success" >Add Inventory</button></th>
            <th></th>
            <th>
            <a href="/" type="button" className="btn btn-secondary">All Inventories</a></th>
            <th></th>
            
     
            </tr></table></div>
        

  

      
              
     
      
      </form>
  </div>
  </div>
  </div>
  </div>
    );
}
