import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Item=({ number, title, timePeriod,week,month ,icon}) =>{
  return (
    
    <Card style={{width: '300px', margin: '0 auto'}} >
   
      <CardContent>
        <div style={{display:"flex"}}>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
         <div>{number}</div>
         <div style={{flexDirection:"column"}}>{icon}</div>
         
        </Typography></div>
       
        <Typography sx={{ color: 'text.secondary' }}></Typography>
        <Typography variant="body2">
          <div>{title}</div>
          
        </Typography>
        <hr></hr>
     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingTop:"20px"}}>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }} style={{
      border: "1px solid gray", // Add border
      borderRadius: "50%", // Make it round
      padding: "8px 16px", // Add some padding
      backgroundColor: "#f5f5f5", // Optional background color
      }}>
         <div>{timePeriod}</div>
        </Typography>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }} style={{
      border: "1px solid gray", // Add border
      borderRadius: "50%", // Make it round
      padding: "8px 16px", // Add some padding
      backgroundColor: "#f5f5f5", // Optional background color
      }}>
         <div>{week}</div>
        </Typography>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }} style={{
      border: "1px solid gray", // Add border
      borderRadius: "50%", // Make it round
      padding: "8px 16px", // Add some padding
      backgroundColor: "#f5f5f5", // Optional background color
      }}>
         <div>{month}</div>
        </Typography></div>
         
        
        </CardContent>
    </Card>
  );
}
export default Item