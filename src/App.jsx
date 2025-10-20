import AppBar from './component/AppBar';
import './App.css'
import TourCard from "./component/TourCard"
import Container from '@mui/material/Container';
import  Grid  from'@mui/material/Grid';
import cities from "./data.json"
import { Typography } from '@mui/material';

function App() {
  

  return (
    <>
    
    <AppBar/>
    <Container sx={{marginY:5}}>
      {cities.map((city) =>(
        <>
        <Typography
        variant='h4'
        component="h2"
        marginTop={5}
        marginBottom={3}>
          Top {city.name} Tours
</Typography>
<Grid container spacing={1}>
{city.tours.map((tour,index) =>
<TourCard tour ={tour} key={index}/> )}


</Grid>
</>
      ))}
      

{/*

  */}
  </Container>
    </>
  )
}

export default App
