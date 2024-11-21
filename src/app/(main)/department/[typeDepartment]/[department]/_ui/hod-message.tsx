import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import ImageViewer from "@/components/ui/image-viewer";
import SubHeading from "@/components/ui/sub-heading";
import { imageShowUrl } from "@/lib/BaseUrl";
import Image from "next/image";
import React from "react";

const HodMessage = ({
  message,
  hodDetails,
}: {
  message: any;
  hodDetails: any;
}) => {
  return (
    <div className="bg-background shadow-none">
      <Heading className="mb-2">HOD Message</Heading>
      <div>
        <div className="flex md:inline md:float-right  m-4">
          <div className=" w-full flex flex-col items-center justify-center text-center p-2 float-left">
            <ImageViewer
              src={`${imageShowUrl}/${hodDetails?.dHead?.staffProfilePhoto}`}
              alt="founder image"
              width={250}
              height={250}
            />

            <h3 className="text-lg font-semibold mt-2 text-primary">{`${hodDetails?.dHead?.staffFirstName} ${hodDetails?.dHead?.staffMiddleName} ${hodDetails?.dHead?.staffLastName}`}</h3>
            <p className="text-sm text-muted-foreground">
              {hodDetails?.dTitle}
            </p>
          </div>
          <div className="w-full">
            {message && <Content>{message}</Content>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HodMessage;
