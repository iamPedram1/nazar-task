import { Box, Typography, Button, Switch, Grid } from "@mui/material";
import { Person, WbSunny, Brightness3 } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";

// SX Styles
const flexRow = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const navTitle = {
  fontWeight: "400",
  cursor: "pointer",
};
// Render
const NavBar = (): JSX.Element => {
  // get Current Path for active class
  const { pathname } = useRouter();

  return (
    <>
      <Box sx={[flexRow, { m: 2, p: 2, borderRadius: 3, bgcolor: "#fff" }]}>
        <Box sx={[flexRow, { gap: "20px" }]}>
          <Link href="/">
            <Typography
              className={pathname === "/" ? "active" : ""}
              sx={navTitle}
            >
              صفحه نخست
            </Typography>
          </Link>
          <Link href="/about-us">
            <Typography
              className={pathname === "/about-us" ? "active" : ""}
              sx={navTitle}
            >
              درباره ما
            </Typography>
          </Link>
        </Box>
        <Box sx={[flexRow, { gap: "20px" }]}>
          <Grid
            container
            direction="row"
            alignItems="center"
            sx={{ width: 100 }}
          >
            <Grid item>
              <WbSunny
                sx={{ color: "#FFB82E", position: "relative", top: "5px" }}
              />
            </Grid>
            <Grid item>
              <Switch defaultChecked size="small" color="default" />
            </Grid>
            <Grid item>
              <Brightness3 sx={{ position: "relative", top: "5px" }} />
            </Grid>
          </Grid>
          <Button
            sx={{ width: 110 }}
            variant="contained"
            startIcon={<Person />}
          >
            ثبت نام
          </Button>
          <Button sx={{ width: 110 }} variant="outlined">
            ورود
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
