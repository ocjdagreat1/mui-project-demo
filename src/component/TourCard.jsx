import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "body2" },
          style: { fontSize: 11 },
        },
        {
          props: { variant: "body3" },
          style: { fontSize: 9 },
        },
      ],
    },
  },
});



const fallbackImage =
  "https://source.unsplash.com/400x250/?travel,landscape,nature,adventure";


const TourCard = ({ tour }) => {
  const [imgSrc, setImgSrc] = useState(tour.image);

  // If the image fails to load, replace with fallback
  const handleImageError = () => {
    setImgSrc(fallbackImage);
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <ThemeProvider theme={theme}>
        <Paper
          elevation={4}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            },
          }}
        >
          {/* Image */}
          <Box
  component="img"
  src={imgSrc}
  alt={tour.name}
  onError={handleImageError}
  sx={{
    width: "100%",
    height: 200,              // make height consistent
    aspectRatio: "16/9",      // ensures same proportions
    objectFit: "cover",       // crop images evenly
    objectPosition: "center", // keeps important parts centered
    transition: "transform 0.3s ease",
    "&:hover": { transform: "scale(1.05)" },
  }}
/>
          

          {/* Tour Info */}
          <Box paddingX={2} paddingY={1.5}>
            <Typography component="h2" variant="subtitle1" fontWeight="bold">
              {tour.name}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 14 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "center" }}
              marginTop={1}
              marginBottom={0.5}
            >
              <Rating
                name="read-only"
                precision={0.5}
                value={tour.rating}
                size="small"
                readOnly
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={0.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>

            <Typography variant="h6" component="h3" color="primary">
              From C ${tour.price}
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
