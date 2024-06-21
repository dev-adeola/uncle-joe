"use client";

import { WalletAndBankPage } from "@/components";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useGetUserIdQuery, useGetUsersMutation } from "@/services/apiSlice";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo } from "react";

const page = () => {
  const router = useRouter();
  const { data, error, isError, isSuccess, isFetching, isLoading } =
    useGetUserIdQuery();
  // const userId = !isFetching && isSuccess ? data?.uuid : "";
  const userId = useMemo(() => {
    return !isFetching && isSuccess ? data?.uuid : "";
  }, [isFetching, isSuccess, data]);
  console.log({ userId });

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
  console.log({ data, error, IsLoading });

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
  // useEffect(() => {
  //   if (
  //     IsSuccess &&
  //     userResponse?.user?.data?.authorization?.wallet === "false"
  //   ) {
  //     router.push("/dashboard/create-wallet");
  //   }
  // }, [userResponse, IsSuccess]);

  if (isFetching) {
    <LoadingSpinner />;
  }
  return (
    <div className="mx-auto">
      <WalletAndBankPage userId={userId} />
    </div>
  );
};

export default page;
