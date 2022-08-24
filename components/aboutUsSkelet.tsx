import { Box, Grid, Typography, Skeleton } from "@mui/material";
import Image from "next/image";
import config from "../config.json";

function AboutUsSkelet() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        p: "2rem 4rem",
        m: "0 1rem",
        borderRadius: "10px",
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Skeleton
            variant="rectangular"
            sx={{ borderRadius: "90px", width: 400, height: 400 }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem", width: "30%", mb: "1rem" }}
            />
            <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
            <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
            <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem", width: "20%", alignSelf: "start" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutUsSkelet;
