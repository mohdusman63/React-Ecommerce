import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Web1 from '../src/image/slider1.jpg'
import Web2 from '../src/image/slider2.jpg'
import Web3 from '../src/image/usman.jpeg'
import { NavLink } from 'react-router-dom';
const Cart=()=>{
 

    return(
        <>
         <div className="container-fluid">
      
         <div className="row">
         <div className="col-10  col-md-10 col-sm-10 mx-auto">
         <h1 className="text-center">Clothes section</h1>
         <div className="row">
         <div className="col-6  col-md-6   col-sm-6 mx-auto ">
         <div className="row">
         <div className="col-6  col-md-6   col-sm-6 ">
         <img className="img-fluid" src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T691A228MPA3867PT17X11Y18D13470262FS4007/views/1,width=378,height=378,appearanceId=228,backgroundColor=F2F2F2,version=1594394115/ecommerce-manager-unisex-tri-blend-t-shirt.jpg"/>
        </div>
        <div className="col-6 col-md-6   col-sm-6 mx-auto  ">
        <img className="img-fluid" src= "https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A2MPA3140PT17X82Y47D1017811108FS2187/views/1,width=378,height=378,appearanceId=2,backgroundColor=F2F2F2,modelId=115,crop=list,version=1581947588,modelImageVersion=1583425928/life-equation-mens-premium-t-shirt.jpg"/>

        </div>
         </div>
        
         </div>
         <div className="col-6 col-md-6   col-sm-6  mx-auto">
         <div className="row">
         <div className="col-6  col-md-6   col-sm-6 ">
         <img className="img-fluid" src=
         "https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/T812A328MPA3140PT17X20Y30D1008246088FS3638/views/1,width=378,height=378,appearanceId=328,backgroundColor=70879B,noPt=true,version=1581947588/t-rex-loves-you-this-much-mens-premium-t-shirt.jpg"/>
        </div>
        <div className="col-6 col-md-6   col-sm-6  ">
        <img className="img-fluid" src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T691A228MPA3867PT17X11Y18D13470262FS4007/views/1,width=378,height=378,appearanceId=228,backgroundColor=F2F2F2,version=1594394115/ecommerce-manager-unisex-tri-blend-t-shirt.jpg"/>

        </div>
         </div>
          
            
             

             </div>
         </div>
         
         </div>
         
         </div>
         </div>
        
        
        </>
    )
}
export default Cart