import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import citylight from "../assets/citylight.jpg";
import ImageGallery from "../component/ImageGallery";
import CustomizedAccordions from "../component/Accordian";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../component/Modal";
import NavBar from "../component/NavBar";

const Tour = () => {
  return (
    <>
      <NavBar />
      <Container
        sx={{
          maxWidth: "100%",
          width: { xs: "100%", sm: "90%", md: 900 }, // ✅ responsive widths
          px: { xs: 2, sm: 3 }, // padding adjustment for small screens
        }}
      >
        <Typography variant="h3" component="h1" mt={3} fontSize={{ xs: 24, sm: 32 }}>
          Explore the world in Vegas
        </Typography>

        {/* Responsive image + gallery layout */}
        <Box
          mt={3}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // ✅ stack on small screens
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            component="img"
            src={citylight}
            alt="Vegas city lights"
            sx={{
              width: { xs: "100%", sm: 300 },
              height: { xs: "auto", sm: 325 },
              borderRadius: 2,
              objectFit: "cover",
            }}
          />

          <ImageGallery />
        </Box>

        <Box>
          <Typography variant="h6" component="h4" mt={3}>
            About this ticket
          </Typography>

          <Typography variant="body1" component="p" mt={2} sx={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tenetur ad aliquam
            eligendi magnam quo dignissimos earum laudantium eum fugit totam, incidunt voluptatum
            explicabo, rem repellendus alias id tempore ratione omnis quod itaque. Autem nisi
            recusandae eaque. Cum, quae sed.
          </Typography>
        </Box>

        <Box mb={10}>
          <Typography variant="h6" component="h4" mt={3} mb={2}>
            Frequently Asked Questions
          </Typography>
          <CustomizedAccordions />
        </Box>
      </Container>

      {/* ✅ Responsive BottomNavigation bar */}
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap", // ✅ allows wrapping if too wide
            py: 1,
          }}
        >
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default Tour;
