import { Box, Typography, useTheme } from "@mui/material";
import Banner from "../assets/auction.svg";
import Logo from "../assets/logo.svg";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

const Auction = () => {
  return (
    <Box
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        // p: "30px",
        pb: "20px",
        // margin: "20px",
      }}
    >
      <Box sx={{ width: "1500pxpx" }}>
        <img
          src={Banner}
          alt="banner"
          style={{ width: "100%", borderRadius: "20px" }}
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
            marginLeft: { md: "200px" },
            fontSize: { sm: "14px", md: "16px" },
          }}
        >
          <Typography>Starts in: 3 days : 2 hours : 24 minutes </Typography>
          <span>. Not Live</span> <span>Layers Auction</span>
        </Box>

        <Box>
          <Box
            sx={{
              fontSize: { sm: "14px", md: "16px" },
              border: "1px solid #344054",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px",
            }}
          >
            <ThumbUpOutlinedIcon />
            <span>Accept Invite</span>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "100px", md: "250px" },
          left: "20px",
        }}
      >
        <Box
          component="img"
          sx={{
            height: {
              xs: "80px",
              sm: "144px",
            },
            width: {
              xs: "80px",
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
