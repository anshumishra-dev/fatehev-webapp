'use client';
import TitleBox from '@/ui/TitleBox';
import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Button } from '@/ui/Button';
import { ArrowRightAltRounded } from '@mui/icons-material';
import Link from 'next/link';
import { imageComming } from '@/style/style';
import { productData } from '@/utils/data';

export default function FeaturedVehicles(disabledFooterBox) {
  const cardColors = [
    'rgb(224, 232, 253)',  // Very light blue
    'rgba(255, 240, 233, 0.8)',  // Very light orange
  ];

  return (
    <Box title={'Our Products'} disabledFooterBox>
      <Box my={7} component={'section'}>
        <Container>
          <TitleBox center subTitle={'The joy ride is for everyone.'}>
            Our Featured Product
          </TitleBox>

          <Grid container spacing={4} mt={0}>
            {productData?.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0px -10px 15px -5px rgba(0,0,0,0.1), 0px 10px 15px 10px rgba(0,0,0,0.1)',
                    top: 0,
                    transition: 'all 0.5s ease',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    borderRadius: 3,
                    ':hover': {
                      top: -10,
                      boxShadow: '0px -15px 20px -5px rgba(0,0,0,0.1), 0px 15px 20px 0px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      width: { xs: '100%', md: '50%' },
                      flexShrink: 0,
                      ...(item?.commingSoon && imageComming),
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: { xs: 3, md: 0 },
                      borderBottomLeftRadius: { xs: 0, md: 3 }
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={item?.featuredImage}
                      alt={item?.name}
                      sx={{
                        width: '100%',
                        height: { xs: 300, md: 400 },
                        objectFit: 'cover',
                      }}
                      className="img-fluid"
                    />
                  </Box>
                  <Box 
                    sx={{ 
                      px: { xs: 2, sm: 4 },
                      py: 3,
                      width: { xs: '100%', md: '50%' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      backgroundColor: cardColors[index % cardColors.length],
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderBottomRightRadius: 3,
                      borderTopRightRadius: { xs: 0, md: 3 },
                      borderBottomLeftRadius: { xs: 3, md: 0 }
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      mb={1}
                      sx={{
                        fontWeight: 800,
                        color: 'primary.dark',
                        fontSize: { xs: '1.75rem', sm: '2rem' },
                        letterSpacing: -0.5,
                        lineHeight: 1.2
                      }}
                    >
                      {item?.name}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      mb={3}
                      sx={{
                        color: 'text.secondary',
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        fontWeight: 400
                      }}
                    >
                      {item?.description ||
                        'Experience the unmatchable power and efficiency. Trusted by millions of people.'}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                      <Button
                        variant="contained"
                        size="medium"
                        component={item?.commingSoon ? 'button' : Link}
                        {...(!item?.commingSoon && {
                          href: `/vehicles/${item?.slug}`,
                        })}
                        disabled={item?.commingSoon}
                        endIcon={<ArrowRightAltRounded />}
                        sx={{
                          borderRadius: 2,
                          fontWeight: 700,
                          px: 4,
                          py: 1.5,
                          boxShadow: 2,
                          '&:hover': {
                            boxShadow: 4,
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        {item?.commingSoon ? 'Coming Soon' : 'View Details'}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}