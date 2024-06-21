import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { formatDOB, formatToDayJsFormat } from "@/utils/dateFormatter";
import { Box } from "@mui/material";
import dayjs from "dayjs";

export default function DateInputField({
  value,
  setValue,
  label = "Date of Birth",
}) {
  const handleDateChange = (val) => {
    return setValue(val);
  };

  return (
    <Box sx={{ minWidth: 320 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            format="YYYY-MM-DD"
            className="w-full text-white bg-transparent placeholder:text-white"
            label={label}
            onChange={(val) => handleDateChange(val)}
            value={value}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}
