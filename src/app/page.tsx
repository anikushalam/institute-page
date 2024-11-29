"use client";
import { useWebsiteInfoByInstitute } from "@/api/api-hooks";
import { useStore } from "@/store";
import React from "react";
import CarouselComponent from "@/components/home/carousel-component";
import AboutIns from "@/components/home/about-ins";
import HomeDepartment from "@/components/home/home-department";
import EventAccrediationVisionMission from "@/components/home/events-accrediation-vimi";
import Testimonials from "@/components/home/alumini";
import ImageLinks from "@/components/home/image-links";
import LandingWrapper from "@/components/landing-wrapper";
import QuickLink from "@/components/home/quick-link";

const Home = () => {
  // redirect("/home");
  const id = useStore((state) => state.id);
  const { data: websiteInfoByInstitute } = useWebsiteInfoByInstitute(id);
  return (
    <LandingWrapper>
      <>
        <div className="w-full flex flex-col gap-4">
          {websiteInfoByInstitute?.one_ins?.landing_control?.screen_toggle
            ?.bg_image ? (
            <div className="flex gap-4 h-[25rem]">
              {websiteInfoByInstitute?.one_ins?.landing_control
                ?.home_background_object?.images.length > 0 && (
                <CarouselComponent
                  images={
                    websiteInfoByInstitute?.one_ins?.landing_control
                      ?.home_background_object?.images
                  }
                />
              )}
              {/* {websiteInfoByInstitute?.one_ins?.landing_control
              ?.home_opener_quick_links && ( */}
              <QuickLink
                // quickLinks={
                //   websiteInfoByInstitute?.one_ins?.landing_control
                //     ?.home_opener_quick_links
                // }
                quickLinks={{
                  link_1: {
                    name: "Quick Link 1 Name",
                    typo: "YES",
                    link_images: "",
                  },
                  link_2: {
                    name: "Quick Link 2 Name",
                    typo: "YES",
                    link_images: "https://www.youtube.com/watch?v=1BVcuhftIgc",
                  },
                  link_3: {
                    name: "Quick Link 3 Name",
                    typo: "YES",
                    link_images: "https://www.youtube.com/watch?v=1BVcuhftIgc",
                  },
                  link_4: {
                    name: "Quick Link 4 Name",
                    typo: "YES",
                    link_images: "https://www.youtube.com/watch?v=1BVcuhftIgc",
                  },
                  link_5: {
                    name: "Quick Link 5 Name",
                    typo: "YES",
                    link_images: "https://github.com/dashboard",
                  },
                  link_6: {
                    name: "My Six Edited",
                    typo: "NO",
                    link_images: "20200828_033.jpg",
                  },
                }}
              />
              {/* )} */}
            </div>
          ) : null}

          {websiteInfoByInstitute?.one_ins?.landing_control?.screen_toggle
            ?.about_institute &&
            websiteInfoByInstitute?.one_ins?.landing_control
              ?.home_about_institute_object && (
              <AboutIns
                home_object={
                  websiteInfoByInstitute?.one_ins?.landing_control
                    ?.home_about_institute_object
                }
                bgTheme={
                  websiteInfoByInstitute?.one_ins?.landing_control
                    ?.home_background_object?.color_theme
                }
              />
            )}
          {websiteInfoByInstitute?.one_ins?.landing_control?.screen_toggle
            ?.our_department ? (
            <HomeDepartment
              home_object={
                websiteInfoByInstitute?.one_ins?.landing_control
                  ?.home_about_institute_object
              }
            />
          ) : null}
          {websiteInfoByInstitute?.one_ins?.landing_control?.screen_toggle
            ?.bg1_bg2 ? (
            <ImageLinks
              image_links={
                websiteInfoByInstitute?.one_ins?.landing_control
                  ?.home_opener_background_object
              }
            />
          ) : null}
          {websiteInfoByInstitute?.one_ins?.landing_control?.screen_toggle
            ?.vission_mission ? (
            <EventAccrediationVisionMission
              iso_certificate={websiteInfoByInstitute?.one_ins?.iso_certificate.slice(
                0,
                4
              )}
              vision={
                websiteInfoByInstitute?.one_ins?.landing_control
                  ?.about_us_institute_object?.vision
              }
              mission={
                websiteInfoByInstitute?.one_ins?.landing_control
                  ?.about_us_institute_object?.mission
              }
            />
          ) : null}

          {/* <AchievementsSection /> */}
          {websiteInfoByInstitute?.one_ins?.landing_control?.screen_toggle
            ?.testimonials &&
          websiteInfoByInstitute?.one_ins?.testimonials.length > 0 ? (
            <Testimonials
              testiList={websiteInfoByInstitute?.one_ins?.testimonials}
            />
          ) : null}
        </div>
      </>
    </LandingWrapper>
  );
};

export default Home;
