import React from 'react';

const ItemcardMat=(props)=>{
    return (
        
<div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" style={{width:'300px'}}>
<div class="card-header">
    Featured
  </div>
            <div className="card p-0 overflow-hidden h-100 shadow">
  <img className="card-img-top img-fluid" src={props.img} />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h5 className="card-title">{props.price}</h5>
    <p className="card-text">{props.desc}</p>
    <p className="card-text">{props.more}</p>  </div>
   {/*
    <button className="btn btn-primary">{props.button}</button>*/}
    <div className="card-footer text-muted" align="right">
    2 days ago
  </div>

</div>
        </div>
        

    );
};
export default ItemcardMat;