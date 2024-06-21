import { EmailVerifiedForm } from "@/components";
import React from "react";

function page({ params }) {
    return <EmailVerifiedForm id={params.id} hash={params.hash} />;
}

export default page;
