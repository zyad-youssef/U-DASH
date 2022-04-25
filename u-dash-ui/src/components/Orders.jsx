import React from "react";
import ImgMediaCard from "./card";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Orders() {
  return (
    <div>
      <Typography component="div">
        <Box sx={{ fontSize: 'h4.fontSize', m: 1 }}> U-Dash</Box>
      </Typography>
      <Box
        sx={{ display: 'grid', gap: 6, gridTemplateColumns: 'repeat(6, 1fr)', }}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20' }}
      >
        <ImgMediaCard> </ImgMediaCard>
        <ImgMediaCard> </ImgMediaCard>
        <ImgMediaCard> </ImgMediaCard>
        <ImgMediaCard> </ImgMediaCard>
        <ImgMediaCard> </ImgMediaCard>
        <ImgMediaCard> </ImgMediaCard>

      </Box>
    </div>
  );
};

export default Orders;