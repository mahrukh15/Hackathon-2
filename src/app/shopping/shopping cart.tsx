"use client";
import Image from "next/image";
import { useState } from "react";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Graystone Vase",
      image: "/Product Image.png", // Replace with actual image path
      price: 685,
      quantity: 1,
    },
    {
      id: 2,
      name: "Basic White Vase",
      image: "/Product Image 1.png", // Replace with actual image path
      price: 675,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-2 sm:p-2 lg:p-8 xl:p-10 2xl:p-12 w-full">
      <h1 className="text-2xl sm:text-sm` md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center">
        Your Shopping Cart
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border border-gray-200">Product</th>
              <th className="p-2 border border-gray-200">Quantity</th>
              <th className="p-2 border border-gray-200">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-2 border border-gray-200 flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={100}
                    className="rounded"
                  />
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    {item.name}
                  </span>
                </td>
                <td className="p-2 border border-gray-200">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value) || 1)
                    }
                    className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 border border-gray-200 rounded px-2 text-center"
                  />
                </td>
                <td className="p-2 border border-gray-200">
                  £{(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex flex-col items-end space-y-4">
        <p className="font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl">
          Subtotal: £{calculateSubtotal().toFixed(2)}
        </p>
        <button className="bg-[#2A254B] text-white px-6 py-3 rounded hover:bg-[#1d193d] transition duration-300">
          Go to Checkout
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
