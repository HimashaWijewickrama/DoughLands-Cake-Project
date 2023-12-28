import React from 'react'
import Pdf from "react-to-pdf";
import logo from "../assets/logo.PNG";
import DatePost from './DatePost';

import "./PDF.css";
import AllInventoryPrint from "./AllInventoryPrint";
const ref=React.createRef();
const PDF =()=>{


    return (
      
        <div className="container" align="left">
        <div className="Post" ref={ref}><></>
        <h4 className="h4 mb-4 font-weight-normal" align="left">Inventory Stock Availability Report</h4><h5 className="h5 mb-3 font-weight-normal"><DatePost/></h5>  
       
        <div className="officialLogo">
 <img className="logoOFF" align="left"/></div>
 
<div><AllInventoryPrint/></div>  
            
     </div>
        <Pdf targetRef={ref} filename="inventory stock availability document.pdf" >
            {({ toPdf }) => <button onClick={toPdf} class="btn btn-info" align="left">Download as PDF</button>}
        </Pdf>
    
        </div>   
    );

    }
export default PDF;

