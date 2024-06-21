import VerifyUserIdentity from "@/components/UserComponents/UserKyc/VerifyUserIdentity";
import { Box } from "@mui/material";
import React from "react";

const Page = () => {
  const baseAPIURL = `${your - API - server - URL}`;

  const getWebToken = async (baseAPIURL) => {
    const fetchConfig = {};

    fetchConfig.cache = "no-cache";
    fetchConfig.mode = "cors";
    fetchConfig.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    fetchConfig.method = "POST";

    const URL = `${baseAPIURL}/token/`;
    try {
      const response = await fetch(URL, fetchConfig);

      if (response.status === 200 || response.statusCode === 200) {
        const json = await response.json();

        if (json.error) {
          throw new Error(json.error);
        }

        return json;
      }
    } catch (e) {
      console.log(`API: ${e.name}, ${e.message}`);
      throw e;
    }
  };

  const verifyWithSmileIdentityButton = document.querySelector(
    "#verify-with-smile-id"
  );

  // verifyWithSmileIdentityButton.addEventListener(
  //   "click",
  //   async (e) => {
  //     e.preventDefault();

  //     verifyWithSmileIdentityButton.textContent = "Initializing session...";
  //     verifyWithSmileIdentityButton.disabled = true;

  //     const { token } = await getWebToken(baseAPIURL);
  //   },
  //   false
  // );

  const handleVerifyClick = async () => {
    setLoading(true);

    const verifyWithSmileIdentityButton = document.querySelector(
      "#verify-with-smile-id"
    );

    verifyWithSmileIdentityButton.addEventListener(
      "click",
      async (e) => {
        e.preventDefault();

        verifyWithSmileIdentityButton.textContent = "Initializing session...";
        verifyWithSmileIdentityButton.disabled = true;

        try {
          const { token } = await getWebToken(baseAPIURL);
          // Do something with the token
          console.log("Received token:", token);
        } catch (error) {
          console.error("Error:", error.message);
        } finally {
          // Reset button state
          verifyWithSmileIdentityButton.textContent =
            "Verify with Smile Identity";
          verifyWithSmileIdentityButton.disabled = false;
        }
      },
      false
    );
    //   try {
    //     const { token } = await getWebToken(baseAPIURL);
    //     console.log("Received token:", token);
    //   } catch (error) {
    //     console.error("Error:", error.message);
    //   } finally {
    //     setLoading(false);
    //   }
  };

  return (
    <>
      <VerifyUserIdentity onClick={handleVerifyClick} disabled={loading} />
    </>
  );
};

export default Page;
