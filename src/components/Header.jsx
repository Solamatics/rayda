import { Box, Typography, IconButton, Divider } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mx: { sm: "4rem", md: "20px" },
          px: { sm: "6rem", md: 0 },
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

        <Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, position: "relative" }}
          >
            <NotificationsNoneOutlinedIcon
              style={{ color: "#667085", fontSize: "30px" }}
            />
            <div
              style={{
                width: "15px",
                height: "15px",
                backgroundColor: "red",
                borderRadius: "50%",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "10px",
                fontWeight: "bold",
                position: "absolute",
                bottom: "7px",
                right: "6px",
              }}
            >
              3
            </div>
          </IconButton>
        </Box>
      </Box>
      <Divider sx={{ mt: "10px" }} />
    </>
  );
};

export default Header;
