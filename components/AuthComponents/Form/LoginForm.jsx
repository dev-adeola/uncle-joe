"use client";

import React, { useState } from "react";
import PasswordField from "../TextField/PasswordField";
import TextField from "../TextField/TextField";
import Link from "next/link";
import { validateEmail } from "@/utils/validation";
import { HiOutlineMailOpen } from "react-icons/hi";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);

  //
  const handleInput = (e) => {
    const { name, value } = e.target;
    let error = null;

    if (name === "email") {
      error = validateEmail(value);
      if (error) {
        setErrors({ ...errors, [name]: error });
      } else {
        setErrors({ ...errors, [name]: null });
      }
    }

    setFormData({ ...formData, [name]: value });
    const filled = Object.values(formData).every((item) => Boolean(item));
    setIsFormFilled(filled);
  };

  /**
   * Regsiter new user
   *
   * @returns
   */
  const submitForm = async () => {
    setIsLoading(true);
    const isFormDataValid = Object.values(formData).every((value) => value);
    if (!isFormDataValid) return;
    try {
      const res = await signIn("credentials", {
        ...formData,
        endpoints: "login",
        redirect: false,
      });
      console.log({ res });
      if (res?.ok === false || res?.status !== 200) {
        toast.error(res?.error);
      } else {
        toast.success(res.message || "Login successfully");
        // form.reset();
        router.push("/dashboard/overview");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.error);
    }

    // loginUser({ ...formData })
    //   .then((res) => {
    //     if (res.error) {
    //       toast.error(res.message)
    //     }
    //     else {
    //       router.push('/overview')
    //       toast.success(res.message)
    //     }
    //   })
    //   .catch((err) => {
    //     toast.error(res.message)
    //   })
    //   .finally(() => {
    //     setFormData({
    //       email: "",
    //       password: "",
    //     });
    //     setIsLoading(false);
    //   });
  };

  return (
    <div className="w-full space-y-8">
      <div className="space-y-4">
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
        <PasswordField
          handleInput={handleInput}
          name="password"
          value={formData.password}
        />
        <div className="flex w-full items-center font-bold space-x-2">
          <p className="text-[#212529] text-sm font-karla font-normal">
            Forgot Password?
          </p>
          <Link href={"/auth/forgot-password"} passHref>
            <p className="text-primary text-sm font-normal font-karla">
              Click here
            </p>
          </Link>
        </div>
      </div>
      <div className="space-y-3">
        <div
          onClick={submitForm}
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
            <p className="text-center font-medium text-white">Login</p>
          )}
        </div>
        <div className="w-full flex space-x-1 justify-center items-center">
          <p className="text-sm text-[#212529] font-normal font-karla">
            Don't have an account?
          </p>
          <Link href={"/auth/register"} passHref>
            <p className="text-primary text-sm font-normal font-karla">
              Sign Up
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
