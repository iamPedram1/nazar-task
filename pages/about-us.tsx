import { Box, Grid, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import {
  textHolder,
  textHeader,
  textDescription,
  container,
} from "../styles/AboutUs";
import { PageProps } from "../type/types";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AboutUsSkelet from "../components/aboutUsSkelet";
import config from "../config.json";

const AboutUs = ({ darkMode }: PageProps) => {
  const [loading, setLoading] = useState(true);
  const [startLoading, setStartLoading] = useState(false);
  // CDM
  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setStartLoading(true);
      }, 2000);
    }
    setStartLoading(true);
  }, []);
  // Render
  return (
    <>
      <Head>
        <title>درباره ما</title>
      </Head>
      <Box
        sx={loading ? { display: "block", pb: "4.8rem" } : { display: "none" }}
      >
        <AboutUsSkelet darkMode={darkMode} />
      </Box>
      {startLoading && (
        <Box
          sx={
            loading
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
              <Image
                src={config.apiEndPoint}
                width="400"
                height="400"
                style={{ borderRadius: "90px" }}
                onLoadingComplete={() => setLoading(false)}
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
