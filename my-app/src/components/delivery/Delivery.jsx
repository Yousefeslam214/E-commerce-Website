import React, { useContext } from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { DeliveryContext } from '../../contexts/DeliveryContext';
import { CartContext } from '../../contexts/CartContext';

const Delivery = () => {
  const { cart } = useContext(CartContext);

  const { itemDelivery, itemAmount } = useContext(DeliveryContext);
  console.log(itemDelivery)

  return (
    <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
      {itemDelivery.length === 0 ? (<Typography variant="h4" sx={{ marginBottom: '2rem', textAlign: 'center' }}>
        You don't have item to delivery
      </Typography>):(
          <Typography variant="h4" sx={{ marginBottom: '2rem', textAlign: 'center' }}>
            Your item to delivery
          </Typography>
      )
      }     
      <Grid container spacing={3}>
        
        {itemDelivery.map((group) => (
          <React.Fragment key={group.category}>
            <Typography variant="h6" sx={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
              Category: {group.category}
            </Typography>
            {group.products.map((product) => (
              <Grid item xs={12} key={product.id}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <img src={product.image} alt={product.title} width="100" />
                  <Typography variant="body1">{product.title}</Typography>
                  <Typography variant="body1">Quantity: {product.amount}</Typography>
                  <Typography variant="body1">${product.price}</Typography>
                </Box>
              </Grid>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default Delivery;
