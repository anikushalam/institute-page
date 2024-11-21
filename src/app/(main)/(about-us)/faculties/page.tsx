"use client";
import { useAllInstituteStaff } from "@/api/api-hooks";
import { useStore } from "@/store";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import FacultyTable from "./_ui/faculty-table";
import { Separator } from "@/components/ui/separator";
import Heading from "@/components/ui/heading";
import HeadingWithImage from "@/components/ui/heading-with-image";

const Faculties = () => {
  const [selectedContent, setSelectedContent] = useState("Teaching Faculty");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const Sidebar = ["Teaching Faculty", "Non-Teaching Faculty", "Other"];
  const [teaching, setTeaching] = useState([]);
  const [nonteaching, setNonTeaching] = useState([]);
  const [other, setOther] = useState([]);
  const id = useStore((state) => state.id);
  const { data: faculties } = useAllInstituteStaff({
    id: id,
    page: 1,
    limit: 1000,
    date: "",
  });
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleContentSelect = (item: any) => {
    setSelectedContent(item);
    setIsSidebarOpen(false);
  };
  useEffect(() => {
    if (faculties?.staffIns.length > 0) {
      // setTeaching(
      //   faculties?.staffIns?.filter(
      //     (item: any) => item?.teaching_type === "Teaching Faculty"
      //   )
      // );
      // setNonTeaching(
      //   faculties?.staffIns?.filter(
      //     (item: any) => item?.teaching_type === "Non-Teaching Faculty"
      //   )
      // );
      // setOther(
      //   faculties?.staffIns?.filter(
      //     (item: any) => item?.teaching_type === "Other" || !item?.teaching_type
      //   )
      // );
      const ans = faculties.staffIns.reduce(
        (acc: any, curr: any) => {
          if (curr.teaching_type === "Teaching Faculty") {
            acc.teaching.push(curr);
          } else if (curr.teaching_type === "Non-Teaching Faculty") {
            acc.nonteaching.push(curr);
          } else {
            acc.other.push(curr);
          }
          return acc;
        },
        { teaching: [], nonteaching: [], other: [] }
      );
      setTeaching(ans.teaching);
      setNonTeaching(ans.nonteaching);
      setOther(ans.other);
    }
  }, [faculties?.staffIns]);
  return (
    <div className="flex flex-col ">
      {/* Mobile menu button */}
      <button
        className="md:hidden p-4 bg-background text-primary"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>
      <HeadingWithImage>Faculties</HeadingWithImage>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-72 bg-gray-100 p-4`}
        >
          <ul>
            {Sidebar.map((item, index) => (
              <li key={index} className="mb-2">
                <button
                  className={`w-full text-left p-4 m-1 hover:text-primary hover:font-semibold border-b-2  hover:border-primary duration-300 ${
                    selectedContent === item
                      ? "border-primary font-semibold text-primary border-b-2 "
                      : "border-transparent"
                  }`}
                  onClick={() => handleContentSelect(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <Separator
          orientation="vertical"
          className="mx-2 border-[1px] border-gray-100 h-screen hidden md:block"
        />
        {/* Main content */}
        <div className="w-full p-6">
          {selectedContent === "Teaching Faculty" ? (
            <div>
              <Heading className="mb-2">Teaching Faculty</Heading>
              <FacultyTable data={teaching} name="Teaching Faculty" table />
            </div>
          ) : selectedContent === "Non-Teaching Faculty" ? (
            <div>
              <Heading className="mb-2">Teaching Faculty</Heading>
              <FacultyTable
                data={nonteaching}
                name="Non-Teaching Faculty"
                table
              />
            </div>
          ) : (
            <div>
              <Heading className="mb-2">Teaching Faculty</Heading>
              <FacultyTable data={other} name="Other" table />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faculties;
