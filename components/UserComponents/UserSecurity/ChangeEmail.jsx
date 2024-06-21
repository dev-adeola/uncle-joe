import { Box } from "@mui/material";
import React from "react";

function ChangeEmail() {
  return (
    <Box className="px-4 md:px-6 xl:px-8 py-4 md:py-6 bg-secondary shadow-sm xl:shadow-md rounded-sm space-y-4 text-secondary ">
      <div className="flex items-start justify-between">
        {" "}
        <p className="text-sm md:text-lg font-rubik font-normal">
          Change Email
        </p>
      </div>
      <div className="w-full max-w-[345px] flex items-center justify-center py-4 bg-primary rounded-sm text-lightGray cursor-pointer">
        <p className="font-rubik text-center text-sm md:text-lg font-extrabold xl:text-[20px]">
          Contact Support
        </p>
      </div>
    </Box>
  );
}

export default ChangeEmail;
