import Image from 'next/image';
const ProductDetails = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-start">
      {/* Product Image */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <Image
          src="/Image Left.png" // Replace with your image path
          alt="The Dandy Chair"
          width={600} // Adjust as needed
          height={600}
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Product Information */}
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold mb-2">The Dandy Chair</h2>
        <p className="text-xl mb-4">£250</p>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-1">Description</h3>
          <p className="text-gray-700">
            A timeless design, with premium materials features as one of our most
            popular and iconic pieces. The dandy chair is perfect for any stylish
            living space with beech legs and lambskin leather upholstery.
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-1">Dimensions</h3>
          <div className="flex space-x-4">
            <div>
              <p className="text-gray-700">Height</p>
              <p className="font-medium">110cm</p>
            </div>
            <div>
              <p className="text-gray-700">Width</p>
              <p className="font-medium">75cm</p>
            </div>
            <div>
              <p className="text-gray-700">Depth</p>
              <p className="font-medium">50cm</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <label htmlFor="amount" className="font-medium">Amount</label>
            <div className="flex items-center border border-gray-300 rounded">
                <button className="px-3 py-1">-</button>
                <input type="number" id='amount' className="w-12 text-center border-0 focus:ring-0" defaultValue={1}/>
                <button className="px-3 py-1">+</button>
            </div>
          <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-2 px-6 rounded">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails

















































