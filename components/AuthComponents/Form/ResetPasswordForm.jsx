"use client";

import React, { useCallback, useState } from "react";
import PasswordField from "../TextField/PasswordField";
import Link from "next/link";
import { BsEnvelopeAt, BsSend } from "react-icons/bs";
import { validatePassword } from "@/utils/validation";
import { useSendResetPasswordMutation } from "@/services/apiSlice";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";



function ResetPasswordForm({ token, email }) {
  const [formData, setFormData] = useState({
    password: "",
    password_confirmation: ""
  });


  const router = useRouter()

  const [isFormFilled, setIsFormFilled] = useState(false);
  const [errors, setErrors] = useState({
    password: null,
    password_confirmation: null
  });


  const handleInput = (e) => {
    const { name, value } = e.target;
    let error = null;

    if (name === "password") {
      error = validatePassword(value);
      if (error) {
        setErrors({ [name]: error });
      } else {
        setErrors({ [name]: null });
      }
    }
    else if (name === "password_confirmation") {
      error = validatePassword(formData.password, value);
      if (error) {
        setErrors({ [name]: error });
      } else {
        setErrors({ [name]: null });
      }
    }

    else {
      setErrors({ ...errors, [name]: null });
    }

    console.log({ name, value })
    setFormData({ ...formData, [name]: value });
    const filled = Object.values(formData).every((item) => Boolean(item));
    setIsFormFilled(filled);
  };

  const [ResetPasswordForm, { isLoading }] = useSendResetPasswordMutation()

  const handleResetPassword = useCallback(async () => {
    const isFormDataValid = Object.values(formData).every((value) => Boolean(value));
    if (!isFormDataValid) return;
    try {
      const response = await ResetPasswordForm({ email, token, password: formData.password, password_confirmation: formData.password_confirmation }).unwrap();
      toast.success(response.status)
      setFormData({ password: '', password_confirmation: '' })
      router.push('/auth/login')
    } catch (error) {
      toast.error("Something went wrong");
    }
  }, [formData]);


  return (
    <div className="w-full space-y-8">
      <div className="space-y-4">
        <PasswordField
          errors={errors}
          handleInput={handleInput}
          value={formData.password}
          name="password"
        />
        <PasswordField
          errors={errors}
          handleInput={handleInput}
          value={formData.password_confirmation}
          name="password_confirmation"
          fieldLabel="Confirm Password"
        />
      </div>
      <div className="space-y-3">
        <div
          onClick={handleResetPassword}
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
              <p className="text-center text-white">Reset Password</p></>
          )}
        </div>

        <div className="w-full flex space-x-1 justify-center items-center">
          <p className="text-sm text-[#212529] font-normal font-karla">
            Back to
          </p>
          <Link href={"/auth/login"} passHref>
            <p className="text-primary flex items-center space-x-2">
              login <BsSend />?
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
