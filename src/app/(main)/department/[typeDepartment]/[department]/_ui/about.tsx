import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import ImageViewer from "@/components/ui/image-viewer";
import SubHeading from "@/components/ui/sub-heading";
import { imageShowUrl } from "@/lib/BaseUrl";
import Image from "next/image";
import React from "react";

const About = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col">
      <Heading className="text-2xl">About</Heading>
      {data?.map((item: any) => (
        <div className="bg-background shadow-none" key={item._id}>
          <SubHeading>{item?.sub_head_title}</SubHeading>

          <div>
            <div className="flex md:inline md:float-right  m-4">
              <div className=" w-full flex flex-col items-center justify-center text-center p-2 float-left">
                <ImageViewer
                  src={
                    item?.sub_heading_image
                      ? `${imageShowUrl}/${item?.sub_heading_image}`
                      : "/avtar.webp"
                  }
                  alt="founder image"
                  width={250}
                  height={250}
                />
              </div>
            </div>
            <div className="w-full">
              {item?.sub_head_body && <Content>{item?.sub_head_body}</Content>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
