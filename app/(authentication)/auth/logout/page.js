'use client'

import { FormTemplate } from "@/components";
import { signOut } from "next-auth/react";
import React, { useEffect } from "react";

function page() {
  useEffect(async () => {
    try {
      const res = await fetch("https://p2p.ratefy.co/logout", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "User-Agents": "Ratefy",
        },
      });
      const response = await res.json();
      console.log({ response })
      if (!res.ok) {
        throw new Error(response.message);
      }
      signOut({ redirect: false })
      router.push('/auth/login');
      return Promise.resolve({ response });
    } catch (error) {
      console.error(error);
      throw new Error("Error: " + error.message);
    }
  }, [])

  return (
    <FormTemplate actionLabel={"Sign Out"} label={"account"} />
  );
}

export default page;
