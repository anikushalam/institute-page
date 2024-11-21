"use client";
import { useIqacDetailsPDF } from "@/api/api-hooks";
import HeadingWithImage from "@/components/ui/heading-with-image";
import { Separator } from "@/components/ui/separator";
import { useStore } from "@/store";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PDFViewer from "@/components/ui/PDFViewer";
import IqacNaacContent from "../naac/iqac-naac-content";
import { useSearchParams } from "next/navigation";

const IqacPage = () => {
  const naacId = useStore((state) => state.qid);
  const { data: naacDetails } = useIqacDetailsPDF(naacId!);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<any>(null);
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab");
  useEffect(() => {
    if (naacDetails) {
      if (!currentTab && naacDetails) {
        setSelectedContent(naacDetails?.q_detail?.outer_tab_nested?.[0]);
      } else if (currentTab && naacDetails) {
        const tab = naacDetails.q_detail.outer_tab_nested.find(
          (item: any) => item.name === currentTab
        );
        if (tab) {
          setSelectedContent(tab);
        }
      }
    }
  }, [currentTab, naacDetails]);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleContentClick = (content: any) => {
    setSelectedContent(content);
  };
  return (
    <div className="flex flex-col border-t-1 border-back">
      {/* Mobile menu button */}
      <button
        className="md:hidden p-4 bg-background text-primary"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>
      <HeadingWithImage>IQAC</HeadingWithImage>
      <div className="flex flex-col md:flex-row border-t-1 border-back">
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-72 bg-gray-100 p-4`}
        >
          <ul>
            {naacDetails?.q_detail?.outer_tab_nested.map(
              (item: any, index: number) => (
                <li key={index} className="mb-2">
                  <div
                    className={`w-full text-left p-4 m-1 hover:text-primary  block hover:font-semibold border-b-2  hover:border-primary duration-300 ${
                      selectedContent?.name === item.name
                        ? "border-primary font-semibold text-primary border-b-2 "
                        : "border-transparent"
                    }`}
                    onClick={() => handleContentClick(item)}
                  >
                    {item.name}
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
        <Separator
          orientation="vertical"
          className="mx-2 border-[1px] border-gray-100 h-screen hidden md:block"
        />
        <div className="flex-1 p-6">
          {selectedContent && selectedContent.is_nested ? (
            <IqacNaacContent content={selectedContent} />
          ) : (
            <PDFViewer
              file={selectedContent?.pdf_key}
              //   setActive={setSelectedContent}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default IqacPage;
