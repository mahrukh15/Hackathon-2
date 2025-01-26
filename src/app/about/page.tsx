import Page from "@/app/about/page";
import HeroSection from "./heroSectioon";
import Hero from "./heroo";
import OurBrand from "./Our Brand";
import Signup from "./signup";
import Delivery from "./deliver";
import AviHeader from "./avihHeader";
import Aviupper from "./Aviupper";
import Header from "./avihHeader";




export default function Home (){
  return (
    <div>
      <Delivery/>
      <Header/>
      <Aviupper/>
      <HeroSection/>
      <Hero/>
      <OurBrand/>
      <Signup/>
      
    
      
    </div>
  )
}