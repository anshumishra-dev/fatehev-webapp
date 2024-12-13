import { Button } from '@/ui/Button';
import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

import React from 'react';

export function SlideItem({ subTitle, image, title, bgImage }) {
  return (
    <Box
      sx={{
        with: '100%',
        height: { md: 500, xs: 'calc(100vh - 90px)' },
        bgcolor: 'primary.dark',
        color: '#fff',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        img: {
          width: '100%',
          height: 'auto',
          scale: '1.2',
        },
        ':before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          bgcolor: 'primary.dark',
          mixBlendMode: 'multiply',
          opacity: 0.9,
          top: 0,
          left: 0,
          zIndex: 2,
        },
        ':after': {
          content: '""',
          position: 'absolute',
          width: '100%',
          maxWidth: 500,
          height: '100%',
          bgcolor: 'primary.light',
          opacity: 0.9,
          clipPath: `polygon(40% 0%, 100% 0, 60% 100%, 0% 100%)`,
          top: 0,
          left: { md: '15%', xs: 0 },
          zIndex: 2,
        },
      }}
    >
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                zIndex: 5,
                pt: { xs: 15, md: 0 },
                textAlign: { md: 'unset', xs: 'center' },
              }}
            >
              <Typography variant="h6" component="h2">
                {subTitle}
              </Typography>
              <Typography variant="h2" component="h1" mb={2}>
                {title}
              </Typography>
              <Button variant="contained" color="secondary">
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', zIndex: 5 }}>
              <CardMedia
                component="img"
                src={image}
                alt={title}
                width={700}
                height={500}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export function SlideItem2({ subTitle, image, title, bgImage }) {
  return (
    <Box
      sx={{
        img: {
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        },
      }}
    >
      <Image src={image} alt={title} width={1200} height={600} />
    </Box>
  );
}
