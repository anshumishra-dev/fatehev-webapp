import HomeLayout from '@/assets/layout/HomeLayout';
import React from 'react';
import AboutDetails from '../Home/About';
import WhyUs from '../Home/WhyUs';
import { Box, Container, Grid, Typography } from '@mui/material';

export default function About() {
  return (
    <HomeLayout title={'About Us'}>
      <AboutDetails disabledButton />
      <Box component={'section'} sx={{ pb: 7 }}>
        <Container>
          <Grid
            container
            spacing={6}
            sx={{
              h3: {
                color: 'primary.main',
                span: { color: 'secondary.main' },
                mb: 1,
              },
            }}
          >
            <Grid item md={6} xs={12}>
              <Typography variant="h3">
                Our <span>Mission</span>
              </Typography>{' '}
              <Typography variant="body1">
                At Fateh EV, our mission is to drive the transition towards
                sustainable urban mobility by offering innovative, reliable, and
                eco-friendly electric vehicles. We are committed to reducing
                carbon emissions and promoting green energy solutions, ensuring
                that our customers and communities benefit from cleaner air and
                a healthier environment. Through our dedication to quality and
                affordability, we strive to make electric vehicles accessible to
                all, fostering a cleaner and greener India.
              </Typography>
            </Grid>{' '}
            <Grid item md={6} xs={12}>
              <Typography variant="h3">
                Our <span>Vision</span>
              </Typography>{' '}
              <Typography variant="body1">
                Our vision is to become a global leader in the electric vehicle
                industry, setting the standard for innovation, sustainability,
                and customer satisfaction. We envision a future where electric
                vehicles are the norm, contributing to a significant reduction
                in urban pollution and enhancing the quality of life in cities
                across the world. By expanding our reach and continuing to
                improve our products, we aim to be at the forefront of the green
                transportation revolution.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <WhyUs />
    </HomeLayout>
  );
}
