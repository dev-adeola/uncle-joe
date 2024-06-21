"use client"

import { ThemeProvider, CssBaseline, createTheme, StyledEngineProvider } from "@mui/material";
import palette from './palette';

const customTheme = createTheme({
  palette: {
    ...palette
  }
});


const MuiProvider = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};



export default MuiProvider 