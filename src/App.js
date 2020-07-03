import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import Details from './components/Details'
import Modal from './components/Modal'
import Login from './components/login/Login'
import SignUpAdult from './components/signup/SignupAsAdult'
import SignUp from './components/signup/SignUp'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/cart" component={Cart}/>
        <Route path="/login" component={Login}/>
        <Route path="/details" component={Details}/>
        <Route path="/signup/adult" component={SignUpAdult}/>
        <Route path="/signup" component={SignUp}/>
        <Route component={Default}/>
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
