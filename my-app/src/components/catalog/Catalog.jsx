import React, { useContext } from 'react'
// import { ProductContext } from '../../contexts/ProductContext'
// import Product from '../../components/Product'
import { ProductContext } from '../../contexts/ProductContext'
import Product from '../product/Product'
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

const Catalog = () => {
 //get products from product context
 const { products } = useContext(ProductContext)
 return (
   <Container className='py-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
       {products.map((product) => {
        return <Product product={product} key={product.id} />;
       })}
     </div >
   </Container>
 )
}

export default Catalog
