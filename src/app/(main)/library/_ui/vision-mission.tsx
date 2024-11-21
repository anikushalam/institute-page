import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import React from "react";

const VisionMission = () => {
  return (
    <div>
      <div className="mb-2">
        <Heading>Vision</Heading>
        <Content>This is vision</Content>
      </div>
      <div className="mb-2">
        <Heading>Mission</Heading>
        <Content>This is mission</Content>
      </div>
    </div>
  );
};

export default VisionMission;
