import React from "react";
import { FiCheckSquare } from "react-icons/fi";

function RegistrationSuccessForm() {
  return (
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
            success
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
        </div>
      </div>
    </div>
  );
}

export default RegistrationSuccessForm;
