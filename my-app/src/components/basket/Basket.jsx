import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Container, Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { DeliveryContext } from '../../contexts/DeliveryContext';

const Basket = () => {
    const { cart, total, clearCart } = useContext(CartContext);
    const { addToCartDelivery } = useContext(DeliveryContext);

    const handleAddToCartDelivery = () => {
        addToCartDelivery(cart);
        clearCart(); // Clear the cart after transferring items to delivery
    };

    return (
        <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
            <Typography variant="h4" sx={{ marginBottom: '2rem', textAlign: 'center' }}>
                Your Basket
            </Typography>
            <Grid container spacing={3}>
                {cart.length === 0 ? (
                    <Typography variant="h6" sx={{ margin: 'auto' }}>
                        Your basket is empty.
                    </Typography>
                ) : (
                    cart.map((item) => (
                        <Grid item xs={12} key={item.id}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <img src={item.image} alt={item.title} width="100" />
                                <Typography variant="body1">{item.title}</Typography>
                                <Typography variant="body1">Quantity: {item.amount}</Typography>
                                <Typography variant="body1">${item.price}</Typography>
                            </Box>
                        </Grid>
                    ))
                )}
            </Grid>
            {cart.length > 0 && (
                <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
                    <Button
                        component={Link}
                        to="/delivery"
                        variant="contained"
                        color="primary"
                        sx={{ marginTop: '1rem' }}
                        onClick={handleAddToCartDelivery}
                    >
                        Proceed to Checkout
                    </Button>
                </Box>
            )}
        </Container>
    );
};

export default Basket;
