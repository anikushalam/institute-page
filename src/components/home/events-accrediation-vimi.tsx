"use client";
import { useAllEvents } from "@/api/api-hooks";
import { useStore } from "@/store";
import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { ArrowUpRight, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { imageShowUrl } from "@/lib/BaseUrl";
import Content from "../ui/content";
import SubHeading from "../ui/sub-heading";
import { Button } from "../ui/button";

const EventAccrediationVisionMission = ({
  iso_certificate,
  vision,
  mission,
}: {
  iso_certificate: any;
  vision: any;
  mission: any;
}) => {
  const eid = useStore((state) => state.ids.eventId);
  const { data: allEvents } = useAllEvents(eid);

  return (
    <div className="grid grid-cols-2 mt-8 gap-4 mx-16 h-[30rem]">
      <div className="w-full bg-background shadow-md rounded-lg md:mt-0 mt-10">
        <SubHeading className="font-extrabold text-[1.5rem]">Events</SubHeading>
        <div className="p-0 bg-background h-[25rem] w-full overflow-hidden">
          <div className="scrollList">
            {allEvents?.all_events?.map((event: any) => (
              <Link
                key={event._id}
                href={`/events?eid=${event._id}`}
                className="w-full flex justify-between items-center border-l-4 border-prime px-3 py-4 my-2 bg-gray-200"
              >
                <div className="flex-grow pr-4">
                  <p className="font-normal">{event.event_name}</p>
                </div>
                <div className="flex-shrink-0 bg-primary p-1  rounded-md">
                  <Eye className="h-5 w-5 text-primary-foreground " />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* {iso_certificate && iso_certificate.length > 0 ? (
          <Card className="w-full max-w-md  bg-background shadow-md rounded-lg md:mt-0 mt-10">
            <SubHeading className="font-extrabold text-[1.5rem]">
              Accrediation and Affiliation
            </SubHeading>
            <CardContent className="p-0 bg-background">
              <div className="grid grid-cols-2 gap-4 justify-center items-center mb-2">
                {iso_certificate?.map((certificate: any) => (
                  <Card
                    key={certificate?._id}
                    className="relative overflow-hidden bg-background w-[145px]"
                  >
                    <CardContent className="p-0 relative">
                      <Image
                        src={`${imageShowUrl}/${certificate.image}`}
                        alt={`${certificate.name} logo`}
                        width={150}
                        height={150}
                        // className="w-1/2 h-auto object-contain"
                      />
                      <div className="absolute bottom-0 left-0 bg-primary text-primary-foreground p-2 w-full text-center">
                        <Link
                          className="font-semibold block"
                          href={certificate?.link}
                        >
                          {certificate.name}
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : null} */}
      <Card className="w-full bg-background shadow-md rounded-lg md:mt-0 mt-10">
        <SubHeading className="font-extrabold text-[1.5rem]">
          Our Vision
        </SubHeading>
        <Content className="mt-3">{vision ? vision : ""}</Content>
        <SubHeading className="font-extrabold text-[1.5rem] mt-4">
          Our Mission
        </SubHeading>
        <Content className="mt-3">{mission ? mission : ""}</Content>
        <CardFooter className="flex justify-start items-center mt-10">
          <Button className="mt-6 border-primary hover:border-primary hover:border-[2px] hover:text-primary">
            <Link href="/institute?type=vision-mission">Read More</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EventAccrediationVisionMission;
