"use client";
import React, { useState } from "react";

// function CustomRateButton({ label, selected, setSelected }) {
//   return (
//     <div onClick={setSelected} className={`cursor-pointer rounded-[10px] px-2 w-[138px] h-8 bg-[#333] flex items-center space-x-2 justify-start border border-[#333] ${selected && '!border-primary'}`}>
//       {/*  */}
//       {selected ? (
//         <div className="w-[13px] h-[13px] rounded-full border-2 border-primary">
//           <div className="w-full h-full rounded-full bg-[#D9D9D9]" />
//         </div>
//       ) : (
//         <div className="w-[13px] h-[13px] rounded-full border border-[#a6a6a6]" />
//       )}

//       {/*  */}
//       <p className="text-xs font-rubik font-medium text-lightGray">{label}</p>
//     </div>
//   );
// }

const CustomRateButton = ({ options, handleChangeInput, selectedOption }) => {
  console.log({ selectedOption });
  return (
    <div className="flex ">
      {options.map((option) => (
        <div
          key={option.value}
          onClick={() => handleChangeInput(option.value)}
          className={`cursor-pointer rounded-[10px]  h-8 bg-[#333] flex items-center px-4 justify-start border border-[#333] ${
            selectedOption === option.value && "!border-primary"
          }`}
          style={{ marginRight: "8px" }} // Add margin between options
        >
          <input
            type="radio"
            id={option.value}
            name="rateType"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => handleChangeInput(option.value)}
            className="hidden"
          />
          <label
            htmlFor={option.value}
            className="flex cursor-pointer items-center "
          >
            {selectedOption === option.value ? (
              <div className="w-[13px] h-[13px] rounded-full border-2 border-primary">
                <div className="w-full h-full rounded-full bg-[#D9D9D9]" />
              </div>
            ) : (
              <div className="w-[13px] h-[13px] rounded-full border border-[#a6a6a6]" />
            )}
            <p className="text-xs font-rubik font-medium  text-lightGray ml-1">
              {option.label}
            </p>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CustomRateButton;
