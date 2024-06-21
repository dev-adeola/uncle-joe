"use client";

import Link from "next/link";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Menu,
  MenuItem,
  Stack,
  styled,
} from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FiUser, FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { signOut } from "next-auth/react";
import { useGetUserIdQuery, useGetUsersMutation } from "@/services/apiSlice";
import { toast } from "react-toastify";
import { openSideDrawer } from "@/redux";

const NavbarClient = ({ hiddenMenu = false }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenSidebarDrawer = () => {
    return dispatch(openSideDrawer());
  };

  const signUserOut = async () => {
    try {
      await signOut({ callbackUrl: "auth/login" });
    } catch (error) {
      console.log({ error })
    }
  };

  const { data, error, isError, isSuccess, isFetching, isLoading } =
    useGetUserIdQuery();
  const userId = useMemo(() => {
    return !isFetching && isSuccess ? data?.uuid : "";
  }, [isFetching, isSuccess, data]);

  const [
    getUsers,
    {
      data: userResponse,
      isError: IsError,
      isLoading: IsLoading,
      error: Error,
      isSuccess: IsSuccess,
    },
  ] = useGetUsersMutation();

  const handSendRequest = useCallback(async () => {
    try {
      await getUsers({ uuid: userId }).unwrap();
    } catch (error) {
      console.log({ error });
      toast.error(error?.error || "An error occurred");
    }
  }, [userId]);
  console.log({ userResponse, Error });
  
  useEffect(() => {
    handSendRequest();
  }, [handSendRequest]);

  // User menu
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      id={"primary-search-account-menu"}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className="z-[9000] text-black"
    >
      <MenuItem onClick={handleMenuClose}>
        <Link href={"/dashboard/user/profile"} passHref>
          <div className="flex space-x-6 p-2">
            <span className="text-[#eaeaea]">
              <FiUser size="20" />
            </span>
            <span className="text-lg font-medium text-[#eaeaea] font-karla">
              Profile
            </span>
          </div>
        </Link>
      </MenuItem>
      <MenuItem color="#000" onClick={signUserOut}>
        <div className="flex space-x-6 p-2">
          <span className="text-[#eaeaea]">
            <FiLogOut size="20" />
          </span>
          <span className="text-lg font-medium text-[#eaeaea] font-karla">
            Sign out
          </span>
        </div>
      </MenuItem>
    </Menu>
  );

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#E3394D",
      color: "#E3394D",
    },
  }));

  return (
    <Box className="flex h-full items-center xl:z-[100000000]">
      <Box className="fixed top-0 h-[60px] max-h-[60px] w-full bg-[#0C0E0F] px-4 md:px-10 xl:px-20">
        <div className="flex h-full w-full items-center justify-between">
          {/* Hamburger */}
          {!hiddenMenu && (
            <div
              onClick={handleOpenSidebarDrawer}
              className="mr-1 md:mr-2 cursor-pointer rounded p-2 transition duration-300 hover:bg-secondary active:bg-secondary xl:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[21px] h-[19px] md:w-[24px] md:h-[22px]"
                viewBox="0 0 21 19"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0892 4.26389C7.21689 4.26389 4.34455 4.26442 1.47219 4.26348C0.76621 4.26324 0.190648 3.71914 0.0353971 2.91111C-0.164305 1.8716 0.506782 0.841939 1.39902 0.818977C1.42905 0.818223 1.45911 0.818169 1.48914 0.818169C7.22628 0.818142 12.9635 0.818008 18.7006 0.818304C19.4209 0.818331 19.9929 1.34967 20.1524 2.16427C20.357 3.20871 19.6842 4.2483 18.7851 4.26106C18.0455 4.27156 17.3057 4.26383 16.5661 4.26386C14.4071 4.26394 12.2482 4.26389 10.0892 4.26389Z"
                  fill="#EAEAEA"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.093 7.70954C12.9691 7.70954 15.8452 7.70901 18.7213 7.70995C19.422 7.71019 19.9938 8.24956 20.1519 9.05363C20.3573 10.0984 19.6856 11.1322 18.7868 11.1545C18.7643 11.155 18.7417 11.1552 18.7192 11.1552C12.9708 11.1553 7.22232 11.1555 1.47391 11.155C0.818978 11.1549 0.263851 10.6801 0.0707048 9.96026C-0.230245 8.83867 0.466188 7.71081 1.46472 7.71019C4.34082 7.70836 7.21692 7.70954 10.093 7.70954Z"
                  fill="#EAEAEA"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0995 14.6012C12.9718 14.6012 15.8441 14.6007 18.7165 14.6015C19.4235 14.6017 19.9972 15.1435 20.1533 15.9532C20.3537 16.9926 19.6836 18.0219 18.7907 18.046C18.7607 18.0468 18.7306 18.0469 18.7006 18.0469C12.9634 18.0469 7.22624 18.047 1.4891 18.0467C0.783725 18.0467 0.204762 17.5219 0.044622 16.7404C-0.178263 15.6525 0.499516 14.6052 1.43742 14.6026C3.19461 14.5978 4.9518 14.6012 6.70899 14.6012C7.83914 14.6012 8.96929 14.6012 10.0995 14.6012Z"
                  fill="#EAEAEA"
                />
              </svg>
            </div>
          )}
          {/* Brand Logo */}
          <div className="hidden w-full md:max-w-[150px] lg:max-w-[260px] md:block ">
            {/* LOGO */}
            <Link href="/" passHref>
              <div className="flex max-w-[110px]  flex-col overflow-hidden">
                {/* <img
                  className="h-full w-full object-cover"
                  src="/assets/logo.png"
                /> */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="88"
                  height="31"
                  viewBox="0 0 88 31"
                  fill="none"
                >
                  <path
                    d="M68.0344 23.3339H64.5896V10.3266H62.7383V7.35335H64.5896V6.33142C64.5896 1.73083 65.7712 0.354126 69.0852 0.354126C70.1706 0.354126 72.53 0.674201 72.53 0.674201L72.4992 3.52016C72.4992 3.52016 70.9365 3.45461 69.9473 3.45461C68.4809 3.45461 68.0344 4.15646 68.0344 6.36227V7.35335H72.2451V10.3266H68.0344V23.3339Z"
                    fill="white"
                  />
                  <path
                    d="M76.8387 7.35334L80.2181 20.3607H81.0802L84.4596 7.35334H87.9044L81.8423 30.202H78.4283L80.3412 23.3301H77.5969L73.417 7.34949H76.8387V7.35334Z"
                    fill="white"
                  />
                  <path
                    d="M31.863 19.5626C31.9284 20.5228 32.3402 20.9046 33.2678 21.0318L33.1716 23.685C31.224 23.685 30.1078 23.4305 28.9301 22.5011C28.9301 22.5011 26.3782 23.685 23.7956 23.685C20.6395 23.685 19.0422 21.9265 19.0422 18.6023C19.0422 15.2165 20.8935 14.0635 24.3037 13.7781L28.4182 13.4272V12.278C28.4182 10.5195 27.6522 9.97576 26.0896 9.97576C23.9534 9.97576 20.0929 10.2958 20.0929 10.2958L19.9659 7.8355C19.9659 7.8355 23.4415 7.00254 26.3782 7.00254C30.2695 7.00254 31.863 8.63376 31.863 12.2741V19.5626ZM24.7193 16.2384C23.2529 16.3657 22.5178 17.0714 22.5178 18.5059C22.5178 19.9443 23.122 20.839 24.4653 20.839C26.282 20.839 28.422 20.1372 28.422 20.1372V15.8875L24.7193 16.2384ZM40.4114 10.3267V17.3568C40.4114 19.7554 40.5077 20.5845 42.1665 20.5845C43.0595 20.5845 44.78 20.4881 44.78 20.4881L44.9378 23.2685C44.9378 23.2685 42.8016 23.685 41.6854 23.685C38.079 23.685 36.9628 22.343 36.9628 17.7424V10.3267H34.9229V7.35346H36.9628V2.71816H40.4076V7.35346H44.8108V10.3267H40.4114ZM59.9024 20.3608L59.9678 22.9484C59.9678 22.9484 56.3306 23.685 53.5247 23.685C48.7405 23.685 46.8892 21.1282 46.8892 15.5019C46.8892 9.65183 49.4102 7.00254 53.8096 7.00254C58.2743 7.00254 60.5067 9.33561 60.5067 14.3218L60.2835 16.813H50.3955C50.4263 19.3698 51.3847 20.6462 54.0328 20.6462C56.5538 20.6462 59.9024 20.3608 59.9024 20.3608ZM57.0927 14.129C57.0927 10.9321 56.1343 9.87935 53.8057 9.87935C51.4463 9.87935 50.3917 11.0632 50.3609 14.129H57.0927ZM13.0148 14.7345C15.3434 13.6508 16.5866 11.5067 16.5866 8.40624C16.5866 3.54727 14.0039 1.43787 9.18507 1.43787H0.890625V10.4539C0.917568 10.4038 0.940662 10.3614 0.979151 10.2997C1.01379 10.2766 1.03304 10.265 1.04073 10.2496C2.32628 8.36382 4.02365 7.05267 6.24833 6.47036C6.5524 6.38938 6.64477 6.18114 6.63708 5.89963C6.62938 5.44844 6.63708 4.99725 6.61013 4.54606C6.58319 4.06788 6.741 3.96376 7.19517 4.145C9.30438 4.98568 11.4251 5.80322 13.5382 6.63619C14.181 6.8907 14.1771 6.90227 13.646 7.35732C11.4713 9.21221 9.29284 11.071 7.11434 12.9258C7.03352 12.9953 6.96039 13.1187 6.77949 13.0261C6.76794 12.5788 6.75254 12.1083 6.741 11.6417C6.72175 10.8473 6.65632 10.7856 5.88654 11.0362C4.87812 11.3679 3.90819 11.7882 3.09606 12.4978C2.51487 13.0068 1.97217 13.5544 1.6912 14.2833C1.56419 14.6149 1.43717 14.9427 1.32171 15.2743C0.975302 16.385 0.902172 17.1986 0.890625 17.5997V23.3302H4.43164V15.5366H9.56611L12.7222 23.3341H16.6135L13.0148 14.7345Z"
                    fill="url(#paint0_linear_2132_250)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2132_250"
                      x1="1.87002"
                      y1="-0.255443"
                      x2="55.5211"
                      y2="30.6607"
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

          {/* Other Menu */}
          <div className="h-full w-full">
            <div className="mx-auto flex h-full w-full max-w-[1021px] items-center justify-between lg:justify-between">
              {/* AVATAR */}
              <Box
                aria-label="account of current user"
                aria-controls={"primary-search-account-menu"}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                className="flex cursor-pointer  items-center space-x-4 rounded-md px-2  transition duration-300 hover:bg-secondary/95 active:bg-secondary/95 py-[2px]"
              >
                <div className=" h-[26px] w-[26px] md:h-10 md:w-10">
                  <Avatar
                    src="/assets/avatar.png"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className=" flex flex-col items-start justify-between h-[26px] md:h-10">
                  <p className=" -mt-1 md:mt-0 text-sm font-medium text-[#737373] md:text-[16px] capitalize">
                    {IsSuccess &&
                      `${userResponse?.user?.data?.firstname}  ${userResponse?.user?.data?.lastname}`}
                  </p>
                  <p
                    className={` -mt-[2px] text-[10px] font-medium ${IsSuccess &&
                      userResponse?.user?.data?.authorization?.priviledge ===
                      "activated"
                      ? "text-green-500"
                      : "text-danger"
                      }  md:-mt-0 md:text-xs `}
                  >
                    {IsSuccess &&
                      userResponse?.user?.data?.authorization?.priviledge ===
                      "activated"
                      ? "Verified"
                      : "Unverified"}
                  </p>
                </div>
                {/* </div> */}
              </Box>

              {/* EXPRESS */}
              <Link href="#" passHref>
                <div className="hidden h-[35px] w-[210px] items-center justify-center  rounded-sm bg-secondary hover:opacity-90 active:opacity-90 xl:flex">
                  <p className="text-center font-rubik text-lg font-medium">
                    Switch to Express
                  </p>
                </div>
              </Link>

              {/* Wallet */}
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={{ xs: 1, md: 4 }}
              >
                <Link href={"/wallet-and-banks"} passHref>
                  <Stack
                    divider={
                      <Divider
                        orientation="vertical"
                        color="#737373"
                        className="hidden md:flex"
                      />
                    }
                    className="flex h-[35px] w-fit flex-shrink-0 cursor-pointer items-center space-x-4 border-[1px] border-[#464646]  px-2 md:px-4 py-2"
                    direction={"row"}
                  >
                    <div className="flex items-center md:space-x-4 ">
                      <div className="hidden md:flex ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="29"
                          height="22"
                          viewBox="0 0 29 22"
                          fill="none"
                        >
                          <path
                            d="M24.7682 5.96143H4.90862C3.2634 5.96143 1.92969 7.03296 1.92969 8.35476V17.9281C1.92969 19.2499 3.2634 20.3214 4.90862 20.3214H24.7682C26.4134 20.3214 27.7471 19.2499 27.7471 17.9281V8.35476C27.7471 7.03296 26.4134 5.96143 24.7682 5.96143Z"
                            stroke="#EAEAEA"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M24.4802 5.96148V4.46564C24.4801 4.09877 24.3792 3.73644 24.1847 3.40451C23.9901 3.07259 23.7068 2.77924 23.355 2.5454C23.0031 2.31157 22.5913 2.14301 22.1491 2.05175C21.7068 1.96049 21.2449 1.94878 20.7963 2.01746L4.45185 4.25872C3.74207 4.36739 3.10175 4.67166 2.64131 5.11904C2.18087 5.56643 1.9292 6.12888 1.92969 6.70939V9.15259"
                            stroke="#EAEAEA"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.7886 14.737C21.3958 14.737 21.0119 14.6434 20.6853 14.4681C20.3587 14.2928 20.1042 14.0436 19.9539 13.752C19.8036 13.4605 19.7643 13.1397 19.8409 12.8302C19.9175 12.5207 20.1067 12.2364 20.3844 12.0132C20.6621 11.7901 21.016 11.6381 21.4012 11.5766C21.7864 11.515 22.1857 11.5466 22.5486 11.6674C22.9114 11.7881 23.2216 11.9926 23.4398 12.255C23.658 12.5174 23.7745 12.8259 23.7745 13.1415C23.7745 13.5646 23.5652 13.9705 23.1928 14.2697C22.8204 14.5689 22.3153 14.737 21.7886 14.737Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      <p className="flex items-center  font-rubik text-lg font-medium text-lightGray ">
                        <span className="md:hidden">₦</span>{" "}
                        <span> 1,500,000</span>
                      </p>
                    </div>
                    <div className="hidden md:block">
                      {" "}
                      <p className="font-rubik text-lg font-medium uppercase text-lightGray">
                        ngn
                      </p>
                    </div>
                  </Stack>
                </Link>
                {/* Notification icon */}
                <Box className="flex h-[31px] w-[31px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white p-2 transition duration-300 hover:bg-white/90 active:bg-white/90 md:h-[37px] md:w-[37px]  ">
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    variant="dot"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.4405 10.4052C19.6155 11.2731 20.0183 12.0797 20.6081 12.7431C20.9748 13.2883 21.1872 13.9215 21.2231 14.5763V14.7799C21.2285 15.6635 20.9119 16.5191 20.3318 17.1887C19.5965 17.9749 18.5988 18.469 17.5243 18.5791C14.3497 18.9864 11.1355 18.9864 7.96094 18.5791C6.8738 18.4774 5.86206 17.9826 5.11779 17.1887C4.55582 16.5127 4.26113 15.6563 4.28891 14.7799V14.5763C4.32369 13.9239 4.52955 13.292 4.88606 12.7431C5.47846 12.0791 5.88695 11.2734 6.07145 10.4052C6.09819 10.0687 6.09819 9.72994 6.09819 9.39121C6.09819 9.05247 6.09819 8.71374 6.12493 8.37722C6.46361 5.14486 9.58306 2.91321 12.7025 2.91321H12.7916C15.8754 2.91321 19.0573 5.14486 19.387 8.37722C19.4138 8.70931 19.4138 9.04805 19.4138 9.38789C19.4138 9.72773 19.4138 10.0687 19.4405 10.4052ZM13.9151 19.934C14.4106 19.9486 14.897 20.0694 15.3411 20.2882H15.3679C15.7389 20.5909 15.802 21.1313 15.5105 21.5103C14.9797 22.2699 14.1305 22.7488 13.2021 22.8121C12.2482 22.9259 11.2877 22.6618 10.5283 22.0771C10.1377 21.8093 9.88394 21.3858 9.83309 20.917C9.83309 20.4211 10.2965 20.1908 10.7244 20.0934C11.2254 19.9879 11.7362 19.9344 12.2484 19.934H13.9151Z"
                        fill="#D4D8E2"
                      />
                    </svg>
                  </StyledBadge>
                </Box>
              </Stack>
            </div>
          </div>
        </div>
      </Box>
      {renderMenu}
    </Box>
  );
};
export default NavbarClient;
