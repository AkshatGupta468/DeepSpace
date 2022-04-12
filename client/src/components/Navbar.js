import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";

const Navbar = ({ toggleLoginout , userdetails }) => {
  return (
    <AppBar>
      <Toolbar sx={{ d: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" sx={{}}>
          Deep Space
        </Typography>
        <Button variant="contained" onClick={toggleLoginout}>
          {(userdetails && "Log Out") || "Log In"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
