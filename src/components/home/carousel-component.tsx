import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { imageShowUrl } from "@/lib/BaseUrl";
const CarouselComponent = (images: any) => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 4000 })]}
      className="w-[75%] h-[22rem] p-1 group"
    >
      <CarouselContent className="w-full">
        {images.images.map((image: string, index: number) => (
          <CarouselItem key={index}>
            <div className="h-[22rem]">
              <img
                src={`${imageShowUrl}/${image}`}
                alt="images"
                className="w-full bg-cover h-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="text-black bg-white left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CarouselNext className="text-black bg-white right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Carousel>
  );
};

export default CarouselComponent;
