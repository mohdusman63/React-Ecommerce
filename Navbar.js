import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { NavLink } from 'react-router-dom';


const Navbar=()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                  <nav className="navbar navbar-expand-lg navbar-light bg-red">
                  <NavLink className="navbar-brand" to="/">Amazed Buy</NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
              <NavLink  activeClassName="active_class" className="nav-link" to="/">Home</NavLink>
              </li>
      
            <li className="nav-item">
           <NavLink activeClassName="active_class"   className="nav-link" to="/contact">Contact</NavLink>
        
           </li>
        
           <li className="nav-item">
           <NavLink  activeClassName="active_class"  className="nav-link" to="/">Support</NavLink>
           </li>
           <li className="nav-item">
           <NavLink activeClassName="active_class"   className="nav-link" to="/login">Login</NavLink>
        
           </li>
           
          </ul>
        </div>
       </nav>
    </div>
    </div>
  </div>
</>

    )
}
export default Navbar