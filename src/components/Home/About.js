import { Button } from '@/ui/Button';
import TitleBox from '@/ui/TitleBox';
import { ArrowRightAltRounded } from '@mui/icons-material';
import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function AboutDetails({ disabledButton = false }) {
  return (
    <Container component={'section'}>
      <Box
        sx={{
          py: 8,
          img: { maxWidth: 450 },
          position: 'relative',
          '.fx-box': {
            bgcolor: 'primary.light',
            color: '#fff',
            height: 150,
            width: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            borderRadius: '100%',
            span: { display: 'block', fontSize: 14 },
            border: '2px dashed  #fff',
            boxShadow: '0px 0px 0px 5px rgb(21,71,122)',
            position: 'absolute',
            top: '30%',
            left: '80%',
            transform: 'translate(-50%,-50%)',
          },
        }}
      >
        <Grid container spacing={6}>
          <Grid item md={6} xs={12}>
            <Box sx={{ display: 'inline-block', position: 'relative' }}>
              <CardMedia
                component={'img'}
                src="/images/about.webp"
                width={500}
                height={500}
                alt="about"
                className="img-fluid"
              />
              <Box className="fx-box">
                <Typography variant="h2" component={'p'}>
                  150+
                  <span>Happy Customer</span>
                </Typography>
              </Box>
            </Box>
          </Grid>{' '}
          <Grid item md={6} xs={12}>
            {/* <TitleBox subTitle={'About Us'} sx={{ h2: { fontSize: 26 } }}>
              FatehEV Driving a Greener Future on Indian Roads
            </TitleBox>  */}
            <TitleBox subTitle={'About Us'} sx={{ h2: { fontSize: 26 } }}>
              We Have Chance Financing (Funding) For Dealers
            </TitleBox>
            <Typography variant="body1"></Typography>{' '}
            <Typography variant="body1">
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
