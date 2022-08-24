import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/navBar";
import RTL from "../services/RTL";
import { Container } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container">
        <RTL>
          <NavBar />
          <Component {...pageProps} />
        </RTL>
      </div>
    </>
  );
}

export default MyApp;
