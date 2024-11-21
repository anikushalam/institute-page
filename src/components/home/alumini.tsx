import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import style from "./alumini.module.css";
import { imageShowUrl } from "@/lib/BaseUrl";
import Link from "next/link";
import Image from "next/image";
import SubHeading from "../ui/sub-heading";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";

const TestimonialCard = ({ name, image, bio, link }: any) => (
  <Link
    href={link ? "http://" + link : "/"}
    className={`bg-[#eee] rounded-lg shadow-lg pt-[50px] px-[50px] pb-[40px] flex flex-col items-center text-center transform skew-y-5  ${style.skewedContainer}`}
  >
    <div
      className={` w-full flex flex-col items-start justify-start ${style.skewedBody}`}
    >
      <div className="mb-8 text-gray-600 flex items-center justify-start">
        <Image
          src={image ? `${imageShowUrl}/${image}` : "/avtar.webp"}
          width={110}
          height={110}
          alt="no found"
          className="w-[110px] h-[110px] rounded-[50%]"
        />
      </div>
      <div className="flex flex-col items-start">
        <p className="text-gray-800 mb-4 text-start">{bio}</p>
        <h3 className="font-bold text-lg text-start">{name}</h3>
        <Button className="mt-4 border-primary hover:border-primary hover:border-[2px] hover:text-primary">
          <Link href={"/institute"}>Follow</Link>
        </Button>
      </div>
    </div>
  </Link>
);

const Testimonials = ({ testiList }: { testiList: any }) => {
  return (
    <div className="grid gap-4 mx-16 bg-gray-50  mt-8">
      <SubHeading className="flex justify-center font-extrabold text-[1.2rem] -mb-3 -ml-2 mb-4">
        Testimonials
      </SubHeading>
      <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full">
        <CarouselContent className="flex gap-3 mx-10">
          {testiList?.map((testimonial: any) => (
            <CarouselItem
              key={testimonial?._id}
              className="pl-1 md:basis-1/2 lg:basis-1/3 w-[30%]"
            >
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default Testimonials;
