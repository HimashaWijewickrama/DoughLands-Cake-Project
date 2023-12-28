import React, { Component } from 'react';
import PDF from './PDF';
import './Post.css';
import './AllInventory.css'
class Post extends Component {
    state = {
        inid: '',
        qinstock: '',
        name: '',
        category: '',
        qusedpresent:'',
        unitprice:'',
        totcost:'',
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.inid||!this.state.qinstock || !this.state.name || !this.state.category || !this.state.qusedpresent||!this.state.unitprice||!this.state.totcost){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container">
                       
                            <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Inventory Item Stock Availability Form</h1> 
                                    <form className="needs-validation"  onSubmit="post">

                                    <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield1">Inventory Item ID</label>
                            <input type="text" 
                            className="form-control"
                            name="inid"
                    

                            placeholder="Enter inventory item id" onChange={this.onChange('inid')}
                              />
          </div>
                                       
                                    <div className="form-group" style={{marginBottom:'15px'}} align="left">  <div className="col-xs-4">
                                        <label style={{marginBottom:'5px'}} className="textfield1">Quantity In Stock Currently</label></div>
                  <input type="text" className="form-control" name="qinstock" placeholder="Enter quantity in stock currently"  onChange={this.onChange('qinstock')}/>
                  </div>

                            <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield1">Item Name</label>
                            <input type="text" 
                            className="form-control"
                            name="name"
                           
                            placeholder="Enter inventory item name" onChange={this.onChange('name')}
                              />
          </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield1">Item Category</label>
                            <input type="text" 
                            className="form-control"
                            name="category"
                            placeholder="Enter category" onChange={this.onChange('category')}
                              />
          </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield1">Quantity Of the use Present</label>
                            <input type="text" 
                          
                            className="form-control"
                            name="qusedpresent"
                            placeholder="Enter present use item quantity" onChange={this.onChange('qusedpresent')}
                              
                              />
          </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield1">Unit Price</label>
                            <input type="text" 
                            
                            className="form-control"
                            name="unitprice"
                            placeholder="Enter unit price of item" onChange={this.onChange('unitprice')}/>
          </div>
          <div className="form-group" style={{marginBottom:'15px'}} align="left">
                            <label style={{marginBottom:'5px'}} className="textfield1">Total Cost</label>
                            <input type="text" 
                            className="form-control"
                            name="totcost"
                          
                            placeholder="Enter total cost of inventory" onChange={this.onChange('totcost')}
                              />
          </div>
          <div className="form-group" style={{marginBottom:'15px'}} >
         
            <button type="submit" className="btn btn-success" onClick={this.sunmitPost}>Preview Created Report</button></div>
                                              
                                                  
                                         
                                        </form>
                                    </div>
                            
                     
                    </div>) : (
                        <PDF inid={this.state.inid} qinstock={this.state.qinstock} name={this.state.name} category={this.state.category} qusedpresent={this.state.qusedpresent} unitprice={this.state.unitprice} totcost={this.state.totcost} />
                        
                    )
                }
            </>
        );
    }
}

export default Post;