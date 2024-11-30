"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import TruncateText from "../ui/truncate";
import { imageShowUrl } from "@/lib/BaseUrl";
import SubHeading from "../ui/sub-heading";
import Notice from "./notice";
const AboutIns = ({
  home_object,
  bgTheme,
}: {
  home_object: any;
  bgTheme: any;
}) => {
  return (
    <div className="grid md:grid-cols-3 grid-col-1 gap-4 mx-16 mt-8 h-[30rem]">
      {/* <div className="flex justify-center items-center"> */}
      {/* {home_object.typo === "YES" ? (
          <iframe
            src={`https://www.youtube.com/embed/${getId(
              home_object.link_images
            )}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            className={`w-full md:w-11/12 md:h-[20rem] h-[15rem]`}
          />
        ) : ( */}
      {home_object?.about_photo ? (
        <img
          src={`${imageShowUrl}/${home_object?.about_photo}`}
          alt="avatar"
          className="w-full md:h-[25rem] rounded-lg"
        />
      ) : null}

      <div className="h-[25rem]">
        <SubHeading className="font-extrabold text-[1.2rem] -mt-4 -mb-3">
          About Institute
        </SubHeading>
        <div className="text-gray-700 text-justify leading-5 pl-2 mt-4">
          <TruncateText text={home_object.about} />
          <Button className="mt-6 border-primary hover:border-primary hover:border-[2px] hover:text-primary">
            <Link href={"/institute"}>Read More</Link>
          </Button>
        </div>
      </div>
      <Notice bgTheme={bgTheme} />
    </div>
    // </div>
  );
};

export default AboutIns;
