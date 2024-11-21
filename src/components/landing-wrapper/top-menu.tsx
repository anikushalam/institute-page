"use client";
import { useState, useEffect } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import Link from "next/link";
import { useStore } from "@/store";
import { useIqacAuthority } from "@/api/api-hooks";
import { Button } from "../ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
export function TopMenu({ instituteAbout }: { instituteAbout: any }) {
  const qid = useStore((state) => state.ids.iqacId);
  const { data: iqacAuthority } = useIqacAuthority(qid);
  const { setQid, setRndId } = useStore();
  const [uniqueCommittees, setUniqueCommittees] = useState<any>([]);

  useEffect(() => {
    if (iqacAuthority) {
      const newCommittees: { id: string; name: string; url: string }[] = [];
      iqacAuthority.iqac.authority.forEach((item: any) => {
        if (item.custom_head_name === "IQAC") {
          setQid(item._id);
        } else if (item.custom_head_name === "RND") {
          setRndId(item._id);
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

  return (
    <Menubar className="md:flex justify-between items-center bg-primary text-primary-foreground border-none hidden h-[2.8rem]">
      <div className="ml-4 md:flex justify-end bg-primary text-primary-foreground border-none hidden">
        <div className="text-left">
          <div className="flex space-x-6">
            {/* <Button
              variant="outline"
              size="icon"
              asChild
              className="bg-card text-card-foreground h-8 w-8"
            > */}
            <Link
              href={
                instituteAbout?.landing_control?.footer_links?.facebook_link ??
                "https://www.facebook.com/"
              }
            >
              <Facebook className="h-5 w-5" />
            </Link>
            {/* </Button> */}
            {/* <Button
              variant="outline"
              className="bg-card text-card-foreground h-8 w-8"
              size="icon"
              asChild
            > */}
            <Link
              href={
                instituteAbout?.landing_control?.footer_links?.twitter_link ??
                "https://twitter.com/"
              }
            >
              <Twitter className="h-5 w-5" />
            </Link>
            {/* </Button> */}
            {/* <Button
              variant="outline"
              className="bg-card text-card-foreground h-8 w-8"
              size="icon"
              asChild
            > */}
            <Link
              href={
                instituteAbout?.landing_control?.footer_links?.linkedin_link ??
                "https://www.linkedin.com/"
              }
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            {/* </Button> */}
            {/* <Button
              variant="outline"
              className="bg-card text-card-foreground h-8 w-8"
              size="icon"
              asChild
            > */}
            <Link
              href={
                instituteAbout?.landing_control?.footer_links?.youtube_link ??
                "https://www.youtube.com/"
              }
            >
              <Youtube className="h-5 w-5" />
            </Link>
            {/* </Button> */}
            {/* <Button
              variant="outline"
              className="bg-card text-card-foreground h-8 w-8"
              size="icon"
              asChild
            > */}
            <Link
              href={
                instituteAbout?.landing_control?.footer_links?.instagram_link ??
                "https://www.instagram.com/"
              }
            >
              <Instagram className="h-5 w-5" />
            </Link>
            {/* </Button> */}
          </div>
        </div>
      </div>
      <div className="md:flex justify-end bg-primary text-primary-foreground border-none hidden">
        {instituteAbout?.landing_control?.tab_toggle?.new_admission ? (
          <MenubarMenu>
            <MenubarTrigger>
              <Link href="/admission?tab=new-admission">New Admission</Link>
            </MenubarTrigger>
          </MenubarMenu>
        ) : null}

        {/* <MenubarMenu>
        <MenubarTrigger>
          <Link href="/notices">Notices</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/alumini">Alumini</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/library">Library</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/contact-us">Contact Us </Link>
        </MenubarTrigger>
      </MenubarMenu> */}
        {instituteAbout?.landing_control?.tab_toggle?.iqac ? (
          <MenubarMenu>
            <MenubarTrigger>
              <Link href="/iqac">IQAC</Link>
              {/* <ChevronDown className="text-primary-foreground hover:text-accent-foreground" /> */}
            </MenubarTrigger>
            {/* 
        <MenubarContent>
          <MenubarItem>
            <Link href="/iqac?tab=composition">Composition</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/iqac?tab=policy">Policy</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/iqac?tab=best-practices">Best Practices</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/iqac?tab=syllabus-feedback">Syllabus Feedback</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/iqac?tab=academic-calender">Academic Calender</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Reports</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link href="/iqac?tab=iqac-reports">IQAC Reports</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/iqac?tab=annual-reports">Annual Reports</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>SSR 2018</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link href="/iqac?tab=ssr-2018-documents">Documents</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/iqac?tab=ssr-2018-reports">Reports</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem>
            <Link href="/iqac?tab=audit">Audit</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/iqac?tab=quality-initiatives">
              Quality Initiatives
            </Link>
          </MenubarItem>
        </MenubarContent> */}
          </MenubarMenu>
        ) : null}
        {instituteAbout?.landing_control?.tab_toggle?.iqac ? (
          <MenubarMenu>
            <MenubarTrigger>
              <Link href="/naac">NAAC</Link>
            </MenubarTrigger>

            {/* <MenubarContent className="bg-background">
          <MenubarItem>
            <Link href="/naac?tab=ipp">Institute Perspective Planning</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/naac?tab=ssr-3">SSR-3 Cycle</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/naac?tab=ssr-4">SSR-4 Cycle</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/naac?tab=dvv">DVV</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/naac?tab=iiaq">IIAQ</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/naac?tab=certificate">Certificate</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/naac?tab=student-satisfactory-survey">
              Student Satisfactory Survey
            </Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/naac?tab=undertakings">Undertakings</Link>
          </MenubarItem>
        </MenubarContent> */}
          </MenubarMenu>
        ) : null}
        {instituteAbout?.landing_control?.tab_toggle?.committee ? (
          <MenubarMenu>
            <MenubarTrigger>
              Committee{" "}
              {/* <ChevronDown className="text-primary-foreground hover:text-accent-foreground" /> */}
            </MenubarTrigger>
            <MenubarContent>
              {uniqueCommittees.map((committee: any, index: number) => (
                <MenubarItem key={index}>
                  <Link href={committee.url}>{committee.name}</Link>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        ) : null}
        {/* <MenubarMenu>
        <MenubarTrigger>
          <Link href="https://dashboard.qviple.com/">Login</Link>
        </MenubarTrigger>
      </MenubarMenu> */}
      </div>
    </Menubar>
  );
}
