import React from "react";

const SubscriptionSection = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 text-center rounded-lg shadow-md max-w-4xl mx-auto w-full h-auto mb-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Join the club and get the benefits
      </h1>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-8">
        Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop-up stores, and more.
      </p>
      <button className="bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md text-sm sm:text-base lg:text-lg hover:bg-gray-800 transition duration-300">
        Sign up
      </button>
    </div>
  );
};

export default SubscriptionSection;
