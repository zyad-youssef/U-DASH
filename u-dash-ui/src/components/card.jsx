import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from './ulogo.png';


export default function ImgMediaCard() {
  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia class="center" style={{ width: 100, height: 100, paddingTop: '0%' }}
        component="img"
        alt="red U"
        height="350"
        image={require('./ulogo.png')}

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          U OF U
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This school sucks, also starship
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Order</Button>
      </CardActions>
    </Card>
  );
}