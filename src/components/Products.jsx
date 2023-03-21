import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
  Grid,
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
      <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data?.map((product, index) => {
          const { name, price, img } = product;
          return (
            <Grid item xs={8} sm={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="194"
                  image={img}
                  alt="product"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {name}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing></CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Products;
