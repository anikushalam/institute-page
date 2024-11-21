import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { imageShowUrl } from "@/lib/BaseUrl";
import Heading from "@/components/ui/heading";
import Image from "next/image";
import Content from "@/components/ui/content";
import ImageViewer from "@/components/ui/image-viewer";

const FounderMessage = ({
  designation,
  message,
  image,
  name,
}: {
  designation: string;
  message: string;
  image: string;
  name: string;
}) => {
  // if (!data) return null;

  return (
    <div className="bg-background shadow-none ">
      <Heading>Founder Message</Heading>

      <div>
        <div className=" flex md:inline md:float-right  m-4">
          <div className="w-full flex flex-col items-center justify-center text-center p-2 float-left">
            <ImageViewer
              src={`${imageShowUrl}/${image}`}
              alt="founder image"
              width={250}
              height={250}
            />

            <h3 className="text-lg font-semibold mt-2 text-primary">{name}</h3>
            <p className="text-sm text-muted-foreground">{designation}</p>
          </div>
        </div>
        <div className=" w-full">{message && <Content>{message}</Content>}</div>
      </div>
    </div>
  );
};

export default FounderMessage;
