import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DasherPic from './Dasher.jpg';

function Menu() {
  return (
    <div> 
    <Typography component="div">
      <Box sx={{ fontSize: 'h4.fontSize', m: 1 }}>U-Dash</Box>
      <Box sx={{ textAlign: 'center' ,fontSize: 'h10.fontSize', m: 1 }}> U-Dash is a food and package delivery service specifically designed for the University of Utah Campus. Deliveries are handled by various pick-up and drop-off zones will be assigned to specific locations on campus where patrons can request deliveries through a website. Through our web service, our delivery kart Dasher, will intermittently receive GPS instructions from our server and navigate toward the requested dispatch area. Upon approximate distance to the pick-up zone, Dasher will notify the server of its arrival notifying the customer. 
    </Box>
     </Typography>  
     <img src={DasherPic} height={600} width={600} />
     </div>
  );
}

export default Menu;
