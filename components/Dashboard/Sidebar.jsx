"use client"
import {
  AlertCircle,
  Archive,
  ArchiveX,
  ChevronRight,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"
import { Nav } from "./nav";
import { useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
const Sidebar = () => {
 
  
  const [isCollapsed, setIsCollapsed] = useState(false);
  const tooggleSidebar =({children})=>{ setIsCollapsed(!isCollapsed)}
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      <div className="absolute top-7 right-[-20px] ">
      <Button
      variant="secondary" 
      onClick={tooggleSidebar}
      className="">
        <ChevronRight/>
      </Button>
      </div>
       <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Home",
                label: "",
                icon: Archive,
                variant: "ghost",
                href:"/"
              },
              {
                title: "Inbox",
                label: "128",
                icon: Inbox,
                variant: "default",
                href:"/dashboard/inbox"
              },
              {
                title: "Drafts",
                label: "9",
                icon: File,
                variant: "ghost",
                href:"/dashboard/drafts"
              },
              // {
              //   title: "Sent",
              //   label: "",
              //   icon: Send,
              //   variant: "ghost",href:"dashboard/sent"
              // },
              // {
              //   title: "Junk",
              //   label: "23",
              //   icon: ArchiveX,
              //   variant: "ghost",
              //   href:"/dashboard/junk"
              // },
              // {
              //   title: "Trash",
              //   label: "",
              //   icon: Trash2,
              //   variant: "ghost",
              //   href:"/dashboard/trash"
              // },
              
            ]}
          />
          {/* <Separator /> */}
          <Nav/>
          
    </div>
  );
};

export default Sidebar;
