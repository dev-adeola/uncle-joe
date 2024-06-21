import { FormTemplate, ResetPasswordForm } from "@/components";
import React from "react";

function page() {
  return (
    <FormTemplate actionLabel={"reset"} label={"account"}>
      <ResetPasswordForm />
    </FormTemplate>
  );
}

export default page;
