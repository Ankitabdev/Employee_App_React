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




export default function ImgMediaCard({data}) {
 /*console.log(data);*/ 
  return (
    <>
    {data.map((item,index) => (

        <Card sx={{ maxWidth: 345, padding: 6, margin:6 }}>
        <Box>

      <CardMedia
        sx={{ height: 250,width: 250, BackgroundSize: "contain", margin:"auto", justifyContent: "center"}}
        component="img"
        alt="green iguana"
        height="140"
        image={`/Employee_App_React/${item.image}`}
      />
      
          </Box>
       
      
      <AllInclusiveRoundedIcon />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {item.firstName} {item.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.position}
        </Typography>


       <Stack>
        {item.skills.map((skill,skillIndex) => (
        <Chip key={skillIndex}
              label= {skill}
              sx={{marginTop:"10px", justifyContent: "center"}}
              variant="outlined"
        />
       ))}

       </Stack>

      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
      <Stack direction="row" spacing={1}>
      <Chip label={item.onLeave ? "Inactive" : "Active"} variant={item.onLeave ?"outlined":""}/>
      <Chip label={`Hours: ${item.hoursLoggedThisWeek}`}
            variant="outlined" />
      </Stack>
      </CardActions>
    </Card>
      
  ))}
    </>
  );
}
