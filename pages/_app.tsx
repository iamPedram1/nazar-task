import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/navBar";
import RTL from "../services/RTL";
import { Box } from "@mui/material";
import { useState } from "react";
import { bodyStyle } from "../styles/Body";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Box sx={bodyStyle(darkMode)}>
        <RTL>
          <NavBar darkMode={darkMode} onSetDarkMode={setDarkMode} />
          <Component darkMode={darkMode} {...pageProps} />
        </RTL>
      </Box>
    </>
  );
}

export default MyApp;
