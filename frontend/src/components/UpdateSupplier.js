import React,{useState, useEffect} from "react";
import './AddSupplier.css';
import './AddMaterial.css';
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function UpdateSupplier(){
 let history = useHistory();
 const {id} = useParams();
 const [users,setUsers]= useState({

        
        applyby:"",
       
        compname:"", 
        supaddr:"",
        supdis:"",
        postalcode:"",
        country:"",
        telephone:"",
        fax:"",
        email:""

  });
  const{applyby,compname,supaddr,supdis,postalcode,country,telephone,fax,email} = users;
  const onInputChange = e =>{
    setUsers({...users, [e.target.name]:e.target.value});
  };

      
  useEffect(() =>{
    loadUser();
 }, []);

 const onSubmit = async e =>{
  e.preventDefault();

  await axios.put(`http://localhost:8050/supplier/updates/${id}`,users)
    history.push('/allsup');
    alert("Supplier was updated successfully!")

};

const loadUser = async () =>{

      const result = await axios.get(`http://localhost:8050/supplier/geted/${id}`);
      setUsers(result.data);
      
};

return (
  <div className="container">
    <div className="col d-flex justify-content-center">
      <div className="card4">
        <img className="card4-img-top"/>
        <div className="col-md-8 mt-4 mx-auto">
          <h3 className="h3 mb-3 font-weight-normal">Update Supplier</h3> 
          <form className="needs-validation"  onSubmit={e => onSubmit(e)}>
            <div className="form-group" style={{marginBottom:'15px'}} align="left">
              <label for="id" className="form-label" style={{marginBottom:'5px'}} className="textfield2">Supplier ID</label>
              <input type="text" className="form-control"  placeholder="Update supplier ID" name="id" value ={id} onChange={(e)=>onInputChange(e)} readOnly required />
            </div>
            <div className="form-group" style={{marginBottom:'15px'}} align="left">
              <label  for="applyby" className="form-label"  style={{marginBottom:'5px'}} className="textfield2">Applying for this by</label><br/>
              <input type="radio" id="supplier" name="rb" value={applyby} onChange={(e)=>onInputChange(e)} required/>a supplier
              <input type="radio" id="supplier" name="rb" value={applyby} onChange={(e)=>onInputChange(e)} required/>a behalf supplier<br/>
              </div>
            <div className="form-group" style={{marginBottom:'15px'}} align="left">
              <label style={{marginBottom:'5px'}} className="textfield2">Company Name</label><br/>
              <input type="text" className="form-control" pattern="([^\s][A-z0-9À-ž\s]+)" name="compname" placeholder="Enter company" value={compname} onChange={(e)=>onInputChange(e)} required/>
              <span className="validity"></span><p className="warnmsg">*Don't start with an empty space. Can use any meaningful name</p>
              </div>
            <div className="form-group" style={{marginBottom:'15px'}} align="left">
              <label style={{marginBottom:'5px'}} className="textfield2">Address</label>
              <input type="text" className="form-control" name="supaddr" value={supaddr} placeholder="Enter address" onChange={(e)=>onInputChange(e)} required/>
              <span className="validity"></span><p className="warnmsg">*Can use any meaningful address.</p>
              </div>
            <div className="form-group" style={{marginBottom:'15px'}} align="left">
              <label style={{marginBottom:'5px'}} className="textfield2">Distrinct</label>
              <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="supdis" value={supdis} onChange={(e)=>onInputChange(e)}>
                <option>Select your Distrinct here</option><option>Ampara</option><option>Anuradhapura</option><option>Badhulla</option><option>Batticaloa</option><option>Colombo</option><option>Galle</option><option>Gampaha</option><option>Hambanthota</option><option>Jaffna</option><option>Kalutara</option><option>Kandy</option><option>Kegalle</option>
                <option>Kilinochchi</option><option>Manner</option><option>Matale</option><option>Matara</option><option>Monaragala</option><option>Mulativu</option><option>Nuwara Eliya</option>
                <option>Polonnaruwa</option><option>Puttalam</option><option>Ratnapura</option><option>Trincomalee</option><option>Vavuniya</option></select>
              </div>
            <div className="form-group" style={{marginBottom:'15px'}} align="left">
              <label style={{marginBottom:'5px'}} className="textfield2">Postal Code</label>
              <input type="text" className="form-control" name="postalcode" pattern="[0-9]+" value={postalcode} placeholder="Enter postal code" onChange={(e)=>onInputChange(e)} required/>
              <span className="validity"></span><p className="warnmsg">*Use only numbers.</p>
              </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
              <label style={{marginBottom:'5px'}} className="textfield2">Country</label>
              <input type="text" className="form-control" name="country" pattern="([^\s][A-z0-9À-ž\s]+)" value={country} placeholder="Enter country" onChange={(e)=>onInputChange(e)} required/>
              <span className="validity"></span><p className="warnmsg">*Don't start with an empty space. Can use any meaningful name</p>
              </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
              <label style={{marginBottom:'5px'}} className="textfield2">Company Telephone Number</label>
              <input type="text" className="form-control" name="telephone" value={telephone} pattern="[0-9]{10}" placeholder="Enter telephone number" onChange={(e)=>onInputChange(e)} required/>
              <span className="validity"></span><p className="warnmsg">*Use 10 digit number. Not allow any characteristic or alphabetics</p>
              </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
              <label style={{marginBottom:'5px'}} className="textfield2">Fax</label>
              <input type="text" className="form-control" name="fax" value={fax} pattern="[0-9]{10}" placeholder="Enter fax number" onChange={(e)=>onInputChange(e)} required/>
              <span className="validity"></span><p className="warnmsg">*Use 10 digit number. Not allow any characteristic or alphabetics</p>
              </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
              <label style={{marginBottom:'5px'}} className="textfield2">Email Address</label>
              <input type="email" className="form-control" name="email" value={email} pattern="[a-zA-Z0-9*.%$&><-+]*@[a-z0-9].[a-z]{2-3}" placeholder="ABC@gmail.com" onChange={(e)=>onInputChange(e)}  required/>
          </div>

        

          <div className="form-group" style={{marginBottom:'15px'}} >
          <table>
            <tr>
              <th>
            <button type="submit" className="btn btn-success">Update and Save</button></th>
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
  
export default UpdateSupplier;