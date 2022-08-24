import { Box, Grid, Skeleton } from "@mui/material";
import { container } from "../styles/AboutUs";
import { PageProps } from "../type/types";

const AboutUsSkelet = ({ darkMode }: PageProps): JSX.Element => {
  return (
    <Box sx={container(darkMode)}>
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
};

export default AboutUsSkelet;
