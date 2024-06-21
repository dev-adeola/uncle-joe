import { Navbar } from "@/components";
import "../globals.css";

import SidebarDrawer from "@/components/LayoutComponents/SidebarDrawer";
import NavbarClient from "@/components/LayoutComponents/NavbarClient";

export const metadata = {
  title: "Ratefy Dashboard",
  description: "Welcome to Ratefy MARKET Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen w-full overflow-hidden ">
      <NavbarClient />
      <div className="flex flex-1 w-full items-start overflow-hidden pt-[60px]">
        {/* <Sidebar /> */}
        <SidebarDrawer />
        <div
          className={`xl:w-[calc(100%-260px)] w-full xl:ml-[260px] h-full bg-bgColor `}
        >
          <div className="w-full h-full  overflow-y-auto px-4 pt-4 md:px-10 xl:px-12">
            <div className=" mx-auto w-full max-w-[1021px] ">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
