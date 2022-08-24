import { Box, Grid, Typography, Skeleton, Button } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AboutUsSkelet from "../components/aboutUsSkelet";
import config from "../config.json";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
const AboutUs = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <AboutUsSkelet />
      ) : (
        <Box
          sx={{
            backgroundColor: "#fff",
            p: "2rem 4rem",
            m: "0 1rem",
            borderRadius: "10px",
          }}
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
                onLoad={() => console.log("on Load")}
                onLoadingComplete={() => console.log("Loading Completed")}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#071440",
                    fontWeight: "500",
                    fontSize: "1.5rem",
                    mb: "2rem",
                  }}
                >
                  درباره ما
                </Typography>
                <Typography sx={{ lineHeight: "2rem", fontWeight: "400" }}>
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
                variant="contained"
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
