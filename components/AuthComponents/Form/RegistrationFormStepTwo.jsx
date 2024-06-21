"use client";

import React from "react";
import { CustomCheckInput } from "../..";
import PasswordField from "../TextField/PasswordField";
import TextField from "../TextField/TextField";
import { PiUserListLight } from "react-icons/pi";
import Link from "next/link";
import { ThreeDots } from "react-loader-spinner";

function RegistrationFormStepTwo({
  value,
  errors,
  handleInput,
  handleSubmit,
  isLoading,
  isFormFilled,
}) {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-4">
        <TextField
          errors={errors}
          handleInput={handleInput}
          value={value.username}
          name="username"
          fieldLabel="Username"
          icon={<PiUserListLight />}
        />
        <PasswordField
          errors={errors}
          handleInput={handleInput}
          value={value.password}
          name="password"
        />
        <PasswordField
          errors={errors}
          handleInput={handleInput}
          value={value.password_confirmation}
          name="password_confirmation"
          fieldLabel="Confirm Password"
        />
      </div>
      <div className="space-y-3">
        <div className="flex w-full items-center space-x-2">
          <CustomCheckInput checked={true} />
          <p className="text-[#212529] text-sm font-rubik font-normal">
            I agree to ratefy terms and conditions.
          </p>
        </div>
        <div
          onClick={handleSubmit}
          className={`${
            !isFormFilled && "disabled-trade-btn"
          } flex p-3  items-center justify-center rounded-full bg-primary cursor-pointer `}
        >
          {isFormFilled && isLoading ? (
            <ThreeDots
              height="24"
              width="30"
              radius="12"
              color="#f9f9f9"
              ariaLabel="loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={isFormFilled}
            />
          ) : (
            <p className="text-center font-medium text-white">Sign Up</p>
          )}
        </div>
        <div className="w-full flex space-x-1 justify-center items-center">
          <p className="text-sm text-[#212529] font-normal font-karla">
            Already have an account?
          </p>
          <Link href={"/auth/login"} passHref>
            <p className="text-primary text-sm font-normal font-karla">
              Log in
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegistrationFormStepTwo;
