import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Purchase from './Purchase'
import { NavLink } from "react-router-dom";
const Card=(props)=>{
  
   
    
  
    return(
        <>
       <div className="col-3  gy-3 mb-3  mt-3  mx-auto">
         <div className="card " style={{width:'16rem'}} >
        <NavLink  className="nav-link" to= "/purchase"><img className="card-img-top" src={props.imgsrc}  
        alt="Card image cap"
        onClick={()=>{
          alert (props.imgsrc)
        }}
           
        /></NavLink>
        <div className="card-body">
        <p className="card-text">{props.title}Cloth is 20 </p>
       </div>
       </div>
      </div>
        
     
       
       </>

        
    )
}
export default Card;
