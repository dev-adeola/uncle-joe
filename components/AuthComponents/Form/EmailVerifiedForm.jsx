"use client";

import React, { useEffect, useState } from "react";
import { FiCheckSquare } from "react-icons/fi";

function EmailVerifiedForm({ id, hash }) {
  console.log(id, hash);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  useEffect(async () => {
    try {
      const res = await fetch(`https://p2p.ratefy.co/${id}/${hash}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "User-Agents": "Ratefy",
        },
      });
      const result = await res.json();
      console.log({ result });
      // If no error
      if (res.ok) {
        setIsEmailVerified(true);
        return Promise.resolve();
      } else {
        // throw new Error("Error verifying user email");
      }
    } catch (error) {
      console.log({ error });
      // throw new Error(error.message);
      return;
    }
  }, []);

  return isEmailVerified ? (
    <div className="w-full max-w-[420px] flex flex-col space-y-4">
      <div className="w-full rounded-[25px] overflow-hidden">
        <div className="w-full flex items-center justify-center h-[80px] bg-secondary ">
          <img
            src="/assets/logo.png"
            alt="ratefy logo"
            className="w-[120px] "
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center bg-white px-9 py-4 space-y-8">
          <span className="lowercase text-center text-gradient text-[#464646] text-[25px] font-rubik font-bold">
            Email Verification Successful
          </span>

          <p className="text-primary">
            <FiCheckSquare className="w-[48px] h-[48px]" />
          </p>

          <div>
            <p className="text-center text-[#4b4c4c] text-[16px] font-karla font-normal">
              Your account has been successfully <br /> created. Kindly check
              your inbox or <br /> spam folder to verify you account.
            </p>
          </div>
          <div className="mt-8 w-full">
            <Link href={"/dashboard/overview"} passHref>
              <div className="flex p-3 w-full  items-center space-x-1 justify-center rounded-full bg-primary cursor-pointer">
                <p className="text-center text-white">Go to dashboard</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default EmailVerifiedForm;
