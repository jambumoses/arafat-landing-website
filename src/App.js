import React from 'react'
import Nav from './components/Nav'
import "./components/statics/css/main.css"
import $ from 'jquery'
/* import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 */

import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import About from "./components/About"
import Brands from "./components/Brands"
import Orders from "./components/Orders"
import Categories from "./components/Categories"
import Contact from "./components/Contact"
import Accounts from "./components/Accounts"
import Cart from "./components/Cart"
import Footer from './components/Footer';


export default function App() {

  return (
    <>
    <Router>
        <Nav/>
        <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/index" component={Home}/>

                <Route path="/about" component={About} />
                <Route path="/brands" component={Brands} />
                <Route path="/orders" component={Orders} />
                <Route path="/categories" component={Categories} />
                <Route path="/contact" component={Contact} />
                <Route path="/accounts" component={Accounts} />
                <Route path="/cart" component={Cart} />
        </Switch>
        <Footer/>
    </Router>
    </>
  )
}