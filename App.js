import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Services from './Services'

// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar'
import Purchase from './Purchase';
import Login from './Login';
import Contact from './Contact';

const App=()=>{
  return(
    <>
    <Navbar/> 

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/purchase" component={Purchase}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/contact" component={Contact}/>
          

          <Redirect to ="/"  />
          
          </Switch>
    </>
  )
}
export default App