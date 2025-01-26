// components/ProductList.js
'use client'
import next from "next";
import React from "react";
import { useRouter } from "next/navigation";
const  OurPopularProducts=()=> {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-8">Our popular products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Product 1 */}
        <div className="text-center ">
          <img
            src="/sofa.jpg"
            alt="The Poplar suede sofa"
            className="w-full h-auto rounded-md shadow-lg "
          />
          <h3 className="text-lg font-medium mt-4">The Poplar suede sofa</h3>
          <p className="text-gray-600">£980</p>
        </div>

        {/* Product 2 */}
        <div className="text-center">
          <img
            src="/pic.0.png"
            alt="The Dandy chair"
            className="w-full h-[200px] sm:h-[250px] md:h-[275px] object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-medium mt-4">The Dandy chair</h3>
          <p className="text-gray-600">£250</p>
        </div>

        {/* Product 3 */}
        <div className="text-center">
          <img
            src="/chair.jpg"
            alt="The Dandy chair"
            className=" w-full h-[200px] sm:h-[250px] md:h-[275px] object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-medium mt-4">The Dandy chair</h3>
          <p className="text-gray-600">£250</p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button onClick={()=>router.push ('/about')} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
          View collection
        </button>
      </div>
    </div>
  );
}
export default OurPopularProducts