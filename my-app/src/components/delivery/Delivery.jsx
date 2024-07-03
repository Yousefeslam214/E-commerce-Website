import React, { useContext } from 'react';
import { Container, Box, Typography, Button, Grid, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { DeliveryContext } from '../../contexts/DeliveryContext';
import { CartContext } from '../../contexts/CartContext';
import './Delivery.css'

const Delivery = () => {
 const { cart } = useContext(CartContext);

 const { itemDelivery, itemAmount, deliverySessions, addToCartDelivery } = useContext(DeliveryContext);
 console.log(deliverySessions)


 return (
  <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
   {deliverySessions.length === 0 ? (
    <Typography variant="h4" sx={{ marginBottom: '2rem', textAlign: 'center' }}>
     You don't have item to delivery
    </Typography>) : (
    <Typography variant="h4" sx={{ marginBottom: '2rem', textAlign: 'center' }}>
     Your item to delivery
    </Typography>
   )}
   <Grid container spacing={3} >
    <Box>
     {deliverySessions.map((session, sessionIndex) => (
      <div key={sessionIndex}>
       <Box sx={{ display: 'flex', mb: 2 }}>
        {session.map((item, itemIndex) => (
         <Grid key={`${sessionIndex}-${itemIndex}`} width="50px !important" className='itemOfDelivery'>
          <img src={item.image} alt={item.title} width="50" />
         </Grid>
        ))}
       </Box>
       <Grid className='lineOfDelivery' sx={{ marginBottom: '2rem', textAlign: 'center' }}item xs={12}>your items are on the way to you </Grid>
      </div>
     ))}
    </Box>
   </Grid>
  </Container>
 );
};

export default Delivery;

