'use client'

import { Box } from "@mui/material";
import React, { useState } from "react";
import PasswordInputField from "../PasswordInputField";

function ChangePassword() {

  const [password, setPassword] = useState(null)
  const [oldPassword, setOldPassword] = useState(null)


  return (
    <Box className="px-4 md:px-6 xl:px-8 py-4 md:py-6 bg-secondary shadow-sm xl:shadow-md rounded-sm space-y-4 text-secondary ">
      <div className="flex items-start justify-between">
        {" "}
        <p className="text-sm md:text-lg font-rubik font-normal">
          Change Password
        </p>
      </div>
      <div className="w-full">
        {/*  */}
        <div className="flex-1 space-y-3">
          {/*  */}
          <div className="items-center flex">
            <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
              Old Password
            </p>
            <PasswordInputField
              label={'Old Password'}
              value={oldPassword}
              setValue={setOldPassword}
            />
          </div>
          {/*  */}
          <div className="items-center flex">
            <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
              New Password
            </p>
            <PasswordInputField
              label={'New Password'}
              value={password}
              setValue={setPassword}
            />
          </div>
          {/*  */}
          <div className="items-center flex">
            <p className="w-[160px] md:w-[200px]" />
            <div className="w-full max-w-[320px] flex items-center justify-center py-3 xl:py-4 bg-primary rounded-md text-lightGray cursor-pointer">
              <p className="font-rubik text-center text-sm md:text-lg font-extrabold xl:text-[20px]">
                Change Password
              </p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default ChangePassword;
