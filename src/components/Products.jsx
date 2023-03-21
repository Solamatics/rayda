import { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import { useGetAllProductsQuery } from "../features/apiSlice";
import CircularProgress from "@mui/material/CircularProgress";

const Products = () => {
  const { data } = useGetAllProductsQuery();

  console.log(data);
  return (
    <>
      {!data?.success && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alingItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      <Box
        sx={{
          marginTop: "4rem",

          p: "3rem",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: { md: "600px" },
            mb: { md: "10px" },
            color: "#344054",
          }}
        >
          <Typography component="div" sx={{ fontWeight: "700" }}>
            Featured Items
          </Typography>
          <Typography
            component="div"
            sx={{ border: "1px solid #D0D5DD", p: "5px", borderRadius: "5px" }}
          >
            View Auction
          </Typography>
        </Box>
        <Divider sx={{ mb: "20px", mt: "10px" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 4 }}
            columns={{ xs: 4, sm: 6, md: 12 }}
          >
            {data?.data.map((product, index) => {
              const { bid, image, name, title } = product;
              return (
                <Grid item xs={8} sm={3} key={index}>
                  <Card
                    sx={{ height: "100%", p: "10px", borderRadius: "10px" }}
                  >
                    <CardMedia
                      component="img"
                      height="194"
                      image={image}
                      alt="product"
                      sx={{ borderRadius: "10px", pb: 0 }}
                    />
                    <CardContent>
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          mb: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            backgroundColor: "#98A2B3",
                            color: "#344054",
                            p: "10px",
                            borderRadius: "50%",
                            fontSize: "12px",
                          }}
                        >
                          KO
                        </Typography>
                        <Typography sx={{ color: "#101828", fontSize: "12px" }}>
                          {name}
                          <span style={{ color: "#98A2B3", fontSize: "12px" }}>
                            (Highest Bidder)
                          </span>
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          color: "#101828",
                          fontWeight: "600",
                          fontSize: "14px",
                          mb: { md: "20px" },
                        }}
                      >
                        {title.length > 50 ? title.substring(0, 50) : title}
                      </Typography>
                      <Typography sx={{ color: "#344054", fontSize: "14px" }}>
                        Current Bid:{" "}
                        <span style={{ fontWeight: "700" }}>{bid}</span>
                      </Typography>
                      <Divider />
                      <Button
                        sx={{
                          width: "100%",
                          mt: "10px",
                          backgroundColor: "#004CCC",
                          color: "#fff",
                          "&:hover": { backgroundColor: "#004CCC" },
                          textTransform: "lowercase",
                        }}
                      >
                        <span style={{ textTransform: "uppercase" }}>A</span>dd
                        to wishlist
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Products;
