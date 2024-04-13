import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AllInclusiveRoundedIcon from '@mui/icons-material/AllInclusiveRounded';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345, padding: 6 }}>
<Box>

      <CardMedia
        sx={{ height: 250,width: 250, BackgroundSize: "contain", margin:"auto", justifyContent: "center"}}
        component="img"
        alt="green iguana"
        height="140"
        image="/Employee_App_React/profile1.png"
      />
      
</Box>
       
      
      <AllInclusiveRoundedIcon />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ankita Borawake
        </Typography>
        <Typography variant="body2" color="text.secondary">
          UX/UI Design
        </Typography>

       <Stack direction="row" spacing={1} sx={{margin: 2}}>
       <Chip label="Figma" />
       <Chip label="Adobe XD" />
       <Chip label="Sketch" />
       </Stack>

      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
      <Stack direction="row" spacing={1}>
      <Chip label="Active" />
      <Chip label="Hours: 20" variant="outlined" />
      </Stack>
      </CardActions>
    </Card>
  );
}
