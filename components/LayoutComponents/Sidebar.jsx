"use client";

import { setCurrentMarketRate } from "@/redux";
import { closeSideDrawer } from "@/redux/slices/layoutSlice";
import { useFetchMarketRateQuery } from "@/services/apiSlice";
import { formatCurrency } from "@/utils";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

const sidebarWidth = 260;

function Sidebar() {
  const activeSegment = useSelectedLayoutSegment();
  const dispatch = useDispatch();

  const handleCloseSidebarDrawer = () => {
    return dispatch(closeSideDrawer());
  };


  // const currentMarketRate = useSelector(state => state.market.currentMarketRate)

  const { data: currentRateData, isError: isCurrentRateError, isSuccess: isCurrentRateSuccess, isLoading: isCurrentRateLoading } = useFetchMarketRateQuery();
  const marketRate = useMemo(() => {
    if (!isCurrentRateError && !isCurrentRateLoading && isCurrentRateSuccess) {
      dispatch(setCurrentMarketRate(currentRateData.data))
      return currentRateData?.data?.rate_decimal
    }
    return
  }, [isCurrentRateSuccess, isCurrentRateLoading, isCurrentRateError, currentRateData]);



  return (
    <Box
      width={sidebarWidth}
      minWidth={sidebarWidth}
      className="h-full xl:h-[calc(100vh-60px)] py-2 xl:py-4 flex-col justify-between bg-secondary flex"
    >
      {/* NAVIGATION MENU */}
      <Stack spacing={1.25}>
        {/* Logo and Express */}
        <div className="px-3 md:px-4 lg:px-8 mb-2 flex items-center justify-between xl:hidden">
          {/* Brand Logo */}
          <div className=" w-full md:max-w-[150px] lg:max-w-[260px] ">
            {/* LOGO */}
            <Link href="/dashboard/overview" passHref>
              <div className="flex max-w-[110px] flex-col overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="82"
                  height="28"
                  viewBox="0 0 82 28"
                  fill="none"
                >
                  <path
                    d="M63.4796 21.5668H60.2699V9.44713H58.5449V6.67682H60.2699V5.72464C60.2699 1.43802 61.3709 0.155273 64.4586 0.155273C65.47 0.155273 67.6684 0.453504 67.6684 0.453504L67.6397 3.10524C67.6397 3.10524 66.1836 3.04416 65.262 3.04416C63.8956 3.04416 63.4796 3.69811 63.4796 5.75339V6.67682H67.403V9.44713H63.4796V21.5668Z"
                    fill="white"
                  />
                  <path
                    d="M71.6823 6.67693L74.8311 18.7966H75.6344L78.7831 6.67693H81.9928L76.3444 27.9663H73.1634L74.9458 21.5633H72.3888L68.4941 6.67334H71.6823V6.67693Z"
                    fill="white"
                  />
                  <path
                    d="M29.7765 18.0528C29.8375 18.9475 30.2212 19.3032 31.0855 19.4218L30.9959 21.8939C29.1812 21.8939 28.1412 21.6567 27.0438 20.7908C27.0438 20.7908 24.6661 21.8939 22.2598 21.8939C19.319 21.8939 17.8307 20.2554 17.8307 17.1581C17.8307 14.0033 19.5557 12.929 22.7331 12.6631L26.5668 12.3361V11.2654C26.5668 9.62688 25.8532 9.12025 24.3972 9.12025C22.4068 9.12025 18.8098 9.41848 18.8098 9.41848L18.6914 7.12606C18.6914 7.12606 21.9298 6.34994 24.6661 6.34994C28.2918 6.34994 29.7765 7.86984 29.7765 11.2618V18.0528ZM23.1205 14.9555C21.7541 15.0741 21.0691 15.7316 21.0691 17.0683C21.0691 18.4085 21.6322 19.2421 22.8838 19.2421C24.5765 19.2421 26.5704 18.5882 26.5704 18.5882V14.6285L23.1205 14.9555ZM37.7416 9.44723V15.9975C37.7416 18.2325 37.8313 19.005 39.3769 19.005C40.209 19.005 41.812 18.9151 41.812 18.9151L41.959 21.5058C41.959 21.5058 39.9687 21.8939 38.9287 21.8939C35.5683 21.8939 34.5283 20.6434 34.5283 16.3568V9.44723H32.6276V6.67692H34.5283V2.35796H37.738V6.67692H41.8407V9.44723H37.7416ZM55.9024 18.7966L55.9634 21.2076C55.9634 21.2076 52.5744 21.8939 49.96 21.8939C45.5023 21.8939 43.7773 19.5116 43.7773 14.2692C43.7773 8.81843 46.1263 6.34994 50.2254 6.34994C54.3854 6.34994 56.4654 8.52379 56.4654 13.1697L56.2574 15.4909H47.0443C47.073 17.8731 47.966 19.0625 50.4334 19.0625C52.7824 19.0625 55.9024 18.7966 55.9024 18.7966ZM53.2844 12.9901C53.2844 10.0113 52.3915 9.03042 50.2218 9.03042C48.0234 9.03042 47.0408 10.1335 47.0121 12.9901H53.2844ZM12.2147 13.5542C14.3843 12.5445 15.5427 10.5467 15.5427 7.65784C15.5427 3.13049 13.1363 1.16504 8.64634 1.16504H0.917969V9.5658C0.943073 9.51909 0.964591 9.47956 1.00045 9.42207C1.03273 9.40051 1.05066 9.38974 1.05783 9.37536C2.25564 7.61832 3.83718 6.39665 5.91003 5.85409C6.19335 5.77863 6.27942 5.5846 6.27224 5.3223C6.26507 4.9019 6.27224 4.48151 6.24714 4.06111C6.22204 3.61556 6.36907 3.51855 6.79225 3.68742C8.75752 4.47073 10.7335 5.23247 12.7024 6.00859C13.3013 6.24574 13.2977 6.25652 12.8028 6.68051C10.7766 8.40881 8.74676 10.1407 6.71694 11.869C6.64163 11.9337 6.57349 12.0487 6.40494 11.9624C6.39418 11.5456 6.37983 11.1073 6.36907 10.6725C6.35114 9.9323 6.29018 9.87481 5.57293 10.1084C4.63333 10.4174 3.72959 10.809 2.97289 11.4702C2.43137 11.9445 1.92571 12.4547 1.66391 13.1338C1.54556 13.4428 1.42722 13.7482 1.31963 14.0572C0.996867 15.092 0.928728 15.8502 0.917969 16.2239V21.5633H4.21732V14.3016H9.00138L11.9421 21.5669H15.5678L12.2147 13.5542Z"
                    fill="url(#paint0_linear_2144_238)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2144_238"
                      x1="1.83053"
                      y1="-0.412707"
                      x2="51.8201"
                      y2="28.3935"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.00558659" stopColor="#0CCDA3" />
                      <stop offset="0.238" stopColor="#0ECF9F" />
                      <stop offset="0.448" stopColor="#14D694" />
                      <stop offset="0.6494" stopColor="#1EE082" />
                      <stop offset="0.8442" stopColor="#2CEF68" />
                      <stop offset="1" stopColor="#3AFF4E" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="h-[14px] w-[85px] rounded-[5px] bg-[#005E49] ">
                  <p className="text-center font-rubik text-xs font-normal text-white ">
                    Market Place
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div
            onClick={handleCloseSidebarDrawer}
            className="min-w-fit h-[40px] bg-[#0c0e0f] space-x-2 rounded-sm px-2 py-1 justify-between items-center flex"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
              >
                <path
                  d="M2.70703 5.66678H14.8887C15.1348 5.66678 15.3398 5.58344 15.5039 5.41678C15.668 5.25011 15.75 5.04178 15.75 4.79178C15.75 4.514 15.668 4.29178 15.5039 4.12511C15.3398 3.95844 15.1348 3.87511 14.8887 3.87511H2.70703L4.10156 1.75011C4.29297 1.58344 4.375 1.36816 4.34766 1.10428C4.32031 0.840387 4.21094 0.638998 4.01953 0.500109C3.58203 0.166776 3.17188 0.236221 2.78906 0.708443L0 4.79178L2.78906 8.87511C3.25391 9.29177 3.66406 9.31955 4.01953 8.95844C4.45703 8.514 4.48438 8.09733 4.10156 7.70844L2.70703 5.66678ZM16.9805 7.62511C16.5156 8.04177 16.4883 8.45844 16.8984 8.87511L18.293 11.0001H6.11133C5.86523 11.0001 5.66016 11.0834 5.49609 11.2501C5.33203 11.4168 5.25 11.6251 5.25 11.8751C5.25 12.1529 5.33203 12.3751 5.49609 12.5418C5.66016 12.7084 5.86523 12.7918 6.11133 12.7918H18.293L16.8984 14.9168C16.707 15.0834 16.625 15.2987 16.6523 15.5626C16.6797 15.8265 16.7891 16.0279 16.9805 16.1668C17.1445 16.3334 17.3564 16.4029 17.6162 16.3751C17.876 16.3473 18.0742 16.2501 18.2109 16.0834L21 11.8751L18.2109 7.79177C17.8281 7.34733 17.418 7.29177 16.9805 7.62511Z"
                  fill="#EAEAEA"
                />
              </svg>
            </div>
            <div>
              <p className="text-lightGray font-rubik font-medium text-[10px] cursor-pointer ">
                Switch to <br /> Express
              </p>
            </div>
          </div>
        </div>

        {/* Menu / List */}
        <Link href={"/dashboard/overview"} passHref>
          <div
            className={`${activeSegment === "overview" && "active"
              } flex h-[52px] items-center space-x-6 px-3 md:px-4 lg:px-8 py-4 text-white transition duration-300 hover:bg-primary active:bg-primary`}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
              >
                <g clipPath="url(#clip0_2132_245)">
                  <path
                    d="M9.4041 3.02056L13.7541 6.9751V13.8384H12.0141V8.56571H6.7941V13.8384H5.0541V6.9751L9.4041 3.02056ZM9.4041 0.656616L0.704102 8.56571H3.3141V15.596H8.5341V10.3233H10.2741V15.596H15.4941V8.56571H18.1041"
                    fill="#EAEAEA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2132_245">
                    <rect
                      width="18"
                      height="16"
                      fill="white"
                      transform="translate(0.404297 0.202026)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <Typography className=" font-rubik text-[16px] font-normal">
              Overview
            </Typography>
          </div>
        </Link>
        <Link href={"/dashboard/marketplace"} passHref>
          <div
            className={`${activeSegment === "marketplace" && "active"
              } flex h-[52px] items-center space-x-6 px-3 md:px-4 lg:px-8 py-4 text-white transition duration-300 hover:bg-primary active:bg-primary`}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M6.4043 12.202C5.38612 12.202 4.44975 11.9702 3.59521 11.5066C2.74066 11.0429 2.04066 10.4248 1.49521 9.65203V11.1111H0.404297V7.83839H3.67702V8.9293H2.32702C2.76339 9.58385 3.33848 10.1111 4.0523 10.5111C4.76575 10.9111 5.54975 11.1111 6.4043 11.1111C7.08612 11.1111 7.72484 10.9817 8.32048 10.7228C8.91575 10.4635 9.43393 10.1133 9.87502 9.67221C10.3158 9.23148 10.6658 8.7133 10.925 8.11766C11.1839 7.52239 11.3134 6.88384 11.3134 6.20203H12.4043C12.4043 7.0293 12.2476 7.80657 11.9341 8.53384C11.6203 9.26112 11.1907 9.89748 10.6452 10.4429C10.0998 10.9884 9.46339 11.4178 8.73612 11.7313C8.00884 12.0451 7.23157 12.202 6.4043 12.202ZM5.91339 10.0202V9.31112C5.48612 9.21112 5.13848 9.02712 4.87048 8.75912C4.60212 8.49075 4.4043 8.13839 4.27702 7.70203L5.17702 7.34748C5.28612 7.72021 5.45666 7.99966 5.68866 8.18584C5.9203 8.37239 6.18611 8.46566 6.48611 8.46566C6.78612 8.46566 7.04284 8.39512 7.2563 8.25403C7.47012 8.1133 7.57702 7.89294 7.57702 7.59294C7.57702 7.3293 7.46575 7.11566 7.24321 6.95203C7.0203 6.78839 6.62248 6.60203 6.04975 6.39294C5.51339 6.20203 5.1203 5.97475 4.87048 5.71112C4.6203 5.44748 4.49521 5.10203 4.49521 4.67475C4.49521 4.30203 4.62484 3.9633 4.88412 3.65857C5.14302 3.35421 5.49521 3.15657 5.94066 3.06566V2.38384H6.89521V3.06566C7.22248 3.09294 7.5203 3.22475 7.78866 3.46112C8.05666 3.69748 8.24066 3.97475 8.34066 4.29294L7.46793 4.64748C7.39521 4.43839 7.27702 4.26348 7.11339 4.12275C6.94975 3.98166 6.72248 3.91112 6.43157 3.91112C6.11339 3.91112 5.8703 3.9793 5.7023 4.11566C5.53393 4.25203 5.44975 4.43839 5.44975 4.67475C5.44975 4.91112 5.5543 5.09748 5.76339 5.23384C5.97248 5.37021 6.34975 5.5293 6.89521 5.71112C7.54975 5.94748 7.98612 6.22475 8.2043 6.54294C8.42248 6.86112 8.53157 7.21112 8.53157 7.59294C8.53157 7.85657 8.48612 8.08839 8.39521 8.28839C8.3043 8.48839 8.18393 8.65875 8.03412 8.79948C7.88393 8.94057 7.70884 9.05421 7.50884 9.14039C7.30884 9.22694 7.09521 9.29294 6.86793 9.33839V10.0202H5.91339ZM0.404297 6.20203C0.404297 5.37475 0.561206 4.59748 0.875024 3.87021C1.18848 3.14294 1.61793 2.50657 2.16339 1.96112C2.70884 1.41566 3.34521 0.986026 4.07248 0.672208C4.79975 0.358754 5.57702 0.202026 6.4043 0.202026C7.42248 0.202026 8.35884 0.433845 9.21339 0.897481C10.0679 1.36112 10.7679 1.9793 11.3134 2.75203V1.29294H12.4043V4.56566H9.13157V3.47475H10.4816C10.0452 2.82021 9.47012 2.29294 8.7563 1.89294C8.04284 1.49294 7.25884 1.29294 6.4043 1.29294C5.72248 1.29294 5.08393 1.42239 4.48866 1.6813C3.89302 1.94057 3.37484 2.29057 2.93412 2.7313C2.49302 3.17239 2.14284 3.69057 1.88357 4.28584C1.62466 4.88148 1.49521 5.52021 1.49521 6.20203H0.404297Z"
                  fill="white"
                />
              </svg>
            </span>
            <Typography className=" font-rubik text-[16px] font-normal">
              Market Place
            </Typography>
          </div>
        </Link>
        <Link href={"/dashboard/my-offers"} passHref>
          <div
            className={`${activeSegment === "my-offers" && "active"
              } flex h-[52px] items-center space-x-6 px-3 md:px-4 lg:px-8 py-4 text-white transition duration-300 hover:bg-primary active:bg-primary`}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M10.4832 13.202C9.53675 13.202 8.73007 12.9003 8.06319 12.297C7.39586 11.6932 7.06219 10.9631 7.06219 10.1068C7.06219 9.25044 7.39586 8.52038 8.06319 7.9166C8.73007 7.31323 9.53675 7.01155 10.4832 7.01155C11.4297 7.01155 12.2366 7.31323 12.904 7.9166C13.5709 8.52038 13.9043 9.25044 13.9043 10.1068C13.9043 10.9631 13.5709 11.6932 12.904 12.297C12.2366 12.9003 11.4297 13.202 10.4832 13.202ZM11.3898 11.3604C11.4582 11.4223 11.5381 11.4532 11.6293 11.4532C11.7205 11.4532 11.8003 11.4223 11.8688 11.3604C11.9372 11.2985 11.9714 11.2262 11.9714 11.1437C11.9714 11.0612 11.9372 10.9889 11.8688 10.927L10.8253 9.98298V8.55917C10.8253 8.47663 10.7911 8.40441 10.7227 8.3425C10.6543 8.2806 10.5745 8.24965 10.4832 8.24965C10.392 8.24965 10.3122 8.2806 10.2438 8.3425C10.1753 8.40441 10.1411 8.47663 10.1411 8.55917V9.9675C10.1411 10.05 10.1582 10.1301 10.1925 10.2077C10.2267 10.2849 10.278 10.3544 10.3464 10.4163L11.3898 11.3604ZM2.27272 12.583C1.8964 12.583 1.57414 12.4619 1.30593 12.2196C1.03817 11.9769 0.904297 11.6854 0.904297 11.3449V2.67822C0.904297 2.33774 1.03817 2.04617 1.30593 1.8035C1.57414 1.56125 1.8964 1.44012 2.27272 1.44012H5.1293C5.25474 1.07901 5.49991 0.78228 5.86482 0.549931C6.22974 0.317995 6.62886 0.202026 7.06219 0.202026C7.51833 0.202026 7.92612 0.317995 8.28556 0.549931C8.64454 0.78228 8.88675 1.07901 9.01219 1.44012H11.8517C12.228 1.44012 12.5502 1.56125 12.8185 1.8035C13.0862 2.04617 13.2201 2.33774 13.2201 2.67822V6.54726C13.0148 6.41314 12.7982 6.29965 12.5701 6.20679C12.342 6.11393 12.1025 6.03139 11.8517 5.95917V2.67822H10.4832V3.29726C10.4832 3.63774 10.3494 3.92911 10.0816 4.17136C9.8134 4.41403 9.49114 4.53536 9.11482 4.53536H5.00956C4.63324 4.53536 4.31121 4.41403 4.04345 4.17136C3.77524 3.92911 3.64114 3.63774 3.64114 3.29726V2.67822H2.27272V11.3449H5.89903C5.97886 11.5719 6.07009 11.7885 6.17272 11.9949C6.27535 12.2012 6.40079 12.3973 6.54903 12.583H2.27272ZM7.06219 2.67822C7.25605 2.67822 7.41867 2.61879 7.55003 2.49993C7.68095 2.38149 7.7464 2.23457 7.7464 2.05917C7.7464 1.88377 7.68095 1.73665 7.55003 1.61779C7.41867 1.49934 7.25605 1.44012 7.06219 1.44012C6.86833 1.44012 6.70595 1.49934 6.57503 1.61779C6.44367 1.73665 6.37798 1.88377 6.37798 2.05917C6.37798 2.23457 6.44367 2.38149 6.57503 2.49993C6.70595 2.61879 6.86833 2.67822 7.06219 2.67822Z"
                  fill="white"
                />
              </svg>
            </span>
            <Typography className=" font-rubik text-[16px] font-normal">
              My Offers
            </Typography>
          </div>
        </Link>
        <Link href={"/dashboard/transaction"} passHref>
          <div
            className={`${activeSegment === "transactions" && "active"
              } flex h-[52px] items-center space-x-6 px-3 md:px-4 lg:px-8 py-4 text-white transition duration-300 hover:bg-primary active:bg-primary`}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7.4043 13.202C5.74319 13.202 4.29561 12.6512 3.06157 11.5496C1.82754 10.448 1.12048 9.07284 0.940408 7.42425H2.42096C2.58948 8.6761 3.14632 9.71128 4.09146 10.5298C5.03661 11.3483 6.14089 11.7576 7.4043 11.7576C8.81263 11.7576 10.0074 11.267 10.9887 10.2857C11.9699 9.30443 12.4603 8.10988 12.4599 6.70203C12.4599 5.29369 11.9692 4.0989 10.988 3.11764C10.0067 2.13638 8.81215 1.64599 7.4043 1.64647C6.57374 1.64647 5.79735 1.83906 5.07513 2.22425C4.35291 2.60943 3.74504 3.13906 3.25152 3.81314H5.23763V5.25758H0.904297V0.924249H2.34874V2.62147C2.96263 1.8511 3.71206 1.25527 4.59702 0.833971C5.48198 0.412675 6.41774 0.202026 7.4043 0.202026C8.30707 0.202026 9.1528 0.373675 9.94146 0.716971C10.7301 1.06027 11.4162 1.52345 11.9998 2.10653C12.5834 2.69056 13.0468 3.37667 13.3901 4.16486C13.7334 4.95304 13.9048 5.79877 13.9043 6.70203C13.9043 7.6048 13.7326 8.45053 13.3894 9.23919C13.0461 10.0279 12.5829 10.714 11.9998 11.2975C11.4158 11.8811 10.7296 12.3445 9.94146 12.6878C9.15328 13.0311 8.30756 13.2025 7.4043 13.202ZM9.42652 9.73536L6.68207 6.99091V3.09091H8.12652V6.41314L10.4376 8.72425L9.42652 9.73536Z"
                  fill="#EAEAEA"
                />
              </svg>
            </span>
            <Typography className=" font-rubik text-[16px] font-normal">
              Transactions
            </Typography>
          </div>
        </Link>
        <Link href={"/dashboard/wallet-and-banks"} passHref>
          <div
            className={`${activeSegment === "wallet-and-banks" && "active"
              } flex h-[52px] items-center space-x-6 px-3 md:px-4 lg:px-8 py-4 text-white transition duration-300 hover:bg-primary active:bg-primary`}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4.45693 6.95203H2.87798V12.202H4.45693V6.95203ZM9.19377 6.95203H7.61482V12.202H9.19377V6.95203ZM15.9043 13.702H0.904297V15.202H15.9043V13.702ZM13.9306 6.95203H12.3517V12.202H13.9306V6.95203ZM8.4043 1.89703L12.5175 3.95203H4.29114L8.4043 1.89703ZM8.4043 0.202026L0.904297 3.95203V5.45203H15.9043V3.95203L8.4043 0.202026Z"
                  fill="white"
                />
              </svg>
            </span>
            <Typography className=" font-rubik text-[16px] font-normal">
              Wallet and Banks
            </Typography>
          </div>
        </Link>
        <Link href={"/dashboard/user/profile"} passHref>
          <div
            className={`${activeSegment === "user" && "active"
              } flex h-[52px] items-center space-x-6 px-3 md:px-4 lg:px-8 py-4 text-white transition duration-300 hover:bg-primary active:bg-primary`}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
              >
                <path
                  d="M8.40576 8.4544C10.2873 8.4544 11.8125 6.95198 11.8125 5.09866C11.8125 3.24534 10.2873 1.74292 8.40576 1.74292C6.52427 1.74292 4.99902 3.24534 4.99902 5.09866C4.99902 6.95198 6.52427 8.4544 8.40576 8.4544Z"
                  stroke="#EAEAEA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.2178 16.8438V15.1659C15.2178 14.2759 14.8588 13.4224 14.22 12.7931C13.5811 12.1637 12.7146 11.8102 11.811 11.8102H4.99756C4.09404 11.8102 3.22752 12.1637 2.58863 12.7931C1.94974 13.4224 1.59082 14.2759 1.59082 15.1659V16.8438"
                  stroke="#EAEAEA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <Typography className=" font-rubik text-[16px] font-normal">
              Profile
            </Typography>
          </div>
        </Link>
        <Link href={"#"} passHref>
          <div
            className={`${activeSegment === "dashboard/partnership" && "active"
              } flex h-[52px] items-center space-x-6 px-3 md:px-4 lg:px-8 py-4 text-white transition duration-300 hover:bg-primary active:bg-primary`}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.6543 2.70235C2.58799 2.70235 2.5244 2.72869 2.47752 2.77558C2.43064 2.82247 2.4043 2.88607 2.4043 2.95238V10.4533C2.4043 10.5914 2.5163 10.7034 2.6543 10.7034H4.6543C4.85321 10.7034 5.04397 10.7824 5.18463 10.9231C5.32528 11.0637 5.4043 11.2545 5.4043 11.4535V13.6437L8.1243 10.9234C8.19384 10.8537 8.27645 10.7984 8.36739 10.7606C8.45834 10.7229 8.55583 10.7034 8.6543 10.7034H13.1543C13.2206 10.7034 13.2842 10.677 13.3311 10.6301C13.378 10.5832 13.4043 10.5196 13.4043 10.4533V7.95302C13.4043 7.75408 13.4833 7.56329 13.624 7.42262C13.7646 7.28195 13.9554 7.20292 14.1543 7.20292C14.3532 7.20292 14.544 7.28195 14.6846 7.42262C14.8253 7.56329 14.9043 7.75408 14.9043 7.95302V10.4533C14.9043 10.9175 14.7199 11.3627 14.3917 11.6909C14.0635 12.0192 13.6184 12.2036 13.1543 12.2036H8.9643L6.3913 14.7769C6.18735 14.9801 5.92782 15.1184 5.64541 15.1743C5.36301 15.2302 5.07038 15.2012 4.80441 15.0911C4.53844 14.9809 4.31103 14.7944 4.15084 14.5552C3.99066 14.316 3.90487 14.0347 3.9043 13.7468V12.2036H2.6543C2.19017 12.2036 1.74505 12.0192 1.41686 11.6909C1.08867 11.3627 0.904297 10.9175 0.904297 10.4533V2.95238C0.904297 1.98625 1.6883 1.20215 2.6543 1.20215H8.1543C8.35321 1.20215 8.54397 1.28118 8.68463 1.42185C8.82528 1.56252 8.9043 1.75331 8.9043 1.95225C8.9043 2.15119 8.82528 2.34198 8.68463 2.48265C8.54397 2.62332 8.35321 2.70235 8.1543 2.70235H2.6543ZM15.9043 0.452059V4.59859C15.9044 4.64811 15.8898 4.69653 15.8623 4.73773C15.8348 4.77893 15.7958 4.81105 15.75 4.83001C15.7043 4.84897 15.654 4.85392 15.6054 4.84424C15.5568 4.83455 15.5123 4.81067 15.4773 4.77561L13.9343 3.23241L10.1843 6.98289C10.0926 7.08163 9.97602 7.15381 9.84677 7.19183C9.71752 7.22985 9.58042 7.2323 9.44989 7.19892C9.31937 7.16554 9.20026 7.09757 9.10512 7.00218C9.00998 6.90678 8.94233 6.78748 8.9093 6.65685C8.87588 6.52646 8.87821 6.38947 8.91605 6.26029C8.95388 6.13111 9.02582 6.01451 9.1243 5.92276L12.8743 2.17228L11.3313 0.629081C11.2962 0.594112 11.2724 0.549521 11.2627 0.50096C11.253 0.4524 11.2579 0.402057 11.2769 0.356315C11.2959 0.310572 11.328 0.27149 11.3692 0.244022C11.4104 0.216554 11.4588 0.201938 11.5083 0.202027H15.6543C15.7206 0.202027 15.7842 0.228369 15.8311 0.275259C15.878 0.32215 15.9043 0.385746 15.9043 0.452059Z"
                  fill="#EAEAEA"
                />
              </svg>
            </span>
            <Typography className=" font-rubik text-[16px] font-normal">
              Become a Partner
            </Typography>
          </div>
        </Link>
      </Stack>

      {/* EXCHANGE RATE */}
      <Box className="flex-col space-y-4 px-3 md:px-4 lg:px-8 py-4">
        <Divider color="#000" />
        <Box className="flex-col items-start justify-start ">
          <div className="w-full rounded-lg  py-2">
            <p className="text-center font-karla text-[14px] font-semibold text-primary">
              Estimated Exchange Rate
            </p>
          </div>
          <div className="flex h-fit items-center justify-center space-x-2   font-bold text-white  ">
            <div className="h-auto ">
              <p className="font-karla text-[30px]">
                {marketRate ? formatCurrency(marketRate) : '---'}
              </p>
            </div>
            <div className="h-auto">
              <sup className="font-karla text-[16px] font-bold tracking-widest">
                {" "}
                #/$
              </sup>
            </div>
          </div>
        </Box>
        <Divider color="#000" />
      </Box>

      <Box>
        {/* SIDEBAR FOOTER */}
        <Stack direction={"column"} gap={2} className="px-8">
          <Stack
            divider={
              <Divider
                orientation="vertical"
                color="#AFB5C0"
                className="h-[25px]"
              />
            }
            flexWrap="wrap"
            direction={"row"}
            className="flex items-center"
            gap={1}
            justifyContent={"center"}
          >
            <Link href={"#"} passHref>
              <p className="font-rubik text-sm font-normal text-[#AFB5C0]">
                Blog{" "}
              </p>
            </Link>
            <Link href={"#"} passHref>
              <p className="font-rubik text-sm font-normal text-[#AFB5C0]">
                About{" "}
              </p>
            </Link>
            <Link href={"#"} passHref>
              <p className="font-rubik text-sm font-normal text-[#AFB5C0]">
                Fees{" "}
              </p>
            </Link>
            <Link href={"#"} passHref>
              <p className="font-rubik text-sm font-normal text-[#AFB5C0]">
                Terms and Condition{" "}
              </p>
            </Link>
          </Stack>
        </Stack>

        {/* SOCIAL MEDIA ICONS */}
        <Box>
          <Box className="flex h-[43px] mt-3 md:mt-4 w-full items-center justify-center gap-4 bg-[#30383D] py-2">
            <div className="flex h-[27px] w-[27px] md:h-[38px] md:w-[38px] items-center justify-center rounded-full bg-primary shadow-lg">
              <img
                src="/assets/icons/facebook.png"
                alt="facebook socia media"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex h-[27px] w-[27px] md:h-[38px] md:w-[38px] items-center justify-center rounded-full bg-primary shadow-lg">
              <img
                src="/assets/icons/twitter.png"
                alt="twitter socia media"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex h-[27px] w-[27px] md:h-[38px] md:w-[38px] items-center justify-center rounded-full bg-primary shadow-lg">
              <img
                src="/assets/icons/instagram.png"
                alt="instagram socia media"
                className="w-full h-full rounded-full"
              />
            </div>
          </Box>

          {/* COPYRIGHT */}
          <Box className="mx-auto w-full py-2">
            <p className="text-center font-karla text-[16px] font-normal text-[#AFB5C0]">
              Ratefy © 2024
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
