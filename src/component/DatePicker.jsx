import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import Box from "@mui/material/Box";

export default function BasicDateRangeCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          mt: 2,
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%", // full width on phones
              sm: "90%",  // small tablets
              md: "70%",  // medium screens
              lg: "50%",  // desktop
            },
            maxWidth: 600,
            overflowX: "auto", // prevents horizontal overflow on very small devices
            p: { xs: 1, sm: 2 },
          }}
        >
          <DemoContainer components={["DateRangeCalendar"]}>
            <DateRangeCalendar
              sx={{
                width: "100%",
                "& .MuiDateRangeCalendar-root": {
                  width: "100%",
                },
              }}
            />
          </DemoContainer>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
