import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Container, Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { FavouriteContext } from '../../contexts/FavouriteContext';

const Favourites = () => {
    const { favourite } = useContext(FavouriteContext);
    console.log(favourite)
    return (
        <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
            <Typography variant="h4" sx={{ marginBottom: '2rem', textAlign: 'center' }}>
                Your Favourites Items
            </Typography>
            <Grid container spacing={3}>
                {favourite.length === 0 ? (
                    <Typography variant="h6" sx={{ margin: 'auto' }}>
                        Your basket is empty.
                    </Typography>
                ) : (
                    favourite.map((item) => (
                        <Grid item xs={12} key={item.id}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <img src={item.image} alt={item.title} width="100" />
                                <Typography variant="body1">{item.title}</Typography>
                            </Box>
                            <Link to={"product/" + item.id}>
                                <Button>
                                    go to page
                                </Button>
                            </Link>
                        </Grid>
                    ))
                )}
            </Grid>
            {favourite.length > 0 && (
                <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
                </Box>
            )}

        </Container>
    );
};

export default Favourites;
