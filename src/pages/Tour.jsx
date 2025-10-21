import React from "react";
import  Typography  from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from "@mui/material/Box"
import citylight from"../assets/citylight.jpg"
import ImageGallery from "../component/ImageGallery"
import CustomizedAccordions from "../component/Accordian"
import Paper from "@mui/material/Paper"
import BottomNavigation  from "@mui/material/BottomNavigation";
import BasicModal from "../component/Modal";
import NavBar from "../component/NavBar"



const Tour = () => {
  return (
    <>
    <NavBar/>
    <Container sx={{width:900}}>
      
      <Typography variant ="h3" component="h1" marginTop={3}>
        Explore the world in Vegas
      </Typography>
<Box marginTop={3} sx={{display:"flex"}}>
<img src={citylight} alt='Vegas city lights'
height={325}
width={300}/>

<ImageGallery/>

</Box>
<Box>

   <Typography variant ="h6" component="h4" marginTop={3}>
        About this ticket
      </Typography>

       <Typography variant ="paragraph" component="p" marginTop={3}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid tenetur ad aliquam eligendi magnam quo dignissimos earum laudantium eum fugit totam, incidunt voluptatum explicabo, rem repellendus alias id tempore ratione omnis quod itaque. Autem nisi recusandae eaque. Cum, quae sed.
      </Typography>
</Box>
<Box marginBottom={10}>
   <Typography variant ="h6" component="h4" marginTop={3}marginBottom={2}>
        Frequently ask Questions
      </Typography>
<CustomizedAccordions/>
     
     
</Box>

<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation >
          <BasicModal/>
          
        </BottomNavigation>
      </Paper>
    </Container>
    </>
  )
}

export default Tour