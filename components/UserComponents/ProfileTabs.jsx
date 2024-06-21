"use client";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useCallback, useEffect, useMemo, useState } from "react";
import ProfileBasicInfo from "./UserBasicInfo";
import UserSecurity from "./UserSecurity";
import { styled } from "@mui/material";
import UserKYC from "./UserKyc";
import WorkInformation from "./UserWorkInformation/WorkInformation";
import {
  useGetUserIdQuery,
  useGetUserProfileMutation,
  useGetUsersMutation,
} from "@/services/apiSlice";
import { toast } from "react-toastify";
import LoadingSpinner from "../LoadingSpinner";

const mobileLabels = ["Basic Info", "Work Information", "Security"];
const desktopLabels = ["Basic Information", "Work Information", "Security"];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div> {children} </div>}
    </div>
  );
}

const CustomTabs = styled((props) => <Tabs {...props} />)({
  ".MuiTabs-indicator": {
    display: "none",
  },
  "&.MuiTabs-root": {
    minHeight: "28px",
    height: "28px",
  },
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(() => ({
  padding: 0,
  margin: 0,
  width: "fit",
  textTransform: "none",
  color: "#a6a6a6",
  "&.MuiTab-root": {
    minHeight: "28px",
    height: "28px",
    minWidth: "fit-content !important",
    width: "fit !important",
  },
  "&.Mui-selected ": {
    color: "#00B172",
  },
  "&.Mui-selected > .activeTabBorder": {
    borderBottom: "12px !important",
    borderColor: "#00B172 !important",
  },
}));


export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const { data, error, isError, isSuccess, isFetching, isLoading } =
    useGetUserIdQuery();
  // const userId = !isFetching && isSuccess ? data?.uuid : "";
  const userId = useMemo(() => {
    return !isFetching && isSuccess ? data?.uuid : "";
  }, [isFetching, isSuccess, data]);
  console.log({ userId });
  const [
    getUserProfile,
    {
      data: userProfileResponse,
      isError: IsErrorUserProfile,
      isLoading: IsLoadingUserProfile,
      error: ErrorUserProfile,
      isSuccess: IsSuccessUserProfile,
    },
  ] = useGetUserProfileMutation();
  const [
    getUsers,
    {
      data: userResponse,
      isError: IsError,
      isLoading: IsLoading,
      error: Error,
      isSuccess: IsSuccess,
    },
  ] = useGetUsersMutation();

  console.log({ userResponse });

  const handSendRequestUserProfile = useCallback(async () => {
    try {
      await getUserProfile({ uuid: userId }).unwrap();
    } catch (error) {
      console.log({ error });
      // toast.error(error?.error || "An error occurred");
    }
  }, [userId]);

  useEffect(() => {
    handSendRequestUserProfile();
  }, [handSendRequestUserProfile]);

  const handSendRequest = useCallback(async () => {
    try {
      await getUsers({ uuid: userId }).unwrap();
    } catch (error) {
      console.log({ error });
      toast.error(error?.error || "An error occurred");
    }
  }, [userId]);
  console.log({ userResponse, Error, IsLoading, IsSuccess });
  useEffect(() => {
    handSendRequest();
  }, [handSendRequest]);


  return (
    <Box sx={{ width: "100%" }} className="space-y-4">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MobileTabs
          handleChange={handleChange}
          value={value}
          labels={mobileLabels}
        />
        <DesktopTabs
          handleChange={handleChange}
          value={value}
          labels={desktopLabels}
        />
      </Box>
      <Box>
        {IsLoadingUserProfile ? (
          <LoadingSpinner />
        ) : (
          IsSuccessUserProfile && (
            <UserKYC
              userProfileResponse={userProfileResponse}
              userKycStatusValue={"unverified"}
            />
          )
        )}
      </Box>
      <CustomTabPanel value={value} index={0}>
        {IsLoading ? (
          <LoadingSpinner />
        ) : (
          IsSuccess && (
            <ProfileBasicInfo userResponse={userResponse} userId={userId} />
          )
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <WorkInformation userId={userId} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <UserSecurity />
      </CustomTabPanel>
    </Box>
  );
}

const MobileTabs = ({ value, handleChange, labels, props }) => {
  return (
    <CustomTabs
      variant="fullWidth"
      value={value}
      onChange={handleChange}
      aria-label="user profile"
      className="w-full md:w-fit space-x-4 md:space-x-6 md:hidden"
      {...props}
    >
      {labels.map((label) => (
        <CustomTab
          key={label}
          label={
            <div className="text-center text-sm md:text-[16px] xl:text-lg font-rubik font-medium  capitalize p-0 h-full activeTabBorder">
              {label}
            </div>
          }
        />
      ))}
    </CustomTabs>
  );
};

const DesktopTabs = ({ value, handleChange, labels, props }) => {
  return (
    <CustomTabs
      variant="standard"
      value={value}
      onChange={handleChange}
      aria-label="user profile"
      className="space-x-8 hidden md:block"
      {...props}
    >
      {labels.map((label) => (
        <CustomTab
          key={label}
          label={
            <div className="text-center text-sm md:text-[16px] xl:text-lg font-rubik font-medium mr-8 capitalize p-0 h-full activeTabBorder">
              {label}
            </div>
          }
        />
      ))}
    </CustomTabs>
  );
};
