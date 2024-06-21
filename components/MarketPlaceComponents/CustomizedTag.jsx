"use client";

import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { setQueryTags } from "@/redux";

const BpIcon = styled("span")(() => ({
  borderRadius: 3,
  width: 13,
  height: 13,
  backgroundColor: "transparent",
  border: "2px solid #737373",
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#00B172",
  border: "none",
  "&:before": {
    display: "block",
    width: 13,
    height: 13,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fillRule='evenodd' clipRule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
});

// Inspired by blueprintjs
function BpCheckbox(props) {
  return (
    <Checkbox
      disableRipple
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

// export default function CustomizedCheckTag({
//   id,
//   label,
//   currentTags,
//   handleOnSelect,
// }) {
//   const [selected, setSelected] = useState(false);

//   // const handleOnSelect = (id, label) => {
//   //   dispatch(setQueryTags({ id, label }))
//   //   if (!isTagSelected(id, label)) {
//   //     setFundExchangeInfo({
//   //       ...fundExchangeInfo,
//   //       tags: [...fundExchangeInfo.tags, { id, label }],
//   //     });
//   //     setSelected(true);
//   //   } else {
//   //     const newTags = fundExchangeInfo.tags?.filter((tag) => tag.id !== id);
//   //     setFundExchangeInfo({
//   //       ...fundExchangeInfo,
//   //       tags: [...newTags],
//   //     });
//   //     setSelected(false);
//   //   }
//   // };

//   const isTagSelected = (id) => {
//     if (!currentTags) return false;
//     return currentTags?.some((tag) => tag.id === id);
//   };

//   useEffect(() => {
//     if (isTagSelected(id)) setSelected(true);
//     else setSelected(false);
//   }, [currentTags, id, label]);
//   const [checked, setChecked] = useState(selected);

//   const handleCheckboxChange = () => {
//     const newCheckedState = !checked;
//     setChecked(newCheckedState);
//     handleOnSelect(id, label, newCheckedState);
//   };

//   return (
//     // <div
//     //   onClick={() => handleOnSelect(id, label)}
//     //   className={`${selected && "border-2 border-primary"
//     //     } flex items-center space-x-1 md:space-x-2 w-fit h-[32px] rounded-[5px] p-2 md:px-3 xl:px-4 cursor-pointer bg-[#333]`}
//     // >
//     //   <BpCheckbox checked={selected} />
//     //   <p className="text-xs font-rubik font-medium text-lightGray">{label}</p>
//     // </div>
//     <div
//       onClick={handleCheckboxChange}
//       className={`${
//         checked && "border-2 border-primary"
//       } flex items-center space-x-1 md:space-x-2 w-fit h-[32px] rounded-[5px] p-2 md:px-3 xl:px-4 cursor-pointer bg-[#333]`}
//     >
//       <input
//         type="checkbox"
//         className="h-4 w-4 rounded border-gray-300 focus:ring-indigo-500 text-indigo-600"
//         checked={checked}
//         onChange={handleCheckboxChange}
//         id={id} // Use the provided id prop
//       />
//       <p className="text-xs font-rubik font-medium text-lightGray">{label}</p>
//     </div>
//   );
// }
export const CustomizedCheckTag = ({ id, label, selected, handleOnSelect }) => {
  const [checked, setChecked] = useState(selected);

  const handleCheckboxChange = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);
    handleOnSelect(id, label, newCheckedState); // Pass the value of the checkbox
  };

  return (
    <div
      onClick={handleCheckboxChange}
      className={`${
        checked && "border-2 border-primary"
      } flex items-center space-x-1 md:space-x-2 w-fit h-[32px] rounded-[5px] p-2 md:px-3 xl:px-4 cursor-pointer bg-[#333]`}
    >
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 focus:ring-indigo-500 text-indigo-600"
        checked={checked}
        onChange={handleCheckboxChange}
        id={id} // Use the provided id prop
      />
      <p className="text-xs font-rubik font-medium text-lightGray">{label}</p>
    </div>
  );
};
