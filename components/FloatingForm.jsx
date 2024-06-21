import React, { useState } from "react";
import { Controller } from "react-hook-form";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const FloatingLabelInput = ({
  label,
  value,
  onChange,
  type,
  options,
  className,
  name,
  control,
  rules,
  errors,
  placeholderText,
  ...inputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <>
            {type === "select" ? (
              <div className="mb-4 flex flex-col relative">
                <div className="relative">
                  <select
                    className={`w-full px-3  py-3 border bg-white  rounded-md focus:outline-none ${
                      errors
                        ? "border-red-500 focus:border-red-500"
                        : "border-amber-500"
                    } `}
                    // className={` ${
                    //   className ? `md:${className} text-base w-full` : "w-full"
                    // } px-3 py-4 bg-white border-b border-amber-300 focus:outline-none ${
                    //   errors
                    //     ? "border-red-500 focus:border-red-500"
                    //     : "border-amber-500"
                    // }`}
                    value={value}
                    // onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...inputProps}
                    {...field}
                  >
                    {options.map((option, index) => (
                      <option
                        className="text-sm"
                        key={index}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <label
                    className={`absolute left-3 transition-all duration-200 ${
                      isFocused || value
                        ? "-top-2 text-black text-xs"
                        : "top-1/2 text-blacktext-base"
                    }`}
                    htmlFor="select"
                  >
                    {/* {label} */}
                  </label>
                </div>
                <div className="">
                  {errors && (
                    <p className=" text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
              </div>
            ) : type === "textarea" ? (
              <div className="mb-4 flex-col relative">
                <div className="relative">
                  <textarea
                    className={`w-full px-3 resize-none py-2 border-b focus:outline-none ${
                      isFocused ? "border-blue-500" : "border-gray-300"
                    }`}
                    value={value}
                    placeholder={placeholderText}
                    // onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...inputProps}
                    {...field}
                  />
                  <label
                    className={`absolute left-3 transition-all duration-200 ${
                      isFocused || value
                        ? "-top-2 text-black text-xs"
                        : "top-1/2 text-blacktext-base"
                    }`}
                    htmlFor="textarea"
                  >
                    {label}
                  </label>
                </div>
                <div className="">
                  {errors && (
                    <p className=" text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
              </div>
            ) : type === "password" ? (
              <div className="flex flex-col">
                <div className="mb-4 relative">
                  <label
                    className={`text-black  capitalize py-2`}
                    htmlFor="input"
                  >
                    {label}
                  </label>
                  <input
                    className={`w-full px-3  py-3 border  rounded-md focus:outline-none ${
                      errors
                        ? "border-red-500 focus:border-red-500"
                        : "border-amber-500"
                    } `}
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder={placeholderText}
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...inputProps}
                    {...field}
                  />
                  <div
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </div>
                </div>
                {/* <div className="mb-4 relative">
                  <input
                    className={`w-full px-3 py-4 border-b focus:outline-none ${
                      isFocused ? "border-amber-500" : "border-amber-300"
                    }`}
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder={placeholderText}
                    value={value}
                    onChange={onChange}
                    autoComplete="off"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...inputProps}
                    {...field}
                  />
                  <label
                    className={`absolute left-3 transition-all duration-200 ${
                      isFocused || value
                        ? "-top-2 text-black text-xs"
                        : "top-1/2 text-black text-base"
                    }`}
                    htmlFor="input"
                  >
                    {label}
                  </label>
                  <div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </div>
                </div> */}
                <div className="">
                  {errors && (
                    <p className=" text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex  flex-col">
                <div className="mb-4">
                  <label
                    className={`text-black  capitalize py-2`}
                    htmlFor="input"
                  >
                    {label}
                  </label>
                  <input
                    className={`w-full px-3  py-3 border  rounded-md focus:outline-none ${
                      errors
                        ? "border-red-500 focus:border-red-500"
                        : "border-amber-500"
                    } `}
                    type={type}
                    placeholder={placeholderText}
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...inputProps}
                    {...field}
                  />
                </div>
                <div className="">
                  {errors && (
                    <p className=" text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      />

      {/* <div className="mb-4 relative">
        <div className="relative">
          <select
            className={`w-full px-3 py-2 border-b focus:outline-none ${
              isFocused ? "border-blue-500" : "border-gray-300"
            }`}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <label
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-200 ${
              isFocused || value
                ? "text-blue-500 text-xs"
                : "text-gray-500 text-base"
            }`}
            htmlFor="select"
          >
            {label}
          </label>
        </div>
      </div> */}
    </>
  );
};

const MyForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="max-w-md mx-auto p-4">
      <form>
        <FloatingLabelInput
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FloatingLabelInput
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {/* Add more FloatingLabelInput components for additional fields */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FloatingLabelInput;
