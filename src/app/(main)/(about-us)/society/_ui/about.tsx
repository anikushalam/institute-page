import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import React from "react";

const About = ({ name, content }: { name: string; content: string }) => {
  return (
    <div className="shadow-none bg-background">
      <Heading>About {name}</Heading>

      <Content>{content}</Content>
    </div>
  );
};

export default About;
