import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="bg-white text-black py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">From a studio in London to a global brand with over 400 outlets</h1>
            <p className="text-lg">
              When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </p>
            <Link href="/contact" className="mt-6 inline-block bg-white text-blue-900 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white">Get in Touch</Link>
          </div>
          <div className="md:w-1/3">
            {/* Image placeholder - Replace with actual image */}
            <img src="/image..png" alt="Sofa" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;