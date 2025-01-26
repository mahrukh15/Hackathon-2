import React from 'react'
import ProductDetails from './ProductDetails'
import Banner from './Banner'
import NavBar from './Navbar'
import RelatedProducts from './related Product'
import Icons from './icons'
import Subscription from './Subscription'
import SubscriptionSection from './Subscription'



const page = () => {
  return (
    <div>
        <ProductDetails/>
        <Banner/>
        <NavBar/>
        <RelatedProducts/>
        <Icons/>
        <SubscriptionSection/>
        
    </div>
  )
}

export default page