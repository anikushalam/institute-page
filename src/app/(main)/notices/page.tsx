"use client";
import { useLibrarySiteInfo, useNoticeInstitute } from "@/api/api-hooks";
import { useStore } from "@/store";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import OneNotices from "./_ui/one-notice";
import { useSearchParams } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import HeadingWithImage from "@/components/ui/heading-with-image";

const Notices = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const id = useStore((state) => state.id);
  const { data: notices } = useNoticeInstitute({
    id: id,
    page: 1,
    limit: 1000,
  });
  const searchParams = useSearchParams();
  const nid = searchParams.get("nid"); // Get 'nid' from URL params
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  useEffect(() => {
    if (notices?.announcement) {
      if (nid) {
        // If 'nid' is provided in the URL, set the selected content to that notice
        setSelectedContent(nid);
      } else {
        // If no 'nid', default to the first notice
        setSelectedContent(notices.announcement[0]._id);
      }
    }
  }, [nid, notices?.announcement]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleContentSelect = (item: any) => {
    setSelectedContent(item);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col ">
      {/* Mobile menu button */}
      <button
        className="md:hidden p-4 bg-background text-primary"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>
      <HeadingWithImage>Notices</HeadingWithImage>
      <div className="flex flex-col md:flex-row">
        <Separator
          orientation="vertical"
          className="mx-2 border-[1px] border-gray-100 h-screen hidden md:block"
        />
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-72 bg-gray-100 p-4 h-screen overflow-y-auto`}
        >
          <ul>
            {notices?.announcement?.map((item: any, index: any) => (
              <li key={index} className="mb-2">
                <button
                  className={`w-full text-left p-4 m-1 hover:text-primary hover:font-semibold border-b-2 hover:border-primary duration-300 ${
                    selectedContent === item._id
                      ? "border-primary font-semibold text-primary"
                      : "border-transparent"
                  }`}
                  onClick={() => handleContentSelect(item._id)}
                >
                  {item.insAnnTitle}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          {selectedContent && <OneNotices id={selectedContent} />}
        </div>
      </div>
    </div>
  );
};

export default Notices;
