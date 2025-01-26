import Image from 'next/image';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-center ">
      <div className="md:w-1/3">
        <Image
          src="/image.1.png" // Replace with the actual path
          alt="Left Image"
          width={500} // Adjust width and height as needed
          height={300}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="md:w-1/3 p-4 bg-gray-100 left-1/3">
        <p className="text-lg font-semibold mb-4">Our service isn't just personal, it's actually hyper personally exquisite.</p>
        <p className="text-gray-600 mb-4">When we started Avion, the idea was simple: Make high-quality furniture affordable and available for the mass market.</p>
        <p className="text-gray-600 mb-4">Handmade and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get in Touch</button>
      </div>
    </div>
  );
}

export default Hero;