"use client";

import React from "react";
import TextField from "../TextField/TextField";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

function RegistrationStepOne({ value, errors, handleInput, handleNext }) {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-4">
        <TextField
          errors={errors}
          handleInput={handleInput}
          value={value.firstname}
          name="firstname"
        />
        <TextField
          fieldLabel="Last Name"
          errors={errors}
          handleInput={handleInput}
          value={value.lastname}
          name="lastname"
        />
        <TextField
          errors={errors}
          handleInput={handleInput}
          value={value.mobile}
          name="mobile"
          fieldLabel="Phone Number"
          label="tel"
          icon={<BsTelephone />}
        />
        <TextField
          errors={errors}
          handleInput={handleInput}
          value={value.email}
          name="email"
          fieldLabel="Eamil"
          label="email"
          icon={<HiOutlineMailOpen />}
        />
      </div>
      <div className="space-y-3">
        <div
          onClick={handleNext}
          className="flex p-3  items-center justify-center rounded-full bg-primary cursor-pointer"
        >
          <p className="text-center text-white">Next</p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationStepOne;
