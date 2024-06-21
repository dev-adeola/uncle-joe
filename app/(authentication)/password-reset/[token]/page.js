'use client'

import { FormTemplate, ResetPasswordForm } from "@/components";
import { useSearchParams } from "next/navigation";
import React from "react";

function page({ params }) {

  const email = useSearchParams().get('email')



  return (
    <FormTemplate actionLabel={"reset"} label={"account"}>
      <ResetPasswordForm
        token={params.token}
        email={email}
      />
    </FormTemplate>
  );
}

export default page;
