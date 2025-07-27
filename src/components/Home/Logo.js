'use client';
import TitleBox from '@/ui/TitleBox';
import { webInfo } from '@/utils';
import React from 'react';
import { Box, Container, Typography, alpha } from '@mui/material';
import Image from 'next/image';

export default function Logo() {
  const data = [
    {
      name: 'Livguard',
      src: '/images/vendors/livguards.webp',
    },
    {
      name: 'Tata Steel',
      src: '/images/vendors/tata steel.webp',
    },
    {
      name: 'CY Gold',
      src: '/images/vendors/cy-gold.webp',
    },
    {
      name: 'Akira',
      src: '/images/vendors/akira.webp',
      customSize: true,
      xsSize: { width: 70, height: 35 },
      mdSize: { width: 100, height: 50 }
    },
    {
      name: 'Leader Energy To Perform',
      src: '/images/vendors/leader-energy-to-perform.webp',
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

  // Colors from your theme
  const primaryColor = "#0A3560"; // Dark blue
  const secondaryColor = "#FD0102"; // Red
  const accentColor = "#F7B500"; // Gold

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 1, md: 4 },
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${alpha(primaryColor, 0.03)} 0%, ${alpha(accentColor, 0.03)} 100%)`,
        '&:before, &:after': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: { xs: '40px', sm: '60px', md: '100px' },
          zIndex: 2,
          background: `linear-gradient(90deg, ${alpha(primaryColor, 0.1)} 0%, transparent 100%)`
        },
        '&:before': {
          left: 0,
        },
        '&:after': {
          right: 0,
          transform: 'rotate(180deg)',
        }
      }}
    >
      <Container>
        <TitleBox
        center
          subTitle="Our Trusted Partners"
          sx={{ 
            h2: { 
              fontSize: { xs: '1.5rem', md: '2.25rem' },
              color: primaryColor,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              mb: 4
            },
            h6: {
              color: accentColor,
              fontWeight: 600,
              letterSpacing: '1px'
            }
          }}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          Premium Vendors of {webInfo?.name || "FatehEV"}
        </TitleBox>
        
        {/* Animation Container */}
        <Box sx={{
          position: 'relative',
          height: { xs: 80, md: 140 },
          overflow: 'hidden',
          mb: { xs: 1, md: 2 },
          mx: 'auto',
          maxWidth: '1600px'
        }}>
          {/* Scrolling Content */}
          <Box sx={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            animation: 'scroll 30s linear infinite',
            '@keyframes scroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' }
            },
            '&:hover': {
              animationPlayState: 'paused'
            }
          }}>
            {/* Double the content for seamless looping */}
            {[...data, ...data].map((item, index) => {
              // Calculate image dimensions based on screen size
              let imgWidth, imgHeight;
              
              if (item.customSize) {
                // Use custom sizes for Akira
                imgWidth = { xs: item.xsSize?.width || 70, md: item.mdSize?.width || 100 };
                imgHeight = { xs: item.xsSize?.height || 35, md: item.mdSize?.height || 50 };
              } else {
                // Default sizes for other logos
                imgWidth = { xs: 100, md: 150 };
                imgHeight = { xs: 50, md: 75 };
              }
              
              return (
                <Box
                  key={index}
                  sx={{
                    width: { xs: 120, sm: 140, md: 200 },
                    height: { xs: 60, sm: 80, md: 120 },
                    mx: { xs: 1, sm: 1.5, md: 2 },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: alpha(primaryColor, 0.03),
                    borderRadius: 2,
                    border: `1px solid ${alpha(primaryColor, 0.1)}`,
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 6px 15px ${alpha(primaryColor, 0.15)}`,
                      bgcolor: alpha(accentColor, 0.05),
                      borderColor: alpha(accentColor, 0.3),
                    }
                  }}
                >
                  <Box sx={{
                    position: 'relative',
                    width: imgWidth,
                    height: imgHeight,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Image
                      src={item.src}
                      alt={item.name}
                      fill
                      style={{
                        objectFit: 'contain',
                        mixBlendMode: 'multiply',
                        filter: 'contrast(120%)',
                      }}
                      sizes="(max-width: 600px) 100px, (max-width: 960px) 150px, 200px"
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}