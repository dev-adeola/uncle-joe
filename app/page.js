import {
  HomeBecomePartner,
  HomeBlog,
  HomeBuyFund,
  HomeFAQS,
  HomeHeader,
  HomeLayout,
  HomeMetrics,
  HomeOurProduct,
  HomePopularEWallet,
  HomeRequestPayment,
  HomeSellYourFund,
  HomeTestimonials,
  HomeWithdrawFund,
} from "@/components";

function page() {
  return (
    <HomeLayout>
      <HomeHeader />
      <HomeMetrics />
      {/*  px-8 lg:px-12 py-8 md:py-12 xl:py-16 */}
      {/*  */}
      <div className="w-full px-4 lg:px-8 py-4 md:py-6 xl:py-12  bg-[#0C0E0F] ">
        <div className="space-y-8 w-full mx-auto max-w-[1010px]">
          <HomeSellYourFund />
          <HomeBuyFund />
          <HomeRequestPayment />
          <HomeWithdrawFund />
        </div>
      </div>
      {/*  */}
      <div className="w-full px-4 lg:px-8 py-4 md:py-6 xl:py-12  bg-[#181C1F]">
        <div className="w-full mx-auto max-w-[1010px]">
          <HomeOurProduct />
        </div>
      </div>
      {/*  */}
      <div className="w-full px-4 lg:px-8 py-4 md:py-6 xl:py-12  bg-[#181C1F]">
        <div className="space-y-8 w-full mx-auto max-w-[1010px]">
          <HomeBecomePartner />
        </div>
      </div>
      {/*  */}
      <div className="w-full px-4 lg:px-8 py-4 md:py-6 xl:py-12  bg-[#0C0E0F]">
        <div className="space-y-8 w-full mx-auto max-w-[1010px]">
          <HomeTestimonials />
        </div>
      </div>
      {/*  */}
      <div className="w-full px-4 lg:px-8 py-4 md:py-6 xl:py-12  bg-[#181C1F]">
        <div className="space-y-8 w-full mx-auto max-w-[1010px]">
          {" "}
          <HomePopularEWallet />
        </div>
      </div>
      {/*  */}
      <div className="w-full px-4 lg:px-8 py-4 md:py-6 xl:py-12  bg-[#0C0E0F]">
        <div className="space-y-8 w-full mx-auto max-w-[1010px]">
          {" "}
          <HomeBlog />
        </div>
      </div>
      {/*  */}
      <div className="w-full px-4 lg:px-8 py-4 md:py-6 xl:py-12  bg-[#0C0E0F]">
        <div className="w-full mx-auto max-w-[1010px]">
          {" "}
          <HomeFAQS />
        </div>
      </div>
    </HomeLayout>
  );
}

export default page;
