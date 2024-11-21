import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { imageShowUrl } from "@/lib/BaseUrl";
import { getId } from "@/lib/utils";
import SubHeading from "../ui/sub-heading";

// Define a type for image_links to ensure type safety
interface ImageLinksProps {
  image_links: {
    bg_1?: {
      typo: string;
      link_images: string;
      attach: string;
      name: string;
    };
    bg_2?: {
      typo: string;
      link_images: string;
      attach: string;
      name: string;
    };
  };
}

const ImageLinks: React.FC<ImageLinksProps> = ({ image_links }) => {
  // console.log(image_links);

  return (
    <div className="flex flex-col md:flex-row w-full px-8 gap-10 mt-8">
      {/* First Image or Video */}
      <div className="md:w-1/2 w-full shadow-md rounded-sm p-4">
        <SubHeading className="text-semibold text-xl mb-1">
          {image_links?.bg_1?.name}
        </SubHeading>
        {image_links?.bg_1?.typo === "YES" ? (
          <iframe
            src={`https://www.youtube.com/embed/${getId(
              image_links?.bg_1?.link_images
            )}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            className="w-full  md:h-[25rem] h-[15rem]"
          />
        ) : image_links?.bg_1?.attach ? (
          <Image
            src={`${imageShowUrl}/${image_links?.bg_1?.attach}`}
            alt="Background 1"
            width={800} // Add appropriate width and height to Image for optimization
            height={450}
            className="w-full md:w-11/12"
          />
        ) : (
          <p>No image available for bg_1</p>
        )}
      </div>

      {/* Second Image or Video */}
      <div className="md:w-1/2 w-full shadow-md rounded-sm p-4">
        <SubHeading className="text-semibold text-xl mb-1">
          {image_links?.bg_2?.name}
        </SubHeading>
        {image_links?.bg_2?.typo === "YES" ? (
          <iframe
            src={`https://www.youtube.com/embed/${getId(
              image_links?.bg_2?.link_images
            )}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            className="w-full  md:h-[25rem] h-[15rem]"
          />
        ) : image_links?.bg_2?.attach ? (
          <Image
            src={`${imageShowUrl}/${image_links?.bg_2?.attach}`}
            alt="Background 2"
            width={800} // Add appropriate width and height to Image for optimization
            height={450}
            className="w-full md:w-11/12"
          />
        ) : (
          <p>No image available for bg_2</p>
        )}
      </div>
    </div>
  );
};

export default ImageLinks;
