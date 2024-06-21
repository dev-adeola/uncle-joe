"use client";

import React, { useCallback, useState } from "react";
import TextField from "../TextField/TextField";
import Link from "next/link";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsEnvelopeAt } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";
import { validateEmail } from "@/utils/validation";
import { useSendForgetPasswordMutation } from "@/services/apiSlice";
import { toast } from "react-toastify";


function ForgotPasswordForm() {
  // const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
  });

  const [isFormFilled, setIsFormFilled] = useState(false);
  const [errors, setErrors] = useState({
    email: null,
  });



  const handleInput = (e) => {
    const { name, value } = e.target;
    let error = null;

    if (name === "email") {
      error = validateEmail(value);
      if (error) {
        setErrors({ [name]: error });
      } else {
        setErrors({ [name]: null });
      }
    }

    setFormData({ [name]: value });
    const filled = Object.values(formData).every((item) => Boolean(item));
    setIsFormFilled(filled);
  };



  const [ForgotPasswordForm, { isError, isLoading, isSuccess, data }] = useSendForgetPasswordMutation()

  console.log({ isError, isLoading, isSuccess, data })

  const handleForgetPassword = useCallback(async () => {
    const isFormDataValid = Object.values(formData).every((value) => Boolean(value));
    if (!isFormDataValid) return;
    try {
      const response = await ForgotPasswordForm({ email: formData.email }).unwrap();
      toast.success(response?.status)
      setFormData({ email: '' })
    } catch (error) {
      toast.error("Something went wrong\n The email is probably not in our record.");
    }
  }, [formData.email]);



  // const forgetPassword = async () => {
  //   const isFormDataValid = Object.values(email).every((value) => value);
  //   if (!isFormDataValid) return;
  //   try {
  //     const res = await ForgotPasswordForm()
  //     console.log({ res });
  //     if (res?.ok === false || res?.status !== 200) {
  //       toast.error(res?.error);
  //     } else {
  //       toast.success(res.message || "Password Reset Email has been sent to your email");
  //       // router.push("/dashboard/overview");
  //     }
  //   } catch (error) {
  //     // console.log(error);
  //     toast.error(error?.error);
  //   }
  // }


  return (
    <div className="w-full space-y-8">
      <div className="">
        <TextField
          errors={errors}
          handleInput={handleInput}
          // value={value.email}
          name="email"
          fieldLabel="Eamil"
          label="email"
          icon={<HiOutlineMailOpen />}
          value={formData.email}
        />
      </div>
      <div className="space-y-3">
        <div
          onClick={handleForgetPassword}
          className={`${!isFormFilled && "disabled-trade-btn"}  flex p-3  items-center space-x-1 justify-center rounded-full bg-primary cursor-pointer`}>
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
            <>
              <BsEnvelopeAt color="#fff" />
              <p className="text-center text-white">Reset my password</p></>
          )}
        </div>
        <div className="w-full flex space-x-1 justify-center items-center">
          <p className="text-sm text-[#212529] font-normal font-karla">
            Forget it,
          </p>
          <Link href={"/auth/login"} passHref>
            <p className="text-primary text-sm font-normal font-karla">
              send me back
            </p>
          </Link>
          <p className="text-sm text-[#212529] font-normal font-karla">
            to the sign in screen
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
