import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Web1 from '../src/image/resize-1596814985170115374ecommerce35621911920.jpg'
import Web2 from '../src/image/resize-1596815104142395935ecommerce214060412801.jpg'
import Web3 from '../src/image/resize-1596815155858806537label20162481280.png'


const Carousel=()=>{
    return(
      <>
       <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
              
                <section>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
               <ol className="carousel-indicators">
               <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
               <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
               <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
               <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
               </ol>
               <div className="carousel-inner">
               <div className="carousel-item active">
               <img className="d-block w-100" src={Web1} alt="First slide"/>
               </div>
               <div className="carousel-item">
               <img className="d-block w-100 " src={Web2} alt="Second slide"/>
               </div>
               <div className="carousel-item">
               <img className="d-block w-100" src={Web3} alt="Third slide"/>
               </div>
   
              <div className="carousel-item">
              <img className="d-block w-100"  src={Web1} alt="..."/>
              <div className="carousel-caption d-none d-md-block">
              <h5>Get 50 % offer </h5>
             <p><strong>coming soon Apply coupon <span style={{color:'red'}}>USMAN 123</span></strong></p>
            </div>
          </div>
         </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
           </a>
          </div>
                 
          </section>
                </div>
            </div>
        </div>
    
      </>

    )
}
export default Carousel;