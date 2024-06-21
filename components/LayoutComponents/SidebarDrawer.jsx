"use client";

import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Sidebar } from "..";
import { useDispatch, useSelector } from "react-redux";
import { closeSideDrawer, openSideDrawer } from "@/redux/slices/layoutSlice";
import { getDeviceWidth } from "@/utils/deviceWidthDetector";

export default function SidebarDrawer() {
  const sideDrawer = useSelector((state) => {
    return state.layout.sidebarDrawer;
  });
  const dispatch = useDispatch();
  const [drawerVariant, setdrawerVariant] = useState("temporary");

  function handleDeviceWidth() {
    const w = getDeviceWidth();
    if (w >= 1440) {
      dispatch(openSideDrawer());
      setdrawerVariant("permanent");
    } else {
      dispatch(closeSideDrawer());
      setdrawerVariant("temporary");
    }
  }

  useEffect(() => {
    handleDeviceWidth();
    window.addEventListener("resize", handleDeviceWidth);
    return () => {
      window.removeEventListener("resize", handleDeviceWidth);
    };
  }, []);

  return (
    <Drawer
      anchor={"left"}
      open={sideDrawer?.isOpen}
      variant={"permanent"}
    >
      <div className="h-full flex flex-col justify-end">
        {sideDrawer?.isOpen && <Sidebar />}
      </div>
    </Drawer>
  );
}
