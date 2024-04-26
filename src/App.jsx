import { useState } from 'react'
import Title from './components/title.jsx'
import MediaCard from './components/Employee_card.jsx'
import Container from '@mui/material/Container';
import data from './Data/data.js'
import './App.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';





function App() {
  
  const [onLeave,setLeave] = useState(false);
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const filteredData = onLeave ? data.filter((data)=>data.onLeave) : data;

  const handleToggle =(event)=>{
    setLeave(event.target.checked);
    console.log(event.target.checked);
  }
  

  console.log(onLeave);
  
  return (
    

  <Container fixed>
   <Typography variant="h2" component="h3">
    Employee Records
   </Typography>

    <Stack spacing={2} direction="row">
      <FormControlLabel control={<Switch {...label} checked={onLeave} onClick={handleToggle} />} label="Out Of Office" />
    </Stack>
     <MediaCard data={filteredData} /> 
  </Container>
   
      
    
  );
 
}


export default App


/* <Button variant="contained" checked={onLeave} onClick={handleToggle}>Active </Button>
      <Button variant="outlined" checked={onLeave} onClick={handleToggle}>Inactive</Button>
*/