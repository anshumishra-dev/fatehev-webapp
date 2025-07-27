import { Button } from '@/ui/Button';
import TitleBox from '@/ui/TitleBox';
import { ArrowRightAltRounded } from '@mui/icons-material';
import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function AboutDetails({ disabledButton = false }) {

  const primaryColor = 'rgb(21,71,122)';
  
  return (
    <Container component={'section'}>
      <Box
        sx={{
          py: 7,
          position: 'relative',
        }}
      >
        <Grid container spacing={6}>
          <Grid item md={6} xs={12}>
            <Box 
              sx={{ 
                display: 'inline-block', 
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                border: '5px solid white', // Reverted to original white border
                height: '460px',
                width: '100%',
                '&:hover': {
                  boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(45deg, ${primaryColor}10 0%, rgba(255,255,255,0.1) 100%)`,
                  zIndex: 1,
                }
              }}
            >
              <CardMedia
                component={'img'}
                src="/images/about-us-image.jpg"
                alt="about"
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  }
                }}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <TitleBox 
              subTitle={'About Us'} 
              sx={{ 
                h2: { 
                  fontSize: 26,
                  color: primaryColor 
                } 
              }}
            >
              We Have Chance Financing (Funding) For Dealers
            </TitleBox>
            <Typography variant="body1" mb={2}>
              At Fateh EV, we're more than just a company; we're a movement
              towards a cleaner, greener, and more sustainable future. Founded
              in 2023 and based in India, we operate under the esteemed Sidana
              Industry, a name synonymous with quality and innovation. Our
              mission is to reduce urban pollution while providing affordable,
              reliable, and efficient vehicles that cater to the diverse needs
              of our customers.
            </Typography>
            <Typography variant="body1" mb={2}>
              With years of experience in the electric vehicle industry,
              professional expertise, and a strong client base, Fateh EV has
              demonstrated continued development and has successfully met
              customer requirements, becoming one of the leading brands in the
              EV industry. Backed by Sidana Industry, we are committed to
              enhancing the quality and range of our products to meet the
              evolving needs of our customers and to drive the electric vehicle
              revolution forward.
            </Typography>
            <Link href="/about" passHref>
              {!disabledButton ? (
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  endIcon={<ArrowRightAltRounded />}
                >
                  Read More
                </Button>
              ) : (
                <Typography variant="body1">
                  In addition to offering top-tier e-rickshaws, we empower
                  entrepreneurs by providing lucrative opportunities to become
                  authorized dealers of Fateh EV products.
                </Typography>
              )}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

