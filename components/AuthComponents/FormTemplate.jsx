import React from "react";
import Link from "next/link";
import { BsArrowLeft } from 'react-icons/bs'

function FormTemplate({ children, actionLabel, label }) {
  return (
    <div className="w-full max-w-[420px] flex flex-col space-y-4">
      <div className="">
        <Link href={"/"} passHref>
          <BsArrowLeft />
        </Link>
      </div>
      <div className="w-full rounded-[25px] overflow-hidden">
        <div className="w-full flex items-center justify-center h-[80px] bg-secondary ">
          <img src="/assets/logo.png" alt="ratefy logo" className="w-[120px] " />
        </div>
        <div className="w-full bg-white px-9 py-4 space-y-8">
          <div className="flex items-center space-x-2">
            <span className="capitalize text-[#464646] text-[25px] font-rubik font-bold">
              {actionLabel}
            </span>
            <span className="lowercase text-gradient text-[#464646] text-[25px] font-rubik font-bold">
              {label}
            </span>
          </div>
          <div className=" w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default FormTemplate;
