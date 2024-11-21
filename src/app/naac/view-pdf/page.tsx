"use client";
import PDFViewer from "@/components/ui/PDFViewer";
import { useSearchParams } from "next/navigation";
import React from "react";

const ViewPDF = () => {
  const searchParams = useSearchParams();
  const key = searchParams.get("pdfKey");

  return (
    <div className="my-2">
      <PDFViewer file={key!} />
    </div>
  );
};

export default ViewPDF;
