import React from 'react';
import TourCard from "../component/TourCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cities from "../data";
import { Typography } from '@mui/material';


const Home = () => {
  return (
    <>
      
     <Container sx={{ marginY: 5 }}>

        {cities.map((city) => (
          <React.Fragment key={city.id}>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              {city.tours.map((tour, index) => (
                <TourCard tour={tour} key={index} />
              ))}
            </Grid>
          </React.Fragment>
        ))}
      </Container>
    </>
  );
};

export default Home;
