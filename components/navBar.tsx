import { Box, Typography, Button, Switch, Grid } from "@mui/material";
import { Person, WbSunny, Brightness3 } from "@mui/icons-material";
const flexRow = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const text = {
  fontWeight: "400",
};

const NavBar = (): JSX.Element => {
  return (
    <>
      <Box sx={[flexRow, { m: 2, p: 2, borderRadius: 3, bgcolor: "#fff" }]}>
        <Box sx={[flexRow, { gap: "20px" }]}>
          <Typography sx={text}>صفحه نخست</Typography>
          <Typography sx={text}>درباره ما</Typography>
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
