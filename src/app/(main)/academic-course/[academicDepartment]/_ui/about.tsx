import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import ImageViewer from "@/components/ui/image-viewer";
import { imageShowUrl } from "@/lib/BaseUrl";
import Image from "next/image";
import React from "react";

const About = ({
  about,
  image,
}: {
  about: string | undefined;
  image: string | undefined;
}) => {
  return (
    <div className="bg-background shadow-none">
      <Heading className="mb-2">About</Heading>
      <div>
        <div className="flex md:inline md:float-right  m-4">
          <div className="w-full flex flex-col items-center justify-center text-center p-2 float-left">
            {image && (
              <ImageViewer
                src={`${imageShowUrl}/${image}`}
                alt="founder image"
                width={250}
                height={250}
              />
            )}
          </div>
        </div>
        <div className="w-full">{about}</div>
      </div>
    </div>
  );
};

export default About;
