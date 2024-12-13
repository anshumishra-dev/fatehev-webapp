'use client';
import HomeLayout from '@/assets/layout/HomeLayout';
import { CardMedia, Container, ImageList, ImageListItem } from '@mui/material';
import { SlideshowLightbox } from 'lightbox.js-react';
// import 'lightbox.js-react/dist/index.css';
import React from 'react';

const galleryImages = [];
export default function PhotoGallery() {
  return (
    <HomeLayout title="Photo Gallery">
      <Container sx={{ mb: 7 }}>
        <SlideshowLightbox
          lightboxIdentifier="l2"
          framework="next"
          images={galleryImages?.map((img) => ({
            src: img?.image,
            alt: images?.title,
          }))}
        >
          <ImageList
            variant="masonry"
            gap={15}
            sx={{
              columnCount: {
                md: '3 !important',
                xs: '2 !important',
                lg: '4 !important',
              },
            }}
          >
            {galleryImages?.map((image, i) => (
              <ImageListItem
                key={i}
                sx={{
                  '& img': {
                    borderRadius: 0.8,
                    border: '1px solid #eee',
                    height: 'auto',
                    width: '100%',
                  },
                }}
              >
                <CardMedia
                  component={'img'}
                  data-lightboxjs="l2"
                  src={`${image.image}`}
                  alt={`${image.title} Image ${i}`}
                ></CardMedia>
              </ImageListItem>
            ))}
          </ImageList>
        </SlideshowLightbox>
      </Container>
    </HomeLayout>
  );
}
