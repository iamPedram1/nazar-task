import { Box, Typography, Button, Switch, Grid } from "@mui/material";
import { Person, WbSunny, Brightness3 } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { NavBarProps } from "../type/types";
import { flexRow, navTitle, containerColor, icons } from "../styles/NavBar";

const NavBar = ({ darkMode, onSetDarkMode }: NavBarProps): JSX.Element => {
  const { pathname } = useRouter();
  // Event Handler
  const handleSwitch = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    onSetDarkMode(checked);
  };

  // Render
  return (
    <>
      <Box
        sx={[
          flexRow,
          { m: "0 1rem 1rem", p: 2, borderRadius: 3 },
          containerColor(darkMode),
        ]}
      >
        <Box sx={[flexRow, { gap: "20px" }]}>
          <Link href="/">
            <Typography
              className={pathname === "/" ? "active" : ""}
              sx={navTitle(darkMode)}
            >
              صفحه نخست
            </Typography>
          </Link>
          <Link href="/about-us">
            <Typography
              className={pathname === "/about-us" ? "active" : ""}
              sx={navTitle(darkMode)}
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
                sx={
                  darkMode
                    ? [icons, { color: "#fff" }]
                    : [icons, { color: "#FFB82E" }]
                }
              />
            </Grid>
            <Grid item>
              <Switch onChange={handleSwitch} size="small" color="default" />
            </Grid>
            <Grid item>
              <Brightness3
                sx={darkMode ? [icons, { color: "#FFB82E" }] : icons}
              />
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
