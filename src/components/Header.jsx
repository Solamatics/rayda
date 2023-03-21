import { Box, Typography, IconButton } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mx: { sm: "4rem" },
          px: { sm: "6rem" },
        }}
      >
        <Box>
          <Typography
            sx={{ color: "#101828", fontSize: "30px", fontWeight: "600" }}
          >
            Welcome
          </Typography>
          <Typography
            sx={{ color: "#475467", fontSize: "16px", fontWeight: "400" }}
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
      </Box>
      <hr />
    </>
  );
};

export default Header;
