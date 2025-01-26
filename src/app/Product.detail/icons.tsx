import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { SiTicktick } from "react-icons/si";
import { BiWallet } from "react-icons/bi";
import { PiFlowerTulipThin } from "react-icons/pi";

const Icons = () => {
    return(
        <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center ">
                        What makes our brand different
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                          <div className="text-4xl text-black mb-2"><CiDeliveryTruck />
                          </div> {/* Replace with icon */}
                          <p className="text-gray-600 text-xl flex items-start-start text-start">Next day as standard</p>
                          <i className='text-gray-500 flex items-start justify-start text-start'>Order before 3pm and get your order the next day as standard</i>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl text-black mb-2"><SiTicktick />
                          </div> {/* Replace with icon */}
                          <p className="text-gray-600 text-xl flex items-start justify-start text-start">Made by true artisans</p>
                          <i className='text-gray-500 text-sm flex items-start justify-start text-start'> Handmade crafted goods made with real passion and craftmanship </i>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl text-black mb-2"><BiWallet />
                          </div> {/* Replace with icon */}
                          <p className="text-gray-600 flex items-start justify-start text-start text-xl">Unbeatable prices</p>
                          <i className="text-gray-500 flex items-start justify-start  text-start text-sm">For our materials and quality you won't find better prices anywhere</i>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl text-black  text-bold mb-2"><PiFlowerTulipThin />
                          </div> {/* Replace with icon */}
                          <p className="text-gray-60 flex items-start justify-start text-start text-xl">Recycled packaging</p>
                          <i className='text-gray-500 flex items-start justify-start text-start'>We use 100% recycled packaging to ensure our footprint is manageable</i>
                        </div>
                      </div>
             </div>
    )
}
export default Icons;