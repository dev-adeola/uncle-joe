"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import RegistrationStepOne from "./RegistrationFormStepOne";
import RegistrationFormStepTwo from "./RegistrationFormStepTwo";
import { BiUserPlus, BiUserCheck } from "react-icons/bi";
import {
  validateEmail,
  validateName,
  validatePassword,
  validateUsername,
} from "@/utils/validation";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { getUserOnlineAddress } from "@/services";

const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient(121deg, #0ccda3 0%, #3aff4e 96.39%);",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient(121deg, #0ccda3 0%, #3aff4e 96.39%);",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 40,
  height: 40,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  ...(ownerState.active && {
    backgroundColor: "#0ccda3",
    backgroundImage: "linear-gradient(121deg, #0ccda3 0%, #3aff4e 96.39%);",
    boxShadow: "0 2px 6px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage: "linear-gradient(121deg, #0ccda3 0%, #3aff4e 96.39%);",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <BiUserPlus size={25} />,
    2: <BiUserCheck size={25} />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ["User Info", "User Credential"];

export default function RegisterForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState({
    firstname: null,
    lastname: null,
    mobile: null,
    email: null,
    username: null,
    password: null,
    password_confirmation: null,
  });

  const [registrationStep, setRegistrationStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);

  // Handle Input validation
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
    } else if (name === "firstname") {
      error = validateName(value, "First name");
      if (error) {
        setErrors({ ...errors, [name]: error });
      } else {
        setErrors({ ...errors, [name]: null });
      }
    } else if (name === "lastname") {
      error = validateName(value, "Last name");
      if (error) {
        setErrors({ ...errors, [name]: error });
      } else {
        setErrors({ ...errors, [name]: null });
      }
    } else if (name === "username") {
      error = validateUsername(value);
      if (error) {
        setErrors({ ...errors, [name]: error });
      } else {
        setErrors({ ...errors, [name]: null });
      }
    } else if (name === "password") {
      error = validatePassword(value);
      if (error) {
        setErrors({ ...errors, [name]: error });
      } else {
        setErrors({ ...errors, [name]: null });
      }
    } else if (name === "password_confirmation") {
      error = validatePassword(formData.password, value);
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
  const submitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const isFormDataValid = Object.values(formData).every((value) => value);
    if (!isFormDataValid) return;

    const userAgent = navigator.userAgent.toLowerCase();

    const userIp = await getUserOnlineAddress();
    // console.log({ userAgent });
    try {
      const res = await signIn("credentials", {
        ...formData,
        ip: userIp.ipAddress,
        device: userAgent,
        redirect: false,
      });
      // console.log({ res });
      if (res?.ok === false || res?.status !== 200) {
        toast.error(res?.error);
      } else {
        const form = e.target;
        toast.success(res.message || "Register successfully");
        // form.reset();
        // router.push('/auth/success')
        router.push("/dashboard/overview");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.error);
    }

    // authRegistration({ ...formData, device: userAgent })
    //   .then((res) => {
    //     if (res.error) {
    //       toast.error(res.message);
    //     } else {
    //       router.push("/user/profile");
    //       toast.success(res.message);
    //     }
    //   })
    //   .catch((err) => {
    //     toast.error(res.message);
    //   })
    //   .finally(() => {
    //     setFormData({
    //       firstname: "",
    //       lastname: "",
    //       mobile: "",
    //       email: "",
    //       username: "",
    //       password: "",
    //       password_confirmation: "",
    //     });
    //     setIsLoading(false);
    //   });
  };

  // const submitForm = async () => {
  //   setIsLoading(true);
  //   await register()
  //   setIsLoading(false);

  // };

  const handleNext = () => {
    setRegistrationStep((prevStep) => prevStep + 1);
  };
  const handleManualStep = (step) => {
    setRegistrationStep(step);
  };

  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={registrationStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label, step) => (
          <Step
            key={label + step}
            onClick={() => handleManualStep(step)}
            className="p-0 m-0"
          >
            <StepLabel className="p-0 m-0" StepIconComponent={ColorlibStepIcon}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {registrationStep === 0 ? (
          <RegistrationStepOne
            value={formData}
            handleInput={handleInput}
            handleNext={handleNext}
            errors={errors}
          />
        ) : (
          <RegistrationFormStepTwo
            value={formData}
            handleInput={handleInput}
            handleSubmit={submitForm}
            errors={errors}
            isLoading={isLoading}
            isFormFilled={isFormFilled}
          />
        )}
      </div>
    </Stack>
  );
}
