import React from 'react';

const RelatedProducts  = () => {
  const products = [
    {
      name: 'The Dandy Chair',
      price: 250,
      image: '/Product Card.png',
    },
    {
        name: 'Rustic Vase Set',
        price: 155,
        image: '/Product Card (1).png',
      },
      {
        name: 'The Silky Vase',
        price: 125,
        image: '/Product Card (2).png',
      },
      {
        name: 'The Lucy Lamp ',
        price: 399,
        image: '/Product Card (3).png',
      },
  ];

  return (
    <div className="container mx-auto w-full ">
      <h2 className="text-2xl font-bold mb-4">You might also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
        {products.map((product) => (
          <div
            key={product.name}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md"
          >
            <img src={product.image} alt={product.name} className="w-[305px] h-[375px] object-cover rounded-lg mb-4 border-box"  />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600">£{product.price}</p>
          </div>
        ))}
      </div>
    
      {/* Add more products here */}
    </div>
  );
};

export default RelatedProducts ;