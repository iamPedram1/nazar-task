import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/navBar";
import RTL from "../services/RTL";
import { Box } from "@mui/material";
import { useMemo, useState } from "react";
import { pageContainer, bodyStyles } from "../styles/Body";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [showSkelet, setShowSkelet] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useMemo(() => {
    bodyStyles(darkMode);
  }, [darkMode]);

  return (
    <>
      <Box sx={pageContainer(darkMode)}>
        <RTL>
          <NavBar darkMode={darkMode} onSetDarkMode={setDarkMode} />
          <Component
            darkMode={darkMode}
            showSkelet={showSkelet}
            onSetShowSkelet={setShowSkelet}
            showContent={showContent}
            onSetShowContent={setShowContent}
            {...pageProps}
          />
        </RTL>
      </Box>
    </>
  );
}

export default MyApp;
