"use client";
import { useAllMergedDepartments } from "@/api/api-hooks";
import { useStore } from "@/store";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import DepartmentComponent from "./department-component";
import SubHeading from "../ui/sub-heading";
import Autoplay from "embla-carousel-autoplay";
import { getId } from "@/lib/utils";
const HomeDepartment = ({ home_object }: { home_object: any }) => {
  const id = useStore((state) => state.id);
  const { data: allDepartments } = useAllMergedDepartments({
    id: id as string,
    page: 1,
    limit: 5,
    search: "",
  });

  return (
    <div className="grid grid-cols-3 gap-4 mx-16 bg-gray-50 h-[30rem] mt-8">
      <div className="h-full">
        <SubHeading className="font-extrabold text-[1.2rem] -mt-4 -mb-3 -ml-2 mb-4">
          {home_object?.link_name ?? ""}
        </SubHeading>
        {home_object?.typo === "YES" ? (
          <iframe
            src={`https://www.youtube.com/embed/${getId(
              home_object.link_images
            )}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            className={`w-full md:w-11/12 h-[25rem] mt-10`}
          />
        ) : null}
      </div>
      <div className="col-span-2 h-[25rem]">
        <SubHeading className="font-extrabold text-[1.2rem] -mt-4 -mb-3 -ml-2 mb-4">
          Our Departments
        </SubHeading>
        <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full">
          <CarouselContent className="w-full flex gap-4  mb-4">
            {allDepartments?.all_depart.map((item: any) => (
              <CarouselItem
                key={item?._id}
                className="pl-1 md:basis-1/2 lg:basis-1/2 h-[30rem]"
              >
                <DepartmentComponent
                  did={item?._id}
                  name={item?.dName}
                  shortDes={item?.short_desc ?? ""}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeDepartment;
