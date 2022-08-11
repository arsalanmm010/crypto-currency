import { AppBar, Typography, Box, Toolbar } from "@mui/material";

const Nav = () => {
  return (
    <div className="nav">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Crypto Tracker
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Nav;
