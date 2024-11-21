"use client";
import React, { use, useEffect, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useStore } from "@/store";
import {
  useIqacDetails,
  useIqacDetailsPDF,
  useOneIqacAuthority,
} from "@/api/api-hooks";
import { convertSnakeToTitleCase } from "@/lib/utils";
const MenuBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const qcid = useStore((state) => state.qid);
  const naacId = useStore((state) => state.naacId);
  const { data: iqacDetails } = useIqacDetailsPDF(qcid!);
  const { data: naacDetails } = useIqacDetailsPDF(naacId!);
  console.log(naacDetails);
  const renderNestedItems = (items: any, level = 1, type: string) => {
    return items.map((item: any) => {
      return (
        <MenubarItem key={item._id}>
          <Link href={`/${type}?tab=${item.name}`}>
            {convertSnakeToTitleCase(item.name)}
          </Link>
        </MenubarItem>
      );
    });
  };

  return (
    <div className="w-full bg-white shadow-sm">
      <button
        className="md:hidden z-50 absolute top-[20px] right-[20px]"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <Menubar className="md:flex justify-center bg-primary gap-4 text-primary-foreground border-none hidden">
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/">College Home</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            IQAC <ChevronDown size={18} />
          </MenubarTrigger>
          <MenubarContent>
            {iqacDetails?.q_detail?.outer_tab_nested &&
              renderNestedItems(
                iqacDetails.q_detail.outer_tab_nested,
                1,
                "iqac"
              )}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            NAAC <ChevronDown size={18} />
          </MenubarTrigger>
          <MenubarContent>
            {naacDetails?.q_detail?.outer_tab_nested &&
              renderNestedItems(
                naacDetails.q_detail.outer_tab_nested,
                1,
                "naac"
              )}
          </MenubarContent>
        </MenubarMenu>
        {/* Additional menus like NAAC and NIRF can follow the same pattern */}
      </Menubar>
    </div>
  );
};

export default MenuBar;
