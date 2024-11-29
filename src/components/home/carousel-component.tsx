import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { imageShowUrl } from "@/lib/BaseUrl";
const CarouselComponent = (images: any) => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 4000 })]}
      className="w-[75%] h-[25rem]"
    >
      <CarouselContent className="w-full">
        {images.images.map((image: string, index: number) => (
          <CarouselItem key={index}>
            <div className="h-[25rem]">
              <img
                src={`${imageShowUrl}/${image}`}
                alt="images"
                className="w-full bg-cover h-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselComponent;
