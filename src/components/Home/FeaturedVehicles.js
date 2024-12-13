'use client';
import TitleBox from '@/ui/TitleBox';
import { Box, CardMedia, Container, Typography } from '@mui/material';
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { productData } from '@/utils/data';
import Image from 'next/image';
import { Button } from '@/ui/Button';
import { ArrowRightAlt, ArrowRightAltRounded } from '@mui/icons-material';
import Link from 'next/link';
import { imageComming, lineWrap } from '@/style/style';

export default function FeaturedVehicles() {
  return (
    <Box component={'section'} sx={{ py: 10 }}>
      <Container>
        <TitleBox center subTitle={'Our Vehicles'}>
          Wide Range of Products
        </TitleBox>
        <Box
          sx={{
            position: 'relative',
            '--swiper-theme-color': '#FD0102',
            '.swiper-pagination-bullet': {
              bgcolor: 'primary.main',
              opacity: 1,
              borderRadius: 0,
              width: 25,
              height: 4,
              transition: 'all 0.5s ease',
            },
            '.swiper-pagination-bullet-active': {
              background: '#FD0102',
            },
          }}
        >
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={700}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
            }}
          >
            {productData?.map((item, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    mx: 2,
                    mt: 3,
                    mb: 4,
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
                      component={'img'}
                      src={item?.featuredImage}
                      alt={item?.name}
                      height={400}
                      width={600}
                      className="img-fluid"
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
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
