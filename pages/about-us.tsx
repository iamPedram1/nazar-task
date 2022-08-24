import { Box, Grid, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AboutUsSkelet from "../components/aboutUsSkelet";
import config from "../config.json";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import {
  textHolder,
  textHeader,
  textDescription,
  container,
} from "../styles/AboutUs";
import { PageProps } from "../type/types";

const AboutUs = ({ darkMode }: PageProps) => {
  const [loading, setLoading] = useState(true);
  const [startLoading, setStartLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setStartLoading(true);
      }, 1000);
    }
    setStartLoading(true);
  }, []);

  return (
    <>
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
          >
            <Grid item xs={6}>
              <Image
                src={config.apiEndPoint}
                width="400"
                height="400"
                style={{ borderRadius: "90px" }}
                onLoadingComplete={() => setLoading(false)}
              />
            </Grid>
            <Grid item xs={6}>
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
