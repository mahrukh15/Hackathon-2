'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router=useRouter();
 return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 w-full h=[277px] justify-start items-start">
            A brand built on the love of craftsmanship, quality and outstanding customer service
          </h1>
          <button onClick={()=>router.push ('/Product.detail')} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
           View our products
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[#2A254B] opacity-100 w-full h-full"></div> {/* Dark overlay */}
            <div className="relative z-10 text-white"> {/* Content with higher z-index */}
              <h2 className="text-2xl font-bold mb-4">It started with a small idea</h2>
              <p className="text-lg">
                A global brand with local beginnings, our story began in a small studio in South London in early 2014.
              </p>
              <button className="mt-4 bg-white text-gray-800 hover:bg-gray-200 font-bold py-2 px-4 rounded">
                Discover more
              </button>
            </div>
          </div>

          <div className="md:w-1/2 relative ">
            <Image
              src="/image Block.png" // Replace with your image path
              alt="Interior Scene"
              width={800} // Adjust width as needed
              height={600} // Adjust height as needed
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;