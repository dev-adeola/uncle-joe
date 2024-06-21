"use client";
import React, { useCallback, useEffect, useMemo } from "react";
import { LoadingKycVerification, UserKycVerification } from "@/components";
import {
  useGetUserIdQuery,
  useGetUserProfileMutation,
  useGetUsersMutation,
} from "@/services/apiSlice";
import dayjs from "dayjs";
import { toast } from "react-toastify";

const Page = () => {
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
  const { data, error, isError, isSuccess, isFetching, isLoading } =
    useGetUserIdQuery();

  const userId = useMemo(() => {
    return !isFetching && isSuccess ? data?.uuid : "";
  }, [isFetching, isSuccess, data]);
  //   const handSendRequest = useCallback(async () => {
  //     try {
  //       await getUserProfile({ uuid: userId }).unwrap();
  //     } catch (error) {
  //       console.log({ error });
  //       toast.error(error?.error || "An error occurred");
  //     }
  //   }, [userId]);

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
  console.log({ data, error, IsSuccess });

  const handSendRequest = useCallback(async () => {
    try {
      await getUsers({ uuid: userId }).unwrap();
      await getUserProfile({ uuid: userId }).unwrap();
    } catch (error) {
      console.log({ error });
      toast.error(error?.error || "An error occurred");
    }
  }, [userId]);
  console.log({ userResponse, Error, userProfileResponse });
  useEffect(() => {
    handSendRequest();
  }, [handSendRequest]);

  const userDetail = null;
  console.log(
    'dob={dayjs(userProfileResponse?.status?.data?.dob).format("YYYY-MM-DD")}',
    dayjs(userProfileResponse?.status?.data?.dob).format("YYYY-MM-DD")
  );
  if (!IsSuccess && !IsSuccessUserProfile) {
    return <LoadingKycVerification />;
  }
  return (
    <UserKycVerification
      uuid={userResponse?.user?.data?.uuid}
      email={userResponse?.user?.data?.email}
      first_name={userResponse?.user?.data?.firstname}
      last_name={userResponse?.user?.data?.lastname}
      dob={userProfileResponse?.status?.data?.dob}
      residence_country={userProfileResponse?.status?.data?.country}
    />
  );
};

export default Page;

// "use client"
// import React from 'react'
// import Dojah from 'react-dojah'

// export default function ChatPage   ()  {
//      /**
//    *  This is your app ID
//    * (go to your dashboard at
//    * https://dojah.io/dashboard
//    * to create an app and retrieve it)
//    */

//   const first_name = "adeola";
//   const last_name = "oladoja";
//   const email = "adeola.a.oladoja@gmail.com";

//   const dob = "1989-04-16";
//   const appID = "65ae5675f3f5140040f470ed";

//   /**
//    *  This is your account public key
//    *  (go to your dashboard at
//    *  https://dojah.io/dashboard to
//    *  retrieve it. You can also regenerate one)
//    */
//   const publicKey = "test_pk_Frj24usZSEDDN99TRgV0yYP5N";

//   /**
//    *  This is the widget type you'd like to load
//    *  (go to your dashboard at
//    *  https://dojah.io/dashboard to enable different
//    *  widget types)
//    */
//   const type = "custom";

//   const config = {
//   	widget_id: "65bb7171b7c19d0040b2ac53" //this is generated from easyonboard
//   };

//   /**
//    *  These are the user's data to verify, options
//    *  available to you possible options are:
//    *  {first_name: STRING, last_name: STRING, dob: DATE STRING}
//    *
//    *  NOTE: Passing all the values will automatically skip
//    *  the user-data page (thus the commented out `last_name`)
//    */
//   const userData = {
//     first_name: "adeola", //Optional
//     last_name: "oladoja", //Optional
//     dob: "1989-04-16", //YYYY-MM-DD Optional
//     residence_country: 'NG', //Optional
//     email: "adeola.a.oladoja@gmail.com"//optional
//   };

//   /**
//    *  These are the metadata options
//    *  You can pass any values within the object
//    */
//   const metadata = {
//     user_id: '1',
//   };

//   /**
//    * @param {String} type
//    * This method receives the type
//    * The type can only be one of:
//    * loading, begin, success, error, close
//    * @param {String} data
//    * This is the data from doja
//    */
//   const response = (type, data) => {
//     console.log(type, data);
//     if(type === 'success'){
//     }else if(type === 'error'){
//     }else if(type === 'close'){
//     }else if(type === 'begin'){
//     }else if(type === 'loading'){
//     }

//   }
//   return (
//     <Dojah
//       response={response}
//       appID={appID}
//       publicKey={publicKey}
//       type={type}
//       config={config}
//       userData={userData}
//       metadata={metadata}
//     />

//   )
// }
