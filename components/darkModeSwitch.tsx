import { Box, Typography, Button, Switch, Grid } from "@mui/material";
import { Person, WbSunny, Brightness3 } from "@mui/icons-material";

function DarkModeSwitch() {
  return (
    <Grid container direction="row" alignItems="center" sx={{ width: 100 }}>
      <Grid item>
        <WbSunny sx={{ color: "#FFB82E", position: "relative", top: "5px" }} />
      </Grid>
      <Grid item>
        <Switch size="small" color="default" />
      </Grid>
      <Grid item>
        <Brightness3 sx={{ position: "relative", top: "5px" }} />
      </Grid>
    </Grid>
  );
}

export default DarkModeSwitch;
