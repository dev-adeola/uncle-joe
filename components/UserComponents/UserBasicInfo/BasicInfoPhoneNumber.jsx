import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import TextInputField from "../TextInputField";

function BasicInfoPhoneNumber({ userResponse }) {
  const [editing, setEditing] = useState(false);
  const [primaryNumber, setPrimaryNumber] = useState(
    userResponse?.user?.data?.phonenumber
  );
  const [alternativeNumber, setAlternativeNumber] = useState(
    userResponse?.user?.data?.alternativeNumber
      ? userResponse?.user?.data?.alternativeNumber
      : userResponse?.user?.data?.phonenumber
  );

  const handleEdit = () => {
    setEditing(true);
  };
  const handleSave = () => {
    setEditing(false);
  };

  return (
    <Box className="px-4 md:px-6 xl:px-8 py-4 md:py-6 bg-secondary shadow-sm xl:shadow-md rounded-sm space-y-4 text-secondary ">
      <div className="flex items-start justify-between">
        {" "}
        <p className="text-sm md:text-lg font-rubik font-normal">
          Phone number
        </p>
        <div>
          {editing ? (
            <IconButton color="primary" onClick={handleSave}>
              <DoneIcon fontSize="medium" />
            </IconButton>
          ) : (
            <IconButton color="#f9f9f9" onClick={handleEdit}>
              <EditIcon fontSize="medium" color="#f9f9f9" />
            </IconButton>
          )}
        </div>
      </div>
      <div className="w-full">
        {/*  */}
        <div className="flex-1 space-y-3">
          {/*  */}
          <div className="items-center flex">
            <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
              Primary Phone Number
            </p>
            {editing ? (
              <TextInputField
                label={"Primary Phone Number"}
                value={primaryNumber}
                setValue={setPrimaryNumber}
                type="tel"
              />
            ) : (
              <p className="font-karla font-bold text-xs md:text-sm xl:text-[16px] text-left flex-wrap whitespace-pre-wrap">
                {primaryNumber}
              </p>
            )}
          </div>
          {/*  */}
          <div className="items-center flex">
            <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
              Alternate Phone Number
            </p>

            {editing ? (
              <TextInputField
                label={"Alternate Phone Number"}
                value={alternativeNumber}
                setValue={setAlternativeNumber}
                type="tel"
              />
            ) : (
              <p className="font-karla font-bold text-xs md:text-sm xl:text-[16px] text-left flex-wrap whitespace-pre-wrap">
                {alternativeNumber}
              </p>
            )}
          </div>
          {/*  */}
        </div>
      </div>
    </Box>
  );
}

export default BasicInfoPhoneNumber;
