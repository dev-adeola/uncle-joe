import { FormTemplate, RegisterPage } from "@/components";
import CheckIfAuthenticated from "@/utils/middleware/protectedRoute";
import React from "react";

function page() {
  return (
    <CheckIfAuthenticated>
      <FormTemplate actionLabel={"create"} label={"account"}>
        <RegisterPage />
      </FormTemplate>
    </CheckIfAuthenticated>
  );
}

export default page;
