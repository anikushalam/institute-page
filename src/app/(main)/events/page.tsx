"use client";
import React, { useState, useEffect } from "react";
import OneEvent from "./_ui/one-event";
import { useStore } from "@/store";
import { Menu } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useAllEvents } from "@/api/api-hooks";
import { Separator } from "@/components/ui/separator";
import HeadingWithImage from "@/components/ui/heading-with-image";

const Events = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const eventId = useStore((state) => state.ids.eventId);
  const searchParams = useSearchParams();
  const eid = searchParams.get("eid"); // Get 'eid' from URL params

  const { data: allEvents } = useAllEvents(eventId);
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  useEffect(() => {
    if (allEvents?.all_events) {
      if (eid) {
        // If 'eid' is provided in the URL, set the selected content to that event
        setSelectedContent(eid);
      } else {
        // If no 'eid', default to the first event
        setSelectedContent(allEvents.all_events[0]._id);
      }
    }
  }, [eid, allEvents?.all_events]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleContentSelect = (item: any) => {
    setSelectedContent(item);
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col border-t-1 border-back">
        {/* Mobile menu button */}
        <button
          className="md:hidden p-4 bg-background text-primary"
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </button>
        <HeadingWithImage>Events</HeadingWithImage>
        <div className="flex flex-col md:flex-row border-back">
          {/* Sidebar */}
          <div
            className={`${
              isSidebarOpen ? "block" : "hidden"
            } md:block w-full md:w-72 bg-gray-100 p-4 h-[30rem] overflow-y-auto`}
          >
            <ul>
              {allEvents?.all_events?.map((item: any, index: any) => (
                <li key={index} className="mb-2">
                  <button
                    className={`w-full text-left p-4 m-1 hover:text-primary hover:font-semibold border-b-2 hover:border-primary duration-300 ${
                      selectedContent === item._id
                        ? "border-primary font-semibold text-primary"
                        : "border-transparent"
                    }`}
                    onClick={() => handleContentSelect(item._id)}
                  >
                    {item?.event_name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <Separator
            orientation="vertical"
            className="mx-2 border-[1px] border-gray-100 h-screen"
          />

          {/* Main content */}
          <div className="flex-1 p-6">
            {selectedContent && <OneEvent evid={selectedContent} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
