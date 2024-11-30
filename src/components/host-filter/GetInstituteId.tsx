"use client";
import { useHostInstitute, useWebsiteInfoByInstitute } from "@/api/api-hooks";
import { useStore } from "@/store";
import { useState, useEffect } from "react";

const getHostName = () => {
  if (typeof window !== "undefined") {
    return window.location.hostname;
    // return "navjeevanpharmacycollege";
  }
  return "";
};

const useGetInstituteId = () => {
  const [filterQuery, setFilterQuery] = useState("");
  const [currentId, setCurrentId] = useState("");
  const { setId, setName, setInsName, setStatus } = useStore();
  const { data: hostResolver } = useHostInstitute(filterQuery);
  const { data: websiteInfoByInstitute } = useWebsiteInfoByInstitute(currentId);

  useEffect(() => {
    if (getHost()?.host) {
      setFilterQuery(getHost()?.host);
    } else {
    }
  }, []);

  useEffect(() => {
    if (hostResolver?.all_domain) {
      setId(hostResolver?.all_domain?.link_up._id);
      setName(hostResolver?.all_domain?.link_up.name);
      setInsName(hostResolver?.all_domain?.link_up.insName);
      setStatus(hostResolver?.all_domain?.status);
      setCurrentId(hostResolver?.all_domain?.link_up._id);
    }
  }, [hostResolver?.all_domain]);

  useEffect(() => {
    if (websiteInfoByInstitute?.one_ins?.landing_control?.home_header_object) {
      if (document?.title) {
        document.title =
          websiteInfoByInstitute?.one_ins?.landing_control?.home_header_object?.ins_name;
      }

      let link: any = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.getElementsByTagName("head")[0].appendChild(link);
      }
      link.href = `https://d3dqpu54js2vfl.cloudfront.net/${websiteInfoByInstitute?.one_ins?.landing_control?.home_header_object?.ins_logo}`;
    }
  }, [websiteInfoByInstitute?.one_ins?._id]);
  const getHost = () => {
    return {
      host: getHostName(),
    };
  };
  return {
    getHost,
  };
};

export { useGetInstituteId };
