import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import ImageViewer from "@/components/ui/image-viewer";
import SubHeading from "@/components/ui/sub-heading";
import { imageShowUrl } from "@/lib/BaseUrl";
import Image from "next/image";
import React from "react";

const StudentAssociations = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <div>
      <Heading className="text-2xl">Student Associations</Heading>
      {data?.map((item: any) => (
        <div className="bg-background shadow-none" key={item._id}>
          <SubHeading className=" text-xl  font-semibold">
            {item?.title}
          </SubHeading>
          <div>
            <div className="flex md:inline md:float-right  m-4">
              <div className=" w-full flex flex-col items-center justify-center text-center p-2 float-left">
                <ImageViewer
                  src={`${imageShowUrl}/${item?.image}`}
                  alt="not found"
                  width={250}
                  height={250}
                />
              </div>
            </div>
            <div className="w-full">
              {item?.description && <Content>{item?.description}</Content>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentAssociations;
