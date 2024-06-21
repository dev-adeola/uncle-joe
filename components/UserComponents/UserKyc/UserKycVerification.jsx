"use client";

import dayjs from "dayjs";
import { redirect, useRouter } from "next/navigation";
import React from "react";
// import Dojah from "react-dojah";
import { toast } from "react-toastify";

function UserKycVerification({
  first_name,
  last_name,
  dob,
  residence_country,
  email,
  uuid,
}) {
  const router = useRouter();

  console.log({ dob });
  const dateString = dob;
  const formattedDate = dayjs(dateString).format("YYYY-MM-DD");

  console.log(typeof formattedDate);
  const userData = {
    first_name,
    last_name,
    dob: formattedDate,
    residence_country,
    email,
  };
  console.log({ userData, first_name });
  const metadata = {
    user_id: uuid,
  };
  const type = "custom";

  const config = {
    widget_id: process.env.NEXT_PUBLIC_WIDGETID, //this is generated from easyonboard
  };
  const publicKey = process.env.NEXT_PUBLIC_PUBLICKEY;

  const appID = process.env.NEXT_PUBLIC_APPID;
  const response = (type, data) => {
    if (type === "success") {
      console.log({ data });
      toast.success(data?.message || "Verification successfull");
      router.push("/dashboard/user/profile?kyc-status=success");
    } else if (type === "error") {
      toast.error(data?.message || "Error occure during verification");
      router.push("/dashboard/user/profile?kyc-status=error");
      console.log("error", { data });
    } else if (type === "close") {
      redirect.push("/user/profile?kyc-status=incomplete");

      console.log("close", { data });
    }
  };

  return (
    <>
      <h1>Hello world</h1>
    </>
    // <Dojah
    //   response={response}
    //   appID={appID}
    //   publicKey={publicKey}
    //   type={type}
    //   config={config}
    //   userData={userData}
    //   metadata={metadata}
    // />
  );

  /**
   *  This is your app ID
   * (go to your dashboard at
   * https://dojah.io/dashboard
   * to create an app and retrieve it)
  //  */

  // const first_name = "adeola";
  // const last_name = "oladoja";
  // const email = "adeola.a.oladoja@gmail.com";

  // const dob = "1989-04-16";
  // const appID = "65ae5675f3f5140040f470ed";

  // /**
  //  *  This is your account public key
  //  *  (go to your dashboard at
  //  *  https://dojah.io/dashboard to
  //  *  retrieve it. You can also regenerate one)
  //  */
  // const publicKey = "test_pk_Frj24usZSEDDN99TRgV0yYP5N";

  // /**
  //  *  This is the widget type you'd like to load
  //  *  (go to your dashboard at
  //  *  https://dojah.io/dashboard to enable different
  //  *  widget types)
  //  */
  // const type = "custom";

  // const config = {
  //   widget_id: "65bb7171b7c19d0040b2ac53", //this is generated from easyonboard
  // };

  // /**
  //  *  These are the user's data to verify, options
  //  *  available to you possible options are:
  //  *  {first_name: STRING, last_name: STRING, dob: DATE STRING}
  //  *
  //  *  NOTE: Passing all the values will automatically skip
  //  *  the user-data page (thus the commented out `last_name`)
  //  */
  // const userData = {
  //   first_name: "adeola", //Optional
  //   last_name: "oladoja", //Optional
  //   dob: "1989-04-16", //YYYY-MM-DD Optional
  //   residence_country: "NG", //Optional
  //   email: "adeola.a.oladoja@gmail.com", //optional
  // };

  // /**
  //  *  These are the metadata options
  //  *  You can pass any values within the object
  //  */
  // const metadata = {
  //   user_id: "1",
  // };

  // /**
  //  * @param {String} type
  //  * This method receives the type
  //  * The type can only be one of:
  //  * loading, begin, success, error, close
  //  * @param {String} data
  //  * This is the data from doja
  //  */
  // const response = (type, data) => {
  //   console.log(type, data);
  //   if (type === "success") {
  //   } else if (type === "error") {
  //   } else if (type === "close") {
  //   } else if (type === "begin") {
  //   } else if (type === "loading") {
  //   }
  // };
  // return (
  //   <Dojah
  //     response={response}
  //     appID={appID}
  //     publicKey={publicKey}
  //     type={type}
  //     config={config}
  //     userData={userData}
  //     metadata={metadata}
  //   />
  // );
}

export default UserKycVerification;
