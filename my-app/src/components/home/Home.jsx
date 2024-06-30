import React, { useContext } from 'react'
// import { ProductContext } from '../../contexts/ProductContext'
// import Product from '../../components/Product'
import { ProductContext } from '../../contexts/ProductContext'
import Product from '../product/Product'
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Hero from '../hero/Hero';

const Home = () => {
    //get products from product context
    const { products } = useContext(ProductContext)
    console.log(products)
    return (
        <Box>
            <Container>
                <Hero/>
{/* 
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

                    {products.map((product) => {
                        return <Product product={product} key={product.id} />;
                    })}
                </Box> */}
            </Container>
        </Box>
    )
}

export default Home
