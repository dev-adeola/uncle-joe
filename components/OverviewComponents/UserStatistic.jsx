import { Box } from "@mui/material";
import React from "react";

function UserStatistic({ userStatistics }) {
  return (
    <Box className="flex items-center w-full justify-start gap-2 lg:gap-8">
      {userStatistics.map((statics, i) => (
        <div
          key={i}
          className="flex-col lg:flex-row flex h-[50px] min-w-[100px] w-full items-start justify-center lg:items-center lg:gap-4 rounded-[5px] lg:rounded-[10px] bg-gray px-2 py-1 lg:py-4 lg:h-[35px] lg:w-[225px]"
        >
          <p className="font-rubik text-[16px] font-extrabold text-white lg:text-lg">
            {statics.value}
          </p>
          {/* <br className=" xl:hidden" /> */}
          <p className="font-karla text-[10px] font-normal text-white lg:text-[15px]">
            {statics.label}
          </p>
        </div>
      ))}
    </Box>
  );
}

export default UserStatistic;
