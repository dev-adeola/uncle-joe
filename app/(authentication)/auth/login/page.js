'use server'

import { FormTemplate, LoginForm } from "@/components";
import CheckIfAuthenticated from "@/utils/middleware/protectedRoute";
import React from "react";

function page() {
  return (
    <CheckIfAuthenticated>
      <FormTemplate actionLabel={"Sign in"} label={"account"}>
        <LoginForm />
      </FormTemplate>
    </CheckIfAuthenticated>
  );
}

export default page;
