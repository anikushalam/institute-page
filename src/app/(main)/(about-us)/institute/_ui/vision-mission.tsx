import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/sub-heading";
import React from "react";
import { Head } from "react-day-picker";

const VisionMission = ({
  vision,
  mission,
}: {
  vision: string;
  mission: string;
}) => {
  return (
    <div className="flex flex-col ">
      <Heading>Vision and Mission</Heading>
      <div className="my-2">
        <SubHeading className="font-extrabold text-[1.5rem]">Vision</SubHeading>
        <Content>{vision}</Content>
      </div>
      <div className="my-2">
        <SubHeading className="font-extrabold text-[1.5rem]">
          Mission
        </SubHeading>
        <Content>{mission}</Content>
      </div>
    </div>
  );
};

export default VisionMission;
