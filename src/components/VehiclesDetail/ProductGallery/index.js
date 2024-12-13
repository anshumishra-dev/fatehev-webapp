'use client';
import React, { useState } from 'react';
import { Box, CardMedia } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

export default function ProductGallery({ data = [{ name: '', image: '' }] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // Use state for thumbs swiper instance

  return (
    <Box
      sx={{
        '.thumbs-swiper': {
          p: 0.2,
          mt: 1,
          '.swiper-slide': {
            borderRadius: 3,
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            border: '2px solid #fff',
          },
          '.swiper-slide-thumb-active': {
            border: '2px solid #fff',
            boxShadow: '0 0 0 1px #FD0102',
          },
        },
      }}
    >
      {/* Main Swiper */}
      <Swiper
        modules={[Thumbs]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        speed={500}
        className="main-swiper"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <CardMedia component="img" image={slide.image} alt={slide.name} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Swiper */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper} // Capture the Swiper instance for thumbs
        spaceBetween={10}
        slidesPerView={4} // Adjust based on how many thumbnails you want visible
        watchSlidesProgress
        className="thumbs-swiper"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <CardMedia component="img" image={slide.image} alt={slide.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
