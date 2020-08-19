import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Web1 from '../src/image/slider1.jpg'
import Web2 from '../src/image/slider2.jpg'
import Web3 from '../src/image/usman.jpeg'
import { NavLink } from 'react-router-dom';
const Buy=()=>{
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
         <div className="container-fluid">
         <div className="row">
         <div className="col-10 mx-auto">
         <div className="row">
         <div className="col-6 mx-auto ">
         <div className="row">
         <div className="col-5 ">
         <img src={Web3}/>
        </div>
        <div className="col-7  ">
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
        
         </div>
         <div className="col-6">
             <h1>hhhhh</h1>
         </div>
         
         </div>
         
         </div>
         </div>
         </div>
        
        </>
    )
}
export default Buy