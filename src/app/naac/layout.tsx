"use client";
import LandingWrapper from "@/components/landing-wrapper";
import {
  Menubar,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { MenubarContent } from "@radix-ui/react-menubar";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import MenuBar from "./_ui/menu-bar";

const NaacLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <LandingWrapper type="naac">
        <MenuBar />
        {children}
      </LandingWrapper>
    </>
  );
};

export default NaacLayout;
