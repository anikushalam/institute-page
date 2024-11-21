import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/sub-heading";
import React from "react";

const VisionMission = ({
  vision,
  mission,
}: {
  vision: string;
  mission: string;
}) => {
  return (
    <div className="flex flex-col ">
      <div className="my-2">
        <Heading className="text-2xl">Vision</Heading>
        <Content>{vision}</Content>
      </div>
      <div className="my-2">
        <Heading className="text-2xl">Mission</Heading>
        <Content>{mission}</Content>
      </div>
    </div>
  );
};

export default VisionMission;
