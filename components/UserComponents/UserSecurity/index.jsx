import { Box } from "@mui/material";
import React from "react";
import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail";

function UserSecurity() {
  return (
    <Box className="space-y-3 xl:space-y-4">
      <ChangePassword />
      <ChangeEmail />
    </Box>
  );
}

export default UserSecurity;