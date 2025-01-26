import Image from "next/image";

function MyComponent() {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      <div className="relative w-full max-w-7xl h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-gray-200">
        <Image
          src="/hero.png" // Replace with the actual path to your image
          alt="Hero banner showcasing the company's main message or theme"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="(max-width: 640px) 100vw, 
                 (max-width: 768px) 90vw, 
                 (max-width: 1024px) 80vw, 
                 (max-width: 1280px) 70vw, 
                 60vw"
        />
      </div>
    </div>
  );
}

export default MyComponent;
