import HomeLayout from '@/assets/layout/HomeLayout';
import { imageComming, lineWrap } from '@/style/style';
import { Button } from '@/ui/Button';
import TitleBox from '@/ui/TitleBox';
import { productData } from '@/utils/data';
import { ArrowRightAltRounded } from '@mui/icons-material';
import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function Vehicles() {
  return (
    <HomeLayout title={'Our Products'} disabledFooterBox>
      <Box my={7} component={'section'}>
        <Container>
          <TitleBox center subTitle={'The joy ride is for everyone.'}>
            Wide Range of Products
          </TitleBox>

          <Grid container spacing={4} mt={0}>
            {productData?.map((item, index) => (
              <Grid item md={4} xs={12} key={index}>
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0px 10px 15px 0px rgb(0 0 0 / 10%)',
                    top: 0,

                    transition: 'all 0.5s ease',
                    ':hover': {
                      top: -10,
                      boxShadow: '0px 10px 15px 0px rgb(0 0 0 / 20%)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      ':before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.2)',
                        zIndex: 1,
                      },
                      ...(item?.commingSoon && imageComming),
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={item?.featuredImage}
                      alt={item?.name}
                      height={400}
                      width={600}
                      className="img-fluid"
                      priority
                    />
                  </Box>
                  <Box sx={{ px: 2, py: 2 }}>
                    <Typography variant="h4" mb={1}>
                      {item?.name}
                    </Typography>
                    <Typography variant="body1" mb={2} sx={lineWrap(3)}>
                      {item?.description ||
                        'Experience the unmatchable power and efficiency. Trusted by millions of people.'}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      component={item?.commingSoon ? 'button' : Link} // Use 'component' for Material-UI's Button
                      {...(!item?.commingSoon && {
                        href: `/vehicles/${item?.slug}`,
                      })} // Add href dynamically
                      disabled={item?.commingSoon} // Disable the button if `commingSoon` is true
                      endIcon={<ArrowRightAltRounded />}
                    >
                      {item?.commingSoon ? 'Coming Soon' : 'View Details'}
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </HomeLayout>
  );
}
