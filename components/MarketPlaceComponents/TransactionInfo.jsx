import Box from "@mui/material/Box";
import { Avatar, Divider, Stack } from "@mui/material";
import Naira from "../CalculateComponents/Naira";
import React, { useState, useEffect } from "react";

// function CountdownTimer({ initialTime }) {
//   const [timeLeft, setTimeLeft] = useState(initialTime);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime <= 0) {
//           clearInterval(timer); // Stop the timer when it reaches 0
//           // You can add additional actions here when the countdown reaches 0
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     // Clean up the timer when component unmounts
//     return () => clearInterval(timer);
//   }, [initialTime]);

//   // Convert remaining seconds to minutes and seconds
//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   // Format the time to display with leading zeros
//   const formattedTime = `${minutes < 10 ? "0" : ""}${minutes}:${
//     seconds < 10 ? "0" : ""
//   }${seconds}`;

//   return (
//     <div>
//       <h1 className="text-3xl mb-4">Countdown Timer</h1>
//       <div className="text-5xl text-red-600">
//         <span className="animate-bounce">{formattedTime}</span>
//       </div>
//     </div>
//   );
// }

// function CountdownTimer({ initialTime }) {
//   const [totalSeconds, setTotalSeconds] = useState(initialTime * 60); // Convert minutes to seconds

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTotalSeconds((prevTime) => {
//         if (prevTime <= 0) {
//           clearInterval(timer); // Stop the timer when it reaches 0
//           // You can add additional actions here when the countdown reaches 0
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     // Clean up the timer when component unmounts
//     return () => clearInterval(timer);
//   }, [initialTime]);

//   // Convert total seconds to minutes and seconds
//   const minutes = Math.floor(totalSeconds / 60);
//   const seconds = totalSeconds % 60;

//   // Format the time to display with leading zeros
//   const formattedTime = `${minutes < 10 ? "0" : ""}${minutes}:${
//     seconds < 10 ? "0" : ""
//   }${seconds}`;

//   return (
//     <div>
//       <h1 className="text-3xl mb-4">Countdown Timer</h1>
//       <div className="text-5xl text-red-600">
//         <span className="animate-bounce">{formattedTime}</span>
//       </div>
//     </div>
//   );
// }

// function CountdownTimer({ initialTime }) {
//   const [totalSeconds, setTotalSeconds] = useState(initialTime * 60); // Convert minutes to seconds

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTotalSeconds((prevTime) => {
//         if (prevTime <= 0) {
//           clearInterval(timer); // Stop the timer when it reaches 0
//           // You can add additional actions here when the countdown reaches 0
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     // Clean up the timer when component unmounts
//     return () => clearInterval(timer);
//   }, [initialTime]);

//   // Convert total seconds to hours, minutes, and seconds
//   const hours = Math.floor(totalSeconds / 3600);
//   const remainingSeconds = totalSeconds % 3600;
//   const minutes = Math.floor(remainingSeconds / 60);
//   const seconds = remainingSeconds % 60;

//   // Format the time to display with leading zeros
//   const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
//     minutes < 10 ? "0" : ""
//   }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

//   return (
//     <div>
//       <h1 className="text-3xl mb-4">Countdown Timer</h1>
//       <div className="text-5xl text-red-600">
//         <span className="animate-bounce">{formattedTime}</span>
//       </div>
//     </div>
//   );
// }

function CountdownTimer({ initialTime }) {
  const [totalSeconds, setTotalSeconds] = useState(initialTime * 60); // Convert minutes to seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer); // Stop the timer when it reaches 0
          // You can add additional actions here when the countdown reaches 0
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Clean up the timer when component unmounts
    return () => clearInterval(timer);
  }, [initialTime]);

  // Convert total seconds to hours, minutes, and seconds
  const hours = Math.floor(totalSeconds / 3600);
  const remainingSeconds = totalSeconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  // Format the time to display with leading zeros
  const formattedHours = `${hours < 10 ? "0" : ""}${hours}`;
  const formattedMinutes = `${minutes < 10 ? "0" : ""}${minutes}`;
  const formattedSeconds = `${seconds < 10 ? "0" : ""}${seconds}`;

  return (
    <div className="text-center bg-[#1C2124] py-2">
      <div className="flex items-center space-x-1 justify-center">
        <div className="inline-block  bg-red-500 rounded-xl p-2">
          <span className="md:text-4xl text-base font-bold">
            {formattedHours}
          </span>
        </div>
        <span className="md:text-4xl text-base font-bold">:</span>
        <div className="inline-block  bg-red-500 rounded-xl p-2">
          <span className="text-4xl font-bold">{formattedMinutes}</span>
        </div>
        <span className="md:text-4xl text-base font-bold">:</span>
        <div className="inline-block  bg-red-500 rounded-xl p-2">
          <span className="text-4xl font-bold">{formattedSeconds}</span>
        </div>
      </div>
    </div>
  );
}

export default function MarketPlaceTransactionInfo({ data, formDetails }) {
  return (
    <Box className=" w-full">
      <Box className=" flex w-full items-center justify-start space-x-4 bg-[#1C2124] px-4 py-2 md:space-x-6 xl:space-x-8 md:px-6 xl:px-8 md:py-4">
        <Avatar className="h-[31px] w-[31px]" />
        <div className="flex flex-col space-y-1 md:space-y-2">
          <p className="font-karla text-xs font-medium text-white md:text-[16px]">
            {formDetails?.user}
          </p>
          <div className="flex space-x-4 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col md:space-y-1">
              <p className="lg:text-[#a6a6a6 font-rubik text-[10px] font-medium text-white md:text-[12px] md:font-bold">
                136
              </p>
              <p className="font-karla text-[10px] font-normal text-[#A6A6A6] md:text-[12px]">
                Orders
              </p>
            </div>
            <div className="flex flex-col md:space-y-1">
              <p className="lg:text-[#a6a6a6 font-rubik text-[10px] font-medium text-white md:text-[12px] md:font-bold">
                100%
              </p>
              <p className="font-karla text-[10px] font-normal text-[#A6A6A6] md:text-[12px]">
                Completion
              </p>
            </div>
            <div className="flex flex-col md:space-y-1">
              <p className="lg:text-[#a6a6a6 font-rubik text-[10px] font-medium text-white md:text-[12px] md:font-bold">
                90%
              </p>
              <p className="font-karla text-[10px] font-normal text-[#A6A6A6] md:text-[12px]">
                Positive
              </p>
            </div>
          </div>
        </div>
      </Box>
      <Stack
        direction={"column"}
        divider={<Divider color="#2D2D2D" orientation="horizontal" flexItem />}
        className="flex flex-col items-end bg-[#181C1F] px-4 py-2 md:px-8 md:py-4"
      >
        <div className="w-full h-auto flex items-start">
          <p className="font-karla text-sm font-normal  text-white md:text-[16px]">
            Transaction Details
          </p>
        </div>
        <div className="flex flex-col items-end justify-center space-y-1 py-2 md:space-y-2 md:py-3">
          <p className="font-karla text-xs font-normal text-[#9F9F9F] md:text-sm">
            Exchange rate
          </p>
          <p className="text-right font-karla text-[16px] font-semibold text-lightGray">
            <Naira value={formDetails?.rateData} />
          </p>
        </div>
        <div className="flex flex-col items-end justify-center space-y-1 py-2 md:space-y-2 md:py-3">
          <p className="font-karla text-xs font-normal text-[#9F9F9F] md:text-sm">
            E-wallet options
          </p>
          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/payoneer.png"
              alt="payment method "
              className="h-[16px] w-[16px] rounded-full md:h-[18px] md:w-[18px]"
            />
            <p className="text-right font-karla text-sm font-semibold text-lightGray md:text-[16px]">
              {data?.response?.data?.ewallet?.ewallet_name}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center space-y-1 py-2 md:space-y-2 md:py-3">
          <p className="font-karla text-xs font-normal text-[#9F9F9F] md:text-sm">
            Payment option
          </p>
          <p className="text-right font-karla text-sm font-medium text-lightGray md:text-[16px]">
            {data?.response?.data?.paymentoption?.option}
          </p>
        </div>
        <div className="flex flex-col items-end justify-center space-y-1 py-2 md:space-y-2 md:py-3">
          <p className="font-karla text-xs font-normal text-[#9F9F9F] md:text-sm">
            Amount to send
          </p>
          <p className="text-right font-karla text-sm font-medium text-lightGray md:text-[16px]">
            ${formDetails?.amount}
          </p>
        </div>
        <div className="flex flex-col items-end justify-center space-y-1 py-2 md:space-y-2 md:py-3">
          <p className="font-karla text-xs font-normal text-[#9F9F9F] md:text-sm">
            Amount to receive
          </p>
          <p className="text-right font-karla text-sm font-medium text-lightGray md:text-[16px]">
            <Naira value={formDetails?.amountToRecive} />
          </p>
        </div>{" "}
        <div className="w-full flex items-start py-3 space-x-2 px-4">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M9 1.0625C7.44248 1.0625 5.91992 1.4987 4.62489 2.31594C3.32985 3.13319 2.32049 4.29477 1.72445 5.65379C1.12841 7.01282 0.972461 8.50825 1.27632 9.95098C1.58018 11.3937 2.3302 12.719 3.43154 13.7591C4.53288 14.7993 5.93607 15.5076 7.46367 15.7946C8.99127 16.0816 10.5747 15.9343 12.0136 15.3714C13.4526 14.8084 14.6825 13.8551 15.5478 12.6321C16.4131 11.409 16.875 9.971 16.875 8.5C16.875 6.52745 16.0453 4.63569 14.5685 3.24089C13.0916 1.84609 11.0886 1.0625 9 1.0625ZM9 14.875C7.66498 14.875 6.35994 14.5011 5.2499 13.8006C4.13987 13.1001 3.27471 12.1045 2.76382 10.9396C2.25293 9.77473 2.11925 8.49293 2.3797 7.2563C2.64015 6.01967 3.28303 4.88375 4.22703 3.99219C5.17104 3.10063 6.37377 2.49347 7.68314 2.24749C8.99252 2.00151 10.3497 2.12776 11.5831 2.61027C12.8165 3.09278 13.8707 3.90988 14.6124 4.95824C15.3541 6.0066 15.75 7.23914 15.75 8.5C15.75 10.1908 15.0388 11.8123 13.773 13.0078C12.5071 14.2034 10.7902 14.875 9 14.875Z"
                fill="#FCD535"
              />
              <path
                d="M8.4375 4.25H9.5625V10.0938H8.4375V4.25ZM9 11.6875C8.83312 11.6875 8.66999 11.7342 8.53124 11.8218C8.39248 11.9094 8.28434 12.0338 8.22048 12.1794C8.15662 12.325 8.13991 12.4853 8.17246 12.6398C8.20502 12.7944 8.28538 12.9364 8.40338 13.0479C8.52138 13.1593 8.67172 13.2352 8.83539 13.2659C8.99906 13.2967 9.16871 13.2809 9.32289 13.2206C9.47706 13.1603 9.60884 13.0581 9.70155 12.9271C9.79427 12.796 9.84375 12.642 9.84375 12.4844C9.84375 12.273 9.75486 12.0703 9.59662 11.9209C9.43839 11.7715 9.22378 11.6875 9 11.6875Z"
                fill="#FCD535"
              />
            </svg>
          </p>
          <p className="text-sm font-normal text-left font-karla text-[#FCD035]">
            Kindly wait while Merchant001 review and take action on your request
            before the time elapsed
          </p>
        </div>
      </Stack>
      <CountdownTimer initialTime={data?.response?.data?.duration} />
    </Box>
  );
}
