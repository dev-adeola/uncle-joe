"use client";
import CreateWallet from "@/components/WalletComponents/CreateWallet";
import { useGetUserIdQuery } from "@/services/apiSlice";
import { useMemo } from "react";

const Page = () => {
  const { data, error, isError, isSuccess, isFetching, isLoading } =
    useGetUserIdQuery();

  const userId = useMemo(() => {
    return !isFetching && isSuccess ? data?.uuid : "";
  }, [isFetching, isSuccess, data]);
  console.log({ userId });
  return (
    <div className="mx-auto">
      <CreateWallet userId={userId} />
    </div>
  );
};

export default Page;
