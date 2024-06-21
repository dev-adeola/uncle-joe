import { Box } from "@mui/material";
import React from "react";
import BasicInfoNameAndEmail from "./BasicInfoNameAndEmail";
import BasicInfoAddress from "./BasicInfoAddress";
import BasicInfoPhoneNumber from "./BasicInfoPhoneNumber";
import { useSession } from "next-auth/react";

const ProfileBasicInfo = ({ userResponse, userId }) => {
  return (
    <Box className="space-y-3 xl:space-y-4">
      <BasicInfoNameAndEmail userResponse={userResponse} />
      <BasicInfoAddress userResponse={userResponse} userId={userId} />
      <BasicInfoPhoneNumber userResponse={userResponse} />
    </Box>
  );
};

export default ProfileBasicInfo;
