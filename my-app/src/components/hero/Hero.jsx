import React from 'react';
import boy from '/boy.jpg';
import boy2 from '/boy2.webp';
import cap from '/cap.jpg';
import girl from '/girl.jpg';
import dress from '/dress.jpg';
import dress2 from '/dress2.jpeg';
import man from '/man.jpeg';
import { Box, Button, Grid, Divider } from '@mui/material';
import './Hero.css'
const Hero = () => {
 return (
  <Box mt={'40px'}>
   {/* First Section */}
   <Box sx={{ fontSize: '75px', fontWeight: 'bold', fontFamily: 'Verdana', letterSpacing: '-9px' }} className='heroText'>
    <h1>CLOTHES FOR LIFE,</h1>
    <h1 className='not'>
     &nbsp;&nbsp;NOT LIFE FOR CLOTHES
    </h1>
   </Box>

   {/* Second Section - Grid Container */}
   <Grid container spacing={2} sx={{ display: 'flex', height: '325px', mb: '50px' }} className='section'>
    {/* Left Column - Grid Item (xs=12 on mobile, md=5 on medium screens) */}
    <Grid item xs={12} md={4} sx={{
     height: '100%',
     display: 'flex',
     justifyContent: 'space-between',
     flexDirection: ' column'

    }}>
     <p>SINCE 1996</p>
     <button className='normalButton' >GO TO THE CATALOG</button>
    </Grid>
    <Grid item xs={12} md={2} ></Grid>

    {/* Right Column - Grid Item (xs=12 on mobile, md=7 on medium screens) */}
    <Grid item xs={12} md={5}>
     <Box>
      <img src={boy} alt="boy" style={{ maxWidth: '100%', height: 'auto' }} />
      <h1>
       lifeWear company specializes in the production of high-quality and functional clothing that is ideal for everyday life. The main goal of the company is to create stylish.
      </h1>
     </Box>
    </Grid>
   </Grid>

   <Grid container spacing={2} sx={{ display: 'flex', height: '400px', marginBottom: '100px' }} className='section'>
    {/* Left Column - Grid Item (xs=12 on mobile, md=5 on medium screens) */}
    <Grid item xs={12} md={4}>
     <Box>
      <div class="text-5xl font-extrabold ...">
       <h1 className='bigText'>NEW COLLECTION</h1>
      </div>

      <Box>
      </Box>
     </Box>
    </Grid>
    <Grid item xs={12} md={2} ></Grid>

    {/* Right Column - Grid Item (xs=12 on mobile, md=7 on medium screens) */}
    <Grid item xs={12} md={6} >
     <Box>
      <Box sx={{ display: 'flex' }}>
       <Box >
        <Box sx={{
         height: '400px', display: 'flex',
         flexDirection: 'column',
         justifyContent: 'space-between'
        }}>
         <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end'
         }}>

          <img src={boy2} alt="boy" style={{ width: '170px', height: '200px', marginRight: '5px' }} />
          <img src={cap} alt="boy" className='displayNone' style={{ width: '170px', height: '200px', marginRight: '5px' }} />
         </Box>
         {/* <Box sx={{
          marginLeft: '150px', display: 'flex',
          justifyContent: 'flex-end'
         }}>

          <img src={cap} alt="boy" style={{ width: '130px', height: '200px', marginRight: '5px' }} />
          font-size: 9px;
    font-weight: 600;
    width: 328px;
    margin: 0px;
    font-family: sans-serif;
    letter-spacing: 0px;
    line-height: 12px;
         </Box> */}
         <Box sx={{
          fontSize: '9px',
          fontWeight: '600',
          width: '95%',
          fontFamily: 'sans-serif',
          lineHeight: '12px',
          marginRight: '8px',
          textAlign: 'justify',
          textTransform: 'uppercase'

         }}>
          <p className='normalText'>
           WE PRESENT A NEW COLLECTION OF MINIMALISTIC WARM CLOTHES FOR MEN AND WOMEN, CREATED WITH CURRENT TRENDS AND CLASSIC PATTERNS IN MIND. THESE CLOTHES WILL FIT PERFECTLY INTO A CAPSULE WARDROBE AND ARE SUITABLE FOR VARIOUS SITUATIONS. ALL ITEMS ARE MADE OF HIGH-QUALITY MATERIALS USING BESPOKE AND MADE-TO-MEASURE TECHNOLOGIES, ENSURING A PERFECT FIT AND DURABILITY.          </p>
          <button
           style={{
            marginTop: '5px'
           }} className='normalButton'>View New Collection  <span className='displayNone'>➜</span></button>
         </Box>
        </Box>

       </Box>
       <img src={girl} alt="girl" style={{ width: '220px', height: '400px' }} />
      </Box>
     </Box>
    </Grid>
   </Grid>
   <Grid container spacing={2} sx={{ display: 'flex', height: '400px' }} className='section'>
    {/* Left Column - Grid Item (xs=12 on mobile, md=5 on medium screens) */}
    <Grid item xs={12} md={4}>
     <Box>
      <Box sx={{ display: 'flex' }}>
       <img src={dress} width='50%' />
       <img src={dress2} />
      </Box>
     </Box>
    </Grid>
    <Grid item xs={12} md={2} ></Grid>

    {/* Right Column - Grid Item (xs=12 on mobile, md=7 on medium screens) */}
    <Grid item xs={12} md={5} >
     <Box>
      <Box sx={{ display: 'flex' }}>
       <Box>
        <Divider />
        <h6>FOR HM</h6>
        <Divider />
        <h6>FOR HER</h6>
        <Divider />
        <h6>FOR CHILDREN</h6>
        <Divider />
        <h6>FOOTWEAR</h6>
        <Divider />
        <h6>ACCESSORES</h6>
        <Divider />
       </Box>
      </Box>
     </Box>
    </Grid>
   </Grid>
   <Grid container spacing={2} sx={{ display: 'flex', height: '400px' }} className='section'>
    {/* Left Column - Grid Item (xs=12 on mobile, md=5 on medium screens) */}
    <Grid item xs={12} md={4}>
     <Box>
      <Box sx={{ display: 'flex' }}>
       <img src={man} width='50%' />
       <h5>OUR CELLULAR NETWORKS</h5>
      </Box>
     </Box>
    </Grid>
    <Grid item xs={12} md={2} ></Grid>

    {/* Right Column - Grid Item (xs=12 on mobile, md=7 on medium screens) */}
    <Grid item xs={12} md={5} >
     <Box>
      <Box sx={{ display: 'flex' }}>
       <Box>
        <p>FACEBOOK INSTAGRAM JOIN US TO KEEP UP TO DATE WITH THE LATEST FASHON AND STYLE TREND . RECIVE DISSONUTS AND DARTICPATE IN OUR EVENTS.</p>
        <Button>INSTAGRAM</Button>
       </Box>
       <Box>
        <Button>FACEBOOK</Button>
       </Box>
      </Box>
     </Box>
    </Grid>
   </Grid>
  </Box>
 );
}

export default Hero;
