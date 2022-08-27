import { Box, Grid, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import {
  textHolder,
  textHeader,
  textDescription,
  container,
} from "../styles/AboutUs";
import { AboutUsProps, PageProps } from "../type/types";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Head from "next/head";
import Link from "next/link";
import AboutUsSkelet from "../components/aboutUsSkelet";
import config from "../config.json";

const AboutUs = ({
  darkMode,
  showSkelet,
  onSetShowSkelet,
  showContent,
  onSetShowContent,
}: AboutUsProps) => {
  // CDM
  useEffect(() => {
    if (showSkelet) {
      setTimeout(() => {
        onSetShowContent(true);
      }, 2000);
    } else {
      onSetShowContent(true);
    }
  }, []);

  // Render
  return (
    <>
      <Head>
        <title>درباره ما</title>
      </Head>
      <Box
        sx={
          showSkelet ? { display: "block", pb: "4.8rem" } : { display: "none" }
        }
      >
        <AboutUsSkelet darkMode={darkMode} />
      </Box>
      {showContent && (
        <Box
          sx={
            showSkelet
              ? { position: "relative", right: "1000rem" }
              : container(darkMode)
          }
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={[0, 10]}
          >
            <Grid item xs={12} sm={12} md={6}>
              <img
                src={config.apiEndPoint}
                width="400"
                height="400"
                style={{ borderRadius: "90px", objectFit: "cover" }}
                onLoad={() => onSetShowSkelet(false)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box sx={textHolder}>
                <Typography sx={textHeader(darkMode)}>درباره ما</Typography>
                <Typography sx={textDescription(darkMode)}>
                  نکته مهمی که در بیشتر سایتهای ایرانی توجهی به آن نمیشود طراحی
                  صفحه درباره ما یا همان About Us است. اکثر افراد در این بخش
                  مطالبی طولانی و خسته کننده برای کاربر و یا نوشته ای کوتاه و
                  ناقص قرار میدهند که میتواند اعتبار سایت یا شرکت شما را زیر
                  سوال ببرد
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: "1rem 0",
            }}
          >
            <Link href="/">
              <Button
                sx={{ width: 200 }}
                variant="outlined"
                endIcon={<ArrowCircleLeftIcon />}
              >
                صفحه اصلی
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </>
  );
};

export default AboutUs;
