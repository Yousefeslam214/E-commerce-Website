import { Box, Typography, Link, Container } from '@mui/material';
import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', background: 'black', color: 'white', p: 3, }} className='footer'>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        mr: '20px'
      }}>
        <Typography className='promotions'>Promotions</Typography>
        <Typography className='promotions'>PROMO CODES</Typography>
        <Typography className='promotions'>GIFT CARDS</Typography>
        <Typography className='promotions'>FIND A STORE</Typography>
        <Typography className='promotions'>BECOME A MEMBER</Typography>
        <Typography className='promotions'>CATALOG</Typography>
      </Box>
      <Box sx={{
        mr: '20px',
      }}>
        <Typography sx={{
          mb: 2,
        }}>Support</Typography>
        <ul style={{ listStyleType: 'none', padding: 0, fontSize: '12px' }}>
          <li><Link href="#" color="inherit" underline="none">GET HELP</Link></li>
          <li><Link href="#" color="inherit" underline="none">ORDER STATUS</Link></li>
          <li><Link href="#" color="inherit" underline="none">DELIVERY</Link></li>
          <li><Link href="#" color="inherit" underline="none">REFUND</Link></li>
          <li><Link href="#" color="inherit" underline="none">PAYMENT METHODS</Link></li>
          <li><Link href="#" color="inherit" underline="none">CONTACT US</Link></li>
        </ul>
      </Box>
      <Box sx={{
        mr: '20px',
      }}>
        <Typography sx={{ mb: 2 }}>Company</Typography>
        <ul style={{ listStyleType: 'none', padding: 0, fontSize: '12px' }}>
          <li><Link href="#" color="inherit" underline="none">ABOUT LIFEWEAR</Link></li>
          <li><Link href="#" color="inherit" underline="none">CAREER</Link></li>
          <li><Link href="#" color="inherit" underline="none">STABILITY</Link></li>
          <li><Link href="#" color="inherit" underline="none">NEWS</Link></li>
          <li><Link href="#" color="inherit" underline="none">GOAL</Link></li>
          <li><Link href="#" color="inherit" underline="none">INVESTORS</Link></li>
        </ul>
      </Box>

      <Box sx={{ color: 'grey' }} className='endOfFooter'>
        <Box sx={{ color: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} >
          <Typography className='cookies' sx={{ mb: '25px' }}>COOKIE SETTINGS | PRIVACY AND COOKIE POLICY</Typography>
          <Typography className='cookies' sx={{ mb: '75px' }}>DETAILED INFORMATION ABOUT THE COMPANY</Typography>
        </Box>
        <Box sx={{ color: 'grey', display: 'inline-flex' }}>
          <Typography className='cookies'>GUIDE TERMS OF USE TERMS OF SALE © 2024 LIFEWEAR, INC. ALL RIGHTS RESERVED</Typography>
        </Box>
      </Box>
    </Box >
  );
}

export default Footer;

