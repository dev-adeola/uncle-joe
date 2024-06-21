"use client"

import { Checkbox, styled } from "@mui/material";


const BpIcon = styled("span")(() => ({
    borderRadius: 3,
    width: 13,
    height: 13,
    backgroundColor: "transparent",
    border: "2px solid #737373", 
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#00B172",
    border: 'none',
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
  function CustomCheckbox(props) {
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


  export default CustomCheckbox
    