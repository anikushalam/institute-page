import { Card, CardContent } from "@/components/ui/card";
import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/sub-heading";
import React from "react";

const PoPso = ({ data }: { data: any }) => {
  return (
    <div>
      <SubHeading className="text-2xl">
        Program Outcomes and Program Specific Outcomes
      </SubHeading>
      {data?.map((item: any) => (
        <Card className="bg-background shadow-none" key={item._id}>
          <CardContent>
            <SubHeading className="text-primary">{item?.title}</SubHeading>
            <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-4">
              <div className="w-full">
                {item?.description && <Content>{item?.description}</Content>}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PoPso;
