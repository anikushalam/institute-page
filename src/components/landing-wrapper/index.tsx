"use client";

import {
  useInstituteMaster,
  useIqacAuthority,
  useWebsiteInfoByInstitute,
} from "@/api/api-hooks";
import { State, useStore } from "@/store";
import React, { useEffect, useState } from "react";
import { TopMenu } from "./top-menu";
import MainMenu, { AuthorityItem, Committee } from "./main-menu";
import tinycolor from "tinycolor2";
import Footer from "./footer";
import InsInfo from "./ins-info";
import News from "./news";

const convertHsl = (hsl: string) => {
  const hslValues = hsl.slice(4, -1);
  return hslValues.trim();
};

const adjustColors = (baseColor: string) => {
  const root = document.documentElement;
  const isDark = tinycolor(baseColor).isDark();
  const luminance = tinycolor(baseColor).getLuminance();
  const colorMappings = {
    "--background": tinycolor("#fff").toHslString(),
    "--foreground": tinycolor("#333").toHslString(),
    "--card": tinycolor(baseColor).lighten(50).toHslString(),
    "--card-foreground": tinycolor(baseColor).darken(50).toHslString(),
    "--popover": tinycolor("#fff").toHslString(),
    "--popover-foreground": tinycolor(baseColor).darken(50).toHslString(),
    "--primary": tinycolor(baseColor).toHslString(),
    "--primary-foreground": isDark
      ? tinycolor("#fff").toHslString()
      : tinycolor("#333").toHslString(),
    "--secondary": tinycolor(baseColor).lighten(80).toHslString(),
    "--secondary-foreground": tinycolor(baseColor).darken(40).toHslString(),
    "--muted": tinycolor(baseColor).lighten(80).toHslString(),
    "--muted-foreground": tinycolor(baseColor).darken(20).toHslString(),
    "--accent":
      luminance < 0.1
        ? tinycolor(baseColor).lighten(70).toHslString()
        : tinycolor(baseColor).lighten(40).toHslString(),
    "--accent-foreground": isDark
      ? tinycolor("#333").toHslString()
      : tinycolor("#fff").toHslString(),
    "--destructive": tinycolor("red").lighten(10).toHslString(),
    "--destructive-foreground": tinycolor(baseColor).lighten(80).toHslString(),
    "--border": tinycolor(baseColor).lighten(70).toHslString(),
    "--input": tinycolor(baseColor).lighten(70).toHslString(),
    "--ring": tinycolor(baseColor).darken(50).toHslString(),
    "--chart-1": tinycolor(baseColor).spin(10).toHslString(),
    "--chart-2": tinycolor(baseColor).spin(-50).toHslString(),
    "--chart-3": tinycolor(baseColor).spin(-75).toHslString(),
    "--chart-4": tinycolor(baseColor).spin(80).toHslString(),
    "--chart-5": tinycolor(baseColor).spin(60).toHslString(),
  };

  for (const [key, value] of Object.entries(colorMappings)) {
    root.style.setProperty(key, convertHsl(value));
  }
};

const LandingWrapper = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type?: string;
}) => {
  const id = useStore((state: State) => state.id);
  const { data: instituteMaster, isFetched: isInstituteMasterFetched } =
    useInstituteMaster(id);
  const { data: websiteInfoByInstitute, isFetched: isWebsiteInfoFetched } =
    useWebsiteInfoByInstitute(id);
  // console.log(websiteInfoByInstitute);
  const { setIds, setColor } = useStore();

  useEffect(() => {
    if (instituteMaster && websiteInfoByInstitute) {
      setIds({
        admissionId: instituteMaster.institute.admissionDepart[0],
        financeId: instituteMaster.institute.financeDepart[0],
        hostelId: instituteMaster.institute.hostelDepart[0],
        aluminiId: instituteMaster.institute.aluminiDepart[0],
        examId: websiteInfoByInstitute.one_ins?.landing_control?._id,
        libraryId: instituteMaster.institute.library[0],
        eventId: instituteMaster.institute.eventManagerDepart[0],
        iqacId: instituteMaster.institute?.iqac_module?.[0],
      });
      setColor(
        websiteInfoByInstitute.one_ins.landing_control?.home_background_object
          ?.color_theme
      );
    }
  }, [instituteMaster, websiteInfoByInstitute, setIds, setColor]);
  const { setQid, setRndId, setNaacId } = useStore();
  const [uniqueCommittees, setUniqueCommittees] = useState<Committee[]>([]);
  const qid = useStore((state) => state.ids.iqacId);
  const { data: iqacAuthority } = useIqacAuthority(qid);
  useEffect(() => {
    if (iqacAuthority) {
      const newCommittees: Committee[] = [];
      iqacAuthority.iqac.authority.forEach((item: AuthorityItem) => {
        if (item.custom_head_name === "IQAC") {
          setQid(item.iqac_detail);
        } else if (item.custom_head_name === "RND") {
          setRndId(item.iqac_detail);
        } else if (item.custom_head_name === "NAAC") {
          setNaacId(item.iqac_detail);
        } else {
          newCommittees.push({
            id: item._id,
            name: item.custom_head_name,
            url: `/committe/${item._id}`,
          });
        }
      });
      const uniqueCommittees = newCommittees.filter(
        (committee, index, self) =>
          index === self.findIndex((c) => c.id === committee.id)
      );
      setUniqueCommittees(uniqueCommittees);
    }
  }, [iqacAuthority, setQid, setRndId]);

  useEffect(() => {
    if (websiteInfoByInstitute) {
      adjustColors(
        websiteInfoByInstitute.one_ins.landing_control?.home_background_object
          ?.color_theme
      );
    }
  }, [websiteInfoByInstitute]);

  if (!isInstituteMasterFetched || !isWebsiteInfoFetched) {
    return <div>Loading...</div>;
  }
  // console.log(websiteInfoByInstitute?.one_ins?.website_looks?.logo);
  return (
    <main className="flex flex-col min-h-screen">
      {type != "naac" ? (
        <TopMenu instituteAbout={websiteInfoByInstitute?.one_ins} />
      ) : null}
      <InsInfo
        logo={
          websiteInfoByInstitute?.one_ins?.landing_control?.home_header_object
            ?.ins_logo
            ? websiteInfoByInstitute?.one_ins?.landing_control
                ?.home_header_object?.ins_logo
            : websiteInfoByInstitute?.one_ins?.insProfilePhoto
        }
        name={
          websiteInfoByInstitute?.one_ins?.landing_control?.home_header_object
            ?.ins_name
        }
        address={
          websiteInfoByInstitute?.one_ins?.landing_control?.home_header_object
            ?.ins_address
        }
        affiliated={
          websiteInfoByInstitute?.one_ins?.landing_control?.home_header_object
            ?.affiliation_with
        }
        phone={
          websiteInfoByInstitute?.one_ins?.landing_control?.home_header_object
            ?.ins_phone_number
        }
        email={
          websiteInfoByInstitute?.one_ins?.landing_control?.home_header_object
            ?.ins_email
        }
        accreditations={
          websiteInfoByInstitute?.one_ins?.landing_control?.home_header_object
            ?.accreditations
        }
        bgTheme={
          websiteInfoByInstitute?.one_ins?.landing_control
            ?.home_background_object?.color_theme
        }
      />
      {type != "naac" ? (
        <MainMenu
          academicCourse={
            websiteInfoByInstitute?.one_ins?.landing_control
              ?.academic_courses_desk
          }
          uniqueCommittees={uniqueCommittees}
          instituteAbout={websiteInfoByInstitute?.one_ins}
        />
      ) : null}
      {type != "naac" ? <News /> : null}
      <div className="flex-grow">{children}</div>
      <Footer instituteAbout={websiteInfoByInstitute?.one_ins} />
      {/* <Megaphone /> */}
    </main>
  );
};

export default LandingWrapper;
