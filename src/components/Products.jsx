import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import data from "./data";

const Products = () => {
  return (
    <Box
      sx={{
        marginTop: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: "3rem",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
    >
      <Grid container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 6, md: 12 }}>
        {data?.map((product, index) => {
          const { name, price, img } = product;
          return (
            <Grid item xs={8} sm={3} key={index}>
              <Card sx={{ height: "100%", p: "10px", borderRadius: "10px" }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={img}
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
                      Koray Okumus{" "}
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
                    {name.length > 50 ? name.substring(0, 50) : name}
                  </Typography>
                  <Typography sx={{ color: "#344054", fontSize: "14px" }}>
                    Current Bid:{" "}
                    <span style={{ fontWeight: "700" }}>{price}</span>
                  </Typography>
                  <Divider />
                  <Button
                    sx={{
                      width: "100%",
                      mt: "10px",
                      backgroundColor: "#004CCC",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#004CCC" },
                    }}
                  >
                    Add to wishlisst
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Products;
