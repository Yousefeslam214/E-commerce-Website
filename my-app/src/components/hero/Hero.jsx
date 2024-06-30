import React from 'react';
import boy from '/boy.jpg';
import cap from '/cap.jpg';
import girl from '/girl.jpg';
import dress from '/dress.jpg';
import dress2 from '/dress2.jpeg';
import man from '/man.jpeg';
import { Box, Button, Grid, Divider } from '@mui/material';

const Hero = () => {
    return (
        <Box>
            {/* First Section */}
            <Box sx={{ fontSize: '50px', fontWeight: 'bold' }}>
                <h1>clothes for life Not life for clothes</h1>
            </Box>

            {/* Second Section - Grid Container */}
            <Grid container spacing={2}>
                {/* Left Column - Grid Item (xs=12 on mobile, md=5 on medium screens) */}
                <Grid item xs={12} md={5}>
                    <Box>
                        <Box>
                            <p>SINCE 1996</p>
                            <Button sx={{ border: 'black solid 1px', width: '100%', color: 'black' }}>GO TO CATALOG</Button>
                        </Box>
                    </Box>
                </Grid>

                {/* Right Column - Grid Item (xs=12 on mobile, md=7 on medium screens) */}
                <Grid item xs={12} md={7}>
                    <Box>
                        <img src={boy} alt="boy" style={{ maxWidth: '100%', height: 'auto' }} />
                        <h1>
                            lifeWear company specializes in the production of high-quality and functional clothing that is ideal for everyday life. The main goal of the company is to create stylish.
                        </h1>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: '50px' }}>
                {/* Left Column - Grid Item (xs=12 on mobile, md=5 on medium screens) */}
                <Grid item xs={12} md={5}>
                    <Box>
                        <Box>
                            <h1>New Collection</h1>
                        </Box>
                    </Box>
                </Grid>

                {/* Right Column - Grid Item (xs=12 on mobile, md=7 on medium screens) */}
                <Grid item xs={12} md={7} >
                    <Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box>

                                <img src={cap} alt="boy" style={{ width: '200px', height: '150px' }} />
                                <h1>
                                    lifeWear company specializes in the production of high-quality and functional clothing that is ideal for everyday life. The main goal of the company is to create stylish...
                                </h1>
                                <Button>view new Collection</Button>

                            </Box>
                            <img src={girl} alt="boy" style={{ width: '400px', height: '300px' }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: '50px' }}>
                {/* Left Column - Grid Item (xs=12 on mobile, md=5 on medium screens) */}
                <Grid item xs={12} md={5}>
                    <Box>
                        <Box sx={{ display: 'flex' }}>
                            <img src={dress} width='50%' />
                            <img src={dress2} />
                        </Box>
                    </Box>
                </Grid>

                {/* Right Column - Grid Item (xs=12 on mobile, md=7 on medium screens) */}
                <Grid item xs={12} md={7} >
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
            <Grid container spacing={2} sx={{ mt: '50px' }}>
                {/* Left Column - Grid Item (xs=12 on mobile, md=5 on medium screens) */}
                <Grid item xs={12} md={5}>
                    <Box>
                        <Box sx={{ display: 'flex' }}>
                            <img src={man} width='50%' />
                            <h5>OUR CELLULAR NETWORKS</h5>
                        </Box>
                    </Box>
                </Grid>

                {/* Right Column - Grid Item (xs=12 on mobile, md=7 on medium screens) */}
                <Grid item xs={12} md={7} >
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
