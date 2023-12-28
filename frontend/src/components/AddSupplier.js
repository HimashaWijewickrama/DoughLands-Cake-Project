import React,{useState} from "react";
import './AddSupplier.css';
import "../App.css";
import axios from "axios";
import './AddMaterial.css';
export default function AddSupplier(){
  
  const [applyby, setApplyby] =useState("");
  const [compname, setCompname] =useState("");
  const [supaddr, setSupaddr] =useState("");
  const [supdis, setSupdis] =useState("");
  const [postalcode, setPostalcode] =useState("");
  const [country, setCountry] =useState("");
  const [telephone, setTelephone] =useState("");
  const [fax, setFax] =useState("");
  const [email, setEmail] =useState("");

  function sendData(e){
    e.preventDefault();

  
  
  const newSupplier={
        applyby,
        compname, 
        supaddr,
        supdis,
        postalcode,
        country,
        telephone,
        fax,
        email

  }
  axios.post("http://localhost:8050/supplier/add", newSupplier).then(()=>{
    alert("Supplier was added successfully!")
  }).catch((err)=>{
    alert(err);
  })
 
}
 
  

    return (
      <div className="container">
      <div className="col d-flex justify-content-center">
<div className="card4">
<img className="card4-img-top"/>
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Adding New Supplier</h1> 
      <form className="needs-validation"  onSubmit={sendData}>
        <div className="form-group" style={{marginBottom:'15px'}} align="left"><div className="col-xs-4">
          <label style={{marginBottom:'5px'}} className="textfield2">Applying for this by</label></div>
          <input type="radio" id="supplier" name="rb" value="a supplier" onChange={(e)=>{
                              setApplyby(e.target.value);}}/>a supplier
          <input type="radio" id="supplier" name="rb" value="a behalf" onChange={(e)=>{
                              setApplyby(e.target.value);}}/>a behalf supplier<br/></div>
                            <div className="form-group" style={{marginBottom:'15px'}} align="left">
                  
<label style={{marginBottom:'5px'}} className="textfield2">Company Name</label><br/>
<input type="text" className="form-control" name="compname" pattern="([^\s][A-z0-9À-ž\s]+)" placeholder="Enter company" onChange={(e)=>{
setCompname(e.target.value);

}}/><span className="validity"></span>
<p className="warnmsg">*Don't start with an empty space. Can use any meaningful name</p>
          </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield2">Address</label>
                            <input type="text" 
                            className="form-control"
                            name="supaddr"
                         
                            placeholder="Enter address" onChange={(e)=>{
                              setSupaddr(e.target.value);
                              
                              }}/><span className="validity"></span>
                              <p className="warnmsg">*Can use any meaningful address.</p>
          </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield2">Distrinct</label>
                          
                            <select className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={(e)=>{
                              setSupdis(e.target.value);}}><option selected>Select your Distrinct here</option><option>Ampara</option><option>Anuradhapura</option><option>Badhulla</option><option>Batticaloa</option><option>Colombo</option><option>Galle</option><option>Gampaha</option><option>Hambanthota</option><option>Jaffna</option><option>Kalutara</option><option>Kandy</option><option>Kegalle</option>
                            <option>Kilinochchi</option><option>Manner</option><option>Matale</option><option>Matara</option><option>Monaragala</option><option>Mulativu</option><option>Nuwara Eliya</option>
                            <option>Polonnaruwa</option><option>Puttalam</option><option>Ratnapura</option><option>Trincomalee</option><option>Vavuniya</option></select>

          </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield2">Postal Code</label>
                            <input type="text" 
                            className="form-control"
                            name="postalcode"
                            pattern="[0-9]+"
                            placeholder="Enter postal code" onChange={(e)=>{
                              setPostalcode(e.target.value);
                              
                              }}/><span className="validity"></span>
                              <p className="warnmsg">*Use only numbers.</p>
          </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield2">Country</label>
                            <input type="text"
                            pattern="([^\s][A-z0-9À-ž\s]+)" 
                            className="form-control"
                            name="country"
                            placeholder="Enter country" onChange={(e)=>{
                              setCountry(e.target.value);
                              
                              }}/><span className="validity"></span>
                              <p className="warnmsg">*Don't start with an empty space. Can use any meaningful name</p>
          </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield2">Company Telephone Number</label>
                            <input type="text" 
                            className="form-control"
                            name="telephone"
                            pattern="[0-9]{10}"
                            placeholder="Enter telephone number" onChange={(e)=>{
                              setTelephone(e.target.value);
                              
                              }}/><span className="validity"></span>
                              <p className="warnmsg">*Use 10 digit number. Not allow any characteristic or alphabetics</p>
          </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield2">Fax<label style={{color:"blue"}}>* Not mandetory</label></label>
                            <input type="text" 
                            className="form-control"
                            name="fax"
                            pattern="[0-9]{10}"
                            placeholder="Enter fax number" onChange={(e)=>{
                              setFax(e.target.value);
                              
                              }}/><span className="validity"></span>
                              <p className="warnmsg">*Use 10 digit number. Not allow any characteristic or alphabetics</p>
          </div>
          
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}}  className="textfield2">Email Address</label>
                            <input type="email" 
                            className="form-control"
                            name="email"
                            pattern="[a-zA-Z0-9*.%$&><-+]*@[a-z0-9].[a-z]{2-3}"
                            placeholder="ABC@gmail.com" onChange={(e)=>{
                              setEmail(e.target.value);
                              
                              }}/>
          </div>
      
          <div className="form-group" style={{marginBottom:'15px'}} >
          <table>
            <tr><th>
            <button type="submit" className="btn btn-success">Add Supplier</button></th>
            <th></th>
            <th>
            <a href="/allsup" type="button" class="btn btn-secondary">All Suppliers</a></th>
            </tr></table></div>
    


        

  

      
              
     
      
      </form>
      </div>
      </div>
      </div>
  </div>
    );
}
