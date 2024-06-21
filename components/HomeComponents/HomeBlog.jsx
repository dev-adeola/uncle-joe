import React from "react";

function HomeBlog() {
  return (
    <div className="w-full flex-col md:flex-row flex items-start justify-between gap-8 py-12">
      {/*  */}
      <div className="flex md:order-2 flex-col items-end space-y-4">
        <p className="text-xs cursor-pointer md:text-sm xl:text-lg font-karla text-right font-light text-[#e2e2e2] ">
          See more
        </p>
        <div className="w-full h-[240px] md:w-[365px]">
          <img
            src="/assets/blog/blogimage.png"
            alt="blog post banner"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/*  */}
      <div className="flex md:order-1 flex-col w-full md:max-w-[340px] xl:max-w-[475px] space-y-4 md:space-y-6 items-start">
        <h4 className="capitalize font-rubik font-bold text-white text-xl md:text-3xl xl:text-[40px] xl:leading-[50px]">
          blog
        </h4>
        <p className="font-rubik font-normal text-darkGray text-lg md:text-2xl xl:text-3xl">
          Your portfolio is stopping you from getting that job
        </p>
        <p className="text-xs md:text-sm xl:text-lg font-karla font-light text-[#e2e2e2] ">
          An intense way to learn about the process and practice your designs
          skills — My 1st hackathon Hackathons have been on my mind since I
          heard it was a good way to gain experience as a junior UX designer. As
          my portfolio...
        </p>
        <p className="font-rubik font-normal text-white text-lg md:text-2xl xl:text-3xl">
          ...
        </p>
      </div>
    </div>
  );
}

export default HomeBlog;
