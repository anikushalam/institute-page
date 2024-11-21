import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import ImageViewer from "@/components/ui/image-viewer";
import { imageShowUrl } from "@/lib/BaseUrl";
import React from "react";

const LibrarianMessage = ({
  message,
  image,
}: {
  message: string;
  image: string;
}) => {
  return (
    <div className="bg-background shadow-none ">
      <Heading>Librarian Message</Heading>

      <div>
        <div className=" flex md:inline md:float-right  m-4">
          <div className="w-full flex flex-col items-center justify-center text-center p-2 float-left">
            <ImageViewer
              src={`${imageShowUrl}/${image}`}
              alt="founder image"
              width={250}
              height={250}
            />

            {/* <h3 className="text-lg font-semibold mt-2 text-primary">{name}</h3>
            <p className="text-sm text-muted-foreground">{designation}</p> */}
          </div>
        </div>
        <div className=" w-full">{message && <Content>{message}</Content>}</div>
      </div>
    </div>
  );
};

export default LibrarianMessage;
