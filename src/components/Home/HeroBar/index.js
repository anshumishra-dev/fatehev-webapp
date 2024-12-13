'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { herobarData } from '@/utils/data';

import { Box } from '@mui/material';
import { SlideItem2 } from './SlideItem';

export default function HeroBar() {
  return (
    <Box
      sx={{
        position: 'relative',
        '--swiper-theme-color': '#FD0102',
        '.swiper-pagination-bullet': {
          background: '#fff',
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
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={700}
      >
        {herobarData?.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideItem2
              title={item.title}
              subTitle={item.subTitle}
              image={item.image}
              bgImage={item.bgImage}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
