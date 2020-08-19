import React , { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Purchase from './Purchase'
import { NavLink } from "react-router-dom";
const OrderDetails =(props)=>{
    console.log(props)
    const [price,setPrice]=useState(5);
    const InputEvent=(e)=>{
        console.log(e.target.value)
        if(e.target.value>=0)
        setPrice(e.target.value*40)
        else
        e.target.value=0

    }
  

    return(
        <>
         <div className="row">
         <div className="col-md-8 gy-5 mb-3">
          <img  className="img-fluid" target={props.ind} src={props.imgsrc}/>
        </div>
        <div className="col-md-4  ">
         <p className="mt-5">Zara men Shirt Men</p>
         <p>Quanity <input type="number"
          className="qty "
             onChange={InputEvent} 
             
          />
          </p>
         <p>Price $40 Per Piece$ {price}</p>
         <NavLink  className="nav-link" to= "about/"><button className="btn btn-primary">Buy now</button></NavLink>
        </div>
         
        </div>
         
       
      
         

        </>
    )
}
export default OrderDetails