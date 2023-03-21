import { useState } from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Header = () => {
  return (
    <Box sx={{ px: "3rem", mx:"5rem" }}>
      <AppBar sx={{ background: "#fff" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: "2.5rem", md: "6.25rem" },
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: "#101828",
                fontSize: "30px",
                fontFamily: "IBM Plex Sans",
              }}
            >
              Welcome
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#475467", fontSize: "16px" }}
            >
              Your current sales auction and activity.
            </Typography>
          </Box>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <NotificationsNoneOutlinedIcon style={{ color: "#000" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
