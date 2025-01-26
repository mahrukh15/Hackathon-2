import Image from "next/image";
import Upperheader from "./component/upperheader";
import Hero from "./component/hero";
import NewCeramics from "./component/New ceramics";
//import OurPopularProducts from "./component/OurPopularProducts";
// import SubscriptionSection from "./component/SubscriptionSection";
import HeroSection from "./component/HeroSection";
import Header from "./component/header";
import OurPopularProducts from "./component/OurPopularProducts";
import MyComponent from "./component/hero";
import SubscriptionSection from "./component/SubscriptionSection";



export default function Home() {
  return (
    <div>
      
      <Header/>
      <Upperheader/>
      <MyComponent/>
      <NewCeramics/>
      <OurPopularProducts/>
      <SubscriptionSection/>
      <HeroSection/>
    </div>
  );
}
