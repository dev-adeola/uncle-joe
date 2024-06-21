"use client";
import React, { useState } from "react";
import { Tooltip, styled, tooltipClasses } from "@mui/material";
import { applicableTags } from "@/utils/data";
import { CustomizedCheckTag } from "./CustomizedTag";

const DarkTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    padding: "16px",
    backgroundColor: theme.palette.common.black,
  },
}));

export default function SelectTags({
  currentTags,
  selectedTags,
  handleTagSelect,
}) {
  // const [selectedTags, setSelectedTags] = useState([]);
  // console.log({ selectedTags });
  // const handleTagSelect = (id, label, checked) => {
  //   if (checked) {
  //     // Add the tag to the selectedTags array if it's checked
  //     setSelectedTags([...selectedTags, { id, label }]);
  //   } else {
  //     // Remove the tag from the selectedTags array if it's unchecked
  //     setSelectedTags(selectedTags.filter((tag) => tag.id !== id));
  //   }
  // };

  return (
    <div className="flex flex-shrink-0 flex-col space-y-2">
      <div>
        <h4 className="font-karla text- lightGray flex items-center space-x-2 text-[16px] font-bold leading-[20px] xl:text-[30px] xl:leading-[43.5px]">
          <p className="font-karla text-[16px] font-bold leading-[20px] text-lightGray xl:text-[30px] xl:leading-[43.5px]">
            Unselect unwanted Requirements & tags
          </p>
          <DarkTooltip
            title={
              <p>
                Unselect the requirements <br /> you are not OK with tho filter{" "}
                <br /> the Offers below
              </p>
            }
            placement="right"
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M12.9883 1.5C7.18984 1.5 2.48828 6.20156 2.48828 12C2.48828 17.7984 7.18984 22.5 12.9883 22.5C18.7867 22.5 23.4883 17.7984 23.4883 12C23.4883 6.20156 18.7867 1.5 12.9883 1.5ZM12.9883 20.7188C8.17422 20.7188 4.26953 16.8141 4.26953 12C4.26953 7.18594 8.17422 3.28125 12.9883 3.28125C17.8023 3.28125 21.707 7.18594 21.707 12C21.707 16.8141 17.8023 20.7188 12.9883 20.7188Z"
                fill="#98A2B3"
              />
              <path
                d="M15.6039 7.42266C14.9008 6.80625 13.9727 6.46875 12.9883 6.46875C12.0039 6.46875 11.0758 6.80859 10.3727 7.42266C9.64141 8.0625 9.23828 8.92266 9.23828 9.84375V10.0219C9.23828 10.125 9.32266 10.2094 9.42578 10.2094H10.5508C10.6539 10.2094 10.7383 10.125 10.7383 10.0219V9.84375C10.7383 8.81016 11.7484 7.96875 12.9883 7.96875C14.2281 7.96875 15.2383 8.81016 15.2383 9.84375C15.2383 10.5727 14.7227 11.2406 13.9234 11.5477C13.4266 11.7375 13.0047 12.0703 12.7023 12.5062C12.3953 12.9516 12.2359 13.4859 12.2359 14.0273V14.5312C12.2359 14.6344 12.3203 14.7188 12.4234 14.7188H13.5484C13.6516 14.7188 13.7359 14.6344 13.7359 14.5312V13.9992C13.7371 13.7717 13.8069 13.5498 13.9361 13.3625C14.0653 13.1752 14.2479 13.0312 14.4602 12.9492C15.843 12.4172 16.7359 11.1984 16.7359 9.84375C16.7383 8.92266 16.3352 8.0625 15.6039 7.42266ZM12.0508 17.1562C12.0508 17.4049 12.1496 17.6433 12.3254 17.8192C12.5012 17.995 12.7396 18.0938 12.9883 18.0938C13.2369 18.0938 13.4754 17.995 13.6512 17.8192C13.827 17.6433 13.9258 17.4049 13.9258 17.1562C13.9258 16.9076 13.827 16.6692 13.6512 16.4933C13.4754 16.3175 13.2369 16.2188 12.9883 16.2188C12.7396 16.2188 12.5012 16.3175 12.3254 16.4933C12.1496 16.6692 12.0508 16.9076 12.0508 17.1562Z"
                fill="#98A2B3"
              />
            </svg>
          </DarkTooltip>
        </h4>
      </div>
      <div className="flex items-center flex-wrap gap-[6px] md:gap-3 w-full">
        {/* <TagSelector applicableTags={applicableTags} /> */}
        {currentTags?.map(({ id, requirement }, index) => (
          <CustomizedCheckTag
            key={id}
            id={id}
            label={requirement}
            handleOnSelect={handleTagSelect}
            selected={selectedTags.some((selectedTag) => selectedTag.id === id)}
          />
        ))}
      </div>
    </div>
  );
}
