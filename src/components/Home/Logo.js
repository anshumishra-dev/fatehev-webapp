'use client';
import TitleBox from '@/ui/TitleBox';
import { webInfo } from '@/utils';
import { Box, Container } from '@mui/material';
import React from 'react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';

export default function Logo() {
  const data = [
    {
      name: 'Livguard',
      src: '/images/vendors/Livguard.webp',
    },
    {
      name: 'Tata Steel',
      src: '/images/vendors/tata steel.webp',
    },
    // {
    //   name: 'Trontek',
    //   src: '/images/vendors/trontek.webp',
    // },
    {
      name: 'CY Gold',
      src: '/images/vendors/cy-gold.webp',
    },
    {
      name: 'Eastman',
      src: '/images/vendors/eastman.webp',
    },
    // {
    //   name: 'Jindal Steel and Power',
    //   src: '/images/vendors/Jindal_Steel_and_Power.webp',
    // },
    {
      name: 'Leader Energy To Perform',
      src: '/images/vendors/leader-energy-to-perform.webp',
    },
    {
      name: 'Akira',
      src: '/images/vendors/akira.webp',
    },
    {
      name: 'Minda',
      src: '/images/vendors/minda.webp',
    },
    {
      name: 'CEAT',
      src: '/images/vendors/ceat.webp',
    },
    {
      name: 'JSL',
      src: '/images/vendors/jsl.png',
    },
  ];
  return (
    <Box
      component={'section'}
      sx={{
        pb: 10,
        pt: 10,
        bgcolor: 'rgb(239,243,245)',
      }}
    >
      <Container>
        <Box mb={5}>
          <TitleBox center subTitle={webInfo?.name + ' Vendors'}>
            Trusted Vendors of {webInfo?.name}
          </TitleBox>
        </Box>
        <Box>
          <Swiper
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
              1200: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, el: '.logo-pagination' }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    width: 1,
                    height: 120,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: '#f7f7f7',
                    img: {
                      width: 'auto',
                      maxHeight: 100,
                      height: 'auto',
                      objectFit: 'contain',
                      maxWidth: 150,
                      mixBlendMode: 'darken',
                      filter: 'contrast(120%)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={200}
                    height={100}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
