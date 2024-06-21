"use client";
import { CalculatePage, Navbar } from "@/components";
import { Box } from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";

function page() {
  const param = useParams();
  console.log({ param });
  return (
    <div className="flex h-screen w-full overflow-hidden ">
      <Navbar hiddenMenu={true} />
      <div className="flex flex-1 w-full items-start overflow-hidden pt-[60px]">
        <Box
          width={"260px"}
          minWidth={"260px"}
          className=" px-4 md:px-10 xl:px-20 h-full xl:h-[calc(100vh-60px)] py-2 xl:py-4 hidden lg:flex-col lg:flex"
        >
          <Link href={"/marketplace"} passHref>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="40"
              viewBox="0 0 48 40"
              fill="none"
            >
              <path
                d="M2.0957 20H46.0957M19.2068 38L2.0957 20L19.2068 38ZM2.0957 20L19.2068 2L2.0957 20Z"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </Box>
        <div className={`xl:w-[calc(100%-260px)] w-full   h-full bg-bgColor `}>
          <div className="w-full h-full  overflow-y-auto px-4 pt-4 md:px-10 xl:px-12">
            <div className=" mx-auto  w-full max-w-[1021px] ">
              <CalculatePage offerId={param?.offerId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
