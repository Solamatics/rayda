import { Box, Typography, useTheme } from "@mui/material";
import Banner from "../assets/auction.svg";
import Logo from "../assets/logo.svg";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

const Auction = () => {
  return (
    <Box
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        p: { md: "30px" },
        pb: "20px",
        margin: "20px",
      }}
    >
      <Box sx={{ width: "1500pxpx" }}>
        <Box
          component="img"
          src={Banner}
          alt="banner"
          sx={{ width: "100%", borderRadius: { xs: "10px", md: "20px" } }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          margin: "20px",
        }}
      >
        <Box
          sx={{
            marginLeft: { md: "180px" },
            fontSize: { sm: "14px", md: "16px" },
          }}
        >
          <Typography sx={{ color: "#101828", fontWeight: "600" }}>
            Starts in: 3 days : 2 hours : 24 minutes{" "}
          </Typography>
          <span
            style={{
              color: "#F79009",
              fontSize: "0.8rem",
              backgroundColor: "#FFFAEB",
              padding: "5px",
            }}
          >
            . Not Live
          </span>{" "}
          <span style={{ color: "#475467", fontSize: "0.8rem" }}>
            Layers Auction
          </span>
        </Box>

        <Box>
          <Box
            sx={{
              fontSize: { sm: "14px", md: "16px" },
              border: "1px solid #98A2B3",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px",
            }}
          >
            <ThumbUpOutlinedIcon sx={{ color: "#98A2B3" }} />
            <span style={{ color: "#344054" }}>Accept Invite</span>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "100px", md: "300px" },
          left: { xs: "10px", md: "70px" },
        }}
      >
        <Box
          component="img"
          sx={{
            height: {
              xs: "70px",
              sm: "144px",
            },
            width: {
              xs: "70px",
              sm: "144px",
            },
          }}
          alt="logo"
          src={Logo}
        />
      </Box>
    </Box>
  );
};

export default Auction;
