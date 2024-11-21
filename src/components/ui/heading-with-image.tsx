import React from "react";
import Image from "next/image";

function HeadingWithImage({
  children,
  imageUrl = "https://dpu.edu.in/img/news-letter/bg-testimonial.jpg",
}: {
  children: React.ReactNode;
  imageUrl?: string;
}) {
  return (
    <div className="relative">
      <Image
        src={imageUrl}
        alt="Image with text"
        layout="responsive"
        width={900}
        height={100}
        className="w-full h-auto object-cover aspect-[9/1] md:aspect-[9/2] lg:aspect-[9/1]"
      />
      <div className="absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4 text-white transition-opacity duration-300 ease-in-out">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold tracking-wider overflow-ellipsis whitespace-nowrap overflow-hidden">
          {children}
        </h1>
      </div>
    </div>
  );
}

export default HeadingWithImage;
