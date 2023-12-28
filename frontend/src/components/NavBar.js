import React from "react";
import {Link} from 'react-router-dom';

function NavBar(){
    return (
      <div>
      <header className="bg-light" style={{height:'100px', background_color:'#e3f2fd'}}>
      <nav class="navbar navbar-expand-lg navbar-light" id="header-nav" role="navigation">
            <div class="container"><a class="link-dark navbar-brand site-title mb-0" href="#"><b>DoughLands Cakes</b></a>
            
  
   
      <ul class="nav">
  <li class="nav-item">
    <a>
    <Link to="#" class="nav-link" aria-current="page" >Home</Link></a>
    
  </li>

 
  <li class="nav-item">
    <a>
    <Link to="/" className="nav-link">Inventory Details</Link></a>
  </li>
  <li class="nav-item">
    <a>
    <Link to="/all" className="nav-link">Material Details</Link></a>
  </li>
  <li class="nav-item dropdown">
    <a >
    <Link to="/allsup" className="nav-link">Supplier Details</Link></a>
  </li>
  <li class="nav-item dropdown">
    <a >
    <Link to="#" className="nav-link">Employee Details</Link></a>
  </li>
  <li class="nav-item dropdown">
    <a >
    <Link to="#" className="nav-link">Manage Users</Link></a>
  </li>
  <li class="nav-item dropdown">
    <a >
    <Link to="#" className="nav-link">Payments / Orders Manage</Link></a>
  </li>



 
  
</ul>
</div>


</nav>
</header>

</div>

    )
}

export default NavBar;