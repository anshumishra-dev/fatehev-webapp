'use client';
import React, { useMemo, useState } from 'react';
import { Box, CardMedia, Typography } from '@mui/material';

const ProductGallery = ({data}) => {
  const [selectedColor, setSelectedColor] = useState('choclate'); 
  
  // Brand color scheme
  const primaryColor = '#0A3560';
  const secondaryColor = '#FD0102';
  const white = '#ffffff';
  const darkLight = '#757575';
  
  // const staticImages = {
  //   red: '/images/products/_DSC8900.png',
  //   choclate: '/images/products/_DSC8902.png',
  //   lightgreen: '/images/products/_DSC8903.png',
  //   green: '/images/products/_DSC89004.png',
  //   purple: '/images/products/_DSC89001.png'
  // };

  const colorSwatches = {
    red: '#C62828',
    choclate: '#212121',
    lightgreen: '#2E7D32',
    green: '#00695C',
    purple: '#1502a6'
  };

  const colorNames = {
    red: "Red",
    choclate: "Black",
    green: "Teal",
    lightgreen: "Camo Green",
    purple: "Purple"
  };

  // Map from backend data: detect color in file name
  const backendImagesByColor = useMemo(() => {
    const map = {};
    if (Array.isArray(data)) {
      data.forEach((item) => {
        const imgLower = item.image.toLowerCase();
        if (imgLower.includes('red')) map.red = item.image;
        else if (imgLower.includes('black') || imgLower.includes('choclate')) map.choclate = item.image;
        else if (imgLower.includes('green') && imgLower.includes('light')) map.lightgreen = item.image;
        else if (imgLower.includes('green')) map.green = item.image;
        else if (imgLower.includes('purple')) map.purple = item.image;
      });
    }
    return map;
  }, [data]);

// Merge backend images with static fallback
const colorImages = {
  red: backendImagesByColor.red,
  choclate: backendImagesByColor.choclate,
  lightgreen: backendImagesByColor.lightgreen,
  green: backendImagesByColor.green,
  purple: backendImagesByColor.purple
};

  return (
    <Box
      sx={{
        maxWidth: '800px',
        mx: 'auto',
        p: { xs: 1.5, sm: 3 },
        borderRadius: '12px',
        boxShadow: `0 10px 30px ${primaryColor}20`,
        backgroundColor: white,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'center', sm: 'center' },
          justifyContent: 'space-between',
          mb: 3,
          p: 2,
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
          boxShadow: `0 4px 10px ${primaryColor}10`,
          gap: { xs: 2, sm: 0 }
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600, 
            mb: { xs: 1, sm: 0 },
            color: primaryColor
          }}
        >
          Choose a color
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          gap: 1.5,
          flexWrap: 'wrap',
          maxWidth: { xs: '100%', sm: '70%' },
          justifyContent: { xs: 'flex-start', sm: 'flex-end' }
        }}>
          {Object.keys(colorImages).map(color => (
            <Box
              key={color}
              onClick={() => setSelectedColor(color)}
              sx={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                bgcolor: colorSwatches[color],
                cursor: 'pointer',
                border: '3px solid white',
                boxShadow: `0 2px 4px ${primaryColor}60`,
                position: 'relative',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.2)',
                  zIndex: 2,
                  boxShadow: `0 4px 8px ${primaryColor}40`
                },
                '&::after': {
                  position: 'absolute',
                  bottom: '-24px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '0.7rem',
                  whiteSpace: 'nowrap',
                  color: darkLight,
                  fontWeight: 500,
                  opacity: 0.9
                }
              }}
              title={colorNames[color]}
            />
          ))}
        </Box>
      </Box>

      <CardMedia 
        component="img" 
        src={colorImages[selectedColor] || colorImages.choclate}
        alt={`E-Rickshaw in ${colorNames[selectedColor] || ''} color`}
        sx={{
          width: '100%',
          height: 'auto',
          maxHeight: { xs: '380px', sm: '560px' },
          objectFit: 'contain',
          borderRadius: '8px',
          border: `1px solid ${primaryColor}20`
        }}
      />
    </Box>
  );
};

export default ProductGallery;