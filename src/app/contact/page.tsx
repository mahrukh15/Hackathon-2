import React from "react";

import ShoppingPictures from "./productsFilter";
import Shop from "./shop";
import Cart from "./cart";
import HeaderContact from "./headerContact";
import UpperContact from "./upperCpontact";

import Header from "../component/header";
import About from "./About";
import FilterBar from "./filterbar";



export default function home (){
    return(
        <div>
          <Header/>   
          <UpperContact/> 
          <About/>
          <FilterBar/>
          <ShoppingPictures/>
           <Shop/>
           <Cart/>
        </div>
        
    )
}