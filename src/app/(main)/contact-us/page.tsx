"use client";
import { useWebsiteInfoByInstitute } from "@/api/api-hooks";
import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/sub-heading";
import { useStore } from "@/store";
import React from "react";

type Props = {};

const ContactUS = (props: Props) => {
  const id = useStore((state) => state.id);
  const { data: websiteInfoByInstitute } = useWebsiteInfoByInstitute(id);
  return (
    <div>
      <Heading>Contact Us</Heading>
      <div className="my-2">
        {websiteInfoByInstitute?.one_ins?.contact_list?.head_office_address && (
          <div>
            <SubHeading>Head Office Address</SubHeading>
            <Content>
              {
                websiteInfoByInstitute?.one_ins?.contact_list
                  ?.head_office_address
              }
            </Content>
          </div>
        )}

        <div className="my-2 grid grid-cols-1 md:grid-cols-3">
          {websiteInfoByInstitute?.one_ins?.contact_list?.person?.map(
            (item: any, index: any) => (
              <div key={index}>
                <SubHeading>{item?.department_name}</SubHeading>
                <p className="my-1">Name : {item?.person_name}</p>
                <p className="my-1">Mobile No : {item?.person_phone_number}</p>
                <p className="my-1">Email : {item?.person_email}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
