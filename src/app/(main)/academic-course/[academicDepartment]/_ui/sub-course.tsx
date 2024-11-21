import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import ImageViewer from "@/components/ui/image-viewer";
import SubHeading from "@/components/ui/sub-heading";
import { imageShowUrl } from "@/lib/BaseUrl";
import Image from "next/image";
import React from "react";

const SubCourse = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col">
      <Heading className="text-primary mb-2">
        {data?.sub_head_title_main}
      </Heading>

      {data?.sub_topic?.map((item: any, index: number) => (
        <div className="bg-background shadow-none" key={index}>
          <SubHeading>{item?.sub_head_title}</SubHeading>
          <div>
            <div className="flex md:inline md:float-right  m-4">
              <div className=" w-full flex flex-col items-center justify-center text-center p-2 float-left">
                {item?.sub_heading_image && (
                  <ImageViewer
                    src={`${imageShowUrl}/${item?.sub_heading_image}`}
                    alt="founder image"
                    width={250}
                    height={250}
                  />
                )}
              </div>
            </div>
            <div className="w-full">
              <Content>{item?.sub_head_body}</Content>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubCourse;
