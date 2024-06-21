import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import TextInputField from "../TextInputField";

function BasicInfoNameAndEmail({ userResponse }) {
  console.log(
    "`${userResponse?.user?.data?.firstname} ${userResponse?.user?.data?.lastname}",
    `${userResponse?.user?.data?.firstname} ${userResponse?.user?.data?.lastname}`
  );
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(
    userResponse?.user?.data?.username
      ? userResponse?.user?.data?.username
      : "Femiivictors"
  );
  const [fullName, setFullName] = useState(
    `${userResponse?.user?.data?.firstname} ${userResponse?.user?.data?.lastname}`
  );
  const [email, _] = useState(userResponse?.user?.data?.email);

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
          Names and email
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
              Username
            </p>
            {editing ? (
              <TextInputField
                label={"Username"}
                value={username}
                setValue={setUsername}
              />
            ) : (
              <p className="font-karla font-bold text-xs md:text-sm xl:text-[16px] text-left flex-wrap whitespace-pre-wrap">
                {username}
              </p>
            )}
          </div>
          {/*  */}
          <div className="items-center flex">
            <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
              Full Name
            </p>
            {editing ? (
              <TextInputField
                label={"Full Name"}
                value={fullName}
                setValue={setFullName}
              />
            ) : (
              <p className="font-karla font-bold text-xs md:text-sm xl:text-[16px] text-left flex-wrap whitespace-pre-wrap">
                {fullName}
              </p>
            )}
          </div>

          {/* EMAIL fIELD */}
          <div className="items-center flex">
            <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
              Email
            </p>
            {editing ? (
              <TextInputField
                label={"Email"}
                value={email}
                setValue={() => null}
                disabled={true}
              />
            ) : (
              <p className="font-karla font-bold text-xs md:text-sm xl:text-[16px] text-left flex-wrap whitespace-pre-wrap">
                {email}
              </p>
            )}
          </div>
        </div>
      </div>
    </Box>
  );
}

export default BasicInfoNameAndEmail;
