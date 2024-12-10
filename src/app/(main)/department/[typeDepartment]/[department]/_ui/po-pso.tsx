import PDFViewer from "@/components/ui/PDFViewer";
import { Card, CardContent } from "@/components/ui/card";
import Content from "@/components/ui/content";
import SubHeading from "@/components/ui/sub-heading";
import { FileIcon } from "lucide-react";
import React, { useState } from "react";

const PoPso = ({ data }: { data: any }) => {
  const [viewPdf, setViewPdf] = useState<any>();

  return (
    <div>
      <SubHeading className="text-2xl">
        Program Outcomes and Program Specific Outcomes
      </SubHeading>
      {viewPdf ? (
        <PDFViewer file={viewPdf} setActive={setViewPdf} />
      ) : (
        data?.map((item: any) => (
          <Card className="bg-background shadow-none" key={item._id}>
            <CardContent>
              <SubHeading className="text-primary">{item?.title}</SubHeading>

              {item?.attach ? (
                <p
                  className="pl-2 flex justify-start items-center gap-2 mb-2 cursor-pointer"
                  onClick={() => setViewPdf(item?.attach)}
                >
                  View Attachment
                  <FileIcon className="h-6 w-6 text-blue-500" />
                </p>
              ) : null}

              <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-4">
                <div className="w-full">
                  {item?.description && <Content>{item?.description}</Content>}
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default PoPso;
