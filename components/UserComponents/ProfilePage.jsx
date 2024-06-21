import { Box, Typography } from "@mui/material";
import React from "react";
import BasicTabs from "./ProfileTabs";


function ProfilePage() {
  return (
    <Box className="w-full flex flex-col gap-4">
      {/* Overview */}
      <Box>
        <Box className="flex items-start justify-between">
          <Box className="flex items-center space-x-4 font-rubik">
            <Typography className="text-2xl font-bold text-white lg:text-[25px] ">
              My
            </Typography>
            <Typography className="text-gradient text-2xl font-bold text-white lg:text-[25px]">
              Profile
            </Typography>
          </Box>
        </Box>
      </Box>

      {/*  */}
      <Box>
        <BasicTabs />
      </Box>
    </Box>
  );
}

export default ProfilePage;
