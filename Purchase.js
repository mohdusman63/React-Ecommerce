import React ,{useState}from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Web3 from '../src/image/usman.jpeg'
import { NavLink } from "react-router-dom";
import Sdata from './Sdata';
import Practice from './Practice';
import OrderDetails from './OrderDetails'

const Purchase=( )=>{
    const [price,setPrice]=useState(0);
   
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
    <div className="col-10 mb-3 mx-auto">
    
        
         {
            Sdata.map((val,ind)=>{
                return <OrderDetails 
                    key={ind}
                    section={val.section}
                     imgsrc={val.imgscr}
                     title= {val.title}

                />
          
             })
         }

         
    </div>
    </div>
    </div>
    </>

)
}
export default Purchase
