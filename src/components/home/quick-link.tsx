import { imageShowUrl } from "@/lib/BaseUrl";
import SubHeading from "../ui/sub-heading";
import Link from "next/link";
const QuickLink = ({ quickLinks }: { quickLinks: any }) => {
  return (
    <div className="flex flex-col w-[25%] h-[25rem]">
      <SubHeading className="font-extrabold text-[1.2rem] -mt-1 mb-2">
        Quick Links
      </SubHeading>

      <div className="flex flex-col w-full">
        <Link
          href={
            quickLinks?.link_1?.typo === "NO"
              ? `${imageShowUrl}/${quickLinks?.link_1?.link_images}`
              : quickLinks?.link_1?.link_images
          }
          target="_blank"
          className=" border-l-4 border-prime px-3 py-3 my-1 bg-gray-200 hover:text-prime w-full md:w-11/12 block"
        >
          {quickLinks?.link_1?.name}
        </Link>

        <Link
          href={
            quickLinks?.link_2?.typo === "NO"
              ? `${imageShowUrl}/${quickLinks?.link_2?.link_images}`
              : quickLinks?.link_2?.link_images
          }
          target="_blank"
          className=" border-l-4 border-prime px-3 py-3 my-1 bg-gray-200 hover:text-prime w-full md:w-11/12 block"
        >
          {quickLinks?.link_2?.name}
        </Link>

        <Link
          href={
            quickLinks?.link_3?.typo === "NO"
              ? `${imageShowUrl}/${quickLinks?.link_3?.link_images}`
              : quickLinks?.link_3?.link_images
          }
          target="_blank"
          className=" border-l-4 border-prime px-3 py-3 my-1 bg-gray-200 hover:text-prime w-full md:w-11/12 block"
        >
          {quickLinks?.link_3?.name}
        </Link>
        <Link
          href={
            quickLinks?.link_4?.typo === "NO"
              ? `${imageShowUrl}/${quickLinks?.link_4?.link_images}`
              : quickLinks?.link_4?.link_images
          }
          target="_blank"
          className=" border-l-4 border-prime px-3 py-3 my-1 bg-gray-200 hover:text-prime w-full md:w-11/12 block"
        >
          {quickLinks?.link_4?.name}
        </Link>

        <Link
          href={
            quickLinks?.link_5?.typo === "NO"
              ? `${imageShowUrl}/${quickLinks?.link_5?.link_images}`
              : quickLinks?.link_5?.link_images
          }
          target="_blank"
          className=" border-l-4 border-prime px-3 py-3 my-1 bg-gray-200 hover:text-prime w-full md:w-11/12 block"
        >
          {quickLinks?.link_5?.name}
        </Link>

        <Link
          href={
            quickLinks?.link_6?.typo === "NO"
              ? `${imageShowUrl}/${quickLinks?.link_6?.link_images}`
              : quickLinks?.link_6?.link_images
          }
          target="_blank"
          className=" border-l-4 border-prime px-3 py-3 my-1 bg-gray-200 hover:text-prime w-full md:w-11/12 block"
        >
          {quickLinks?.link_6?.name}
        </Link>
      </div>
    </div>
  );
};

export default QuickLink;
