"use client"

import React from 'react';
import { Box, keyframes } from '@mui/material';
import { styled } from '@mui/system';

// Keyframe animations
const scrollLeft = keyframes`
  0% { background-position: -1920px 0; }
  100% { background-position: 0 0; }
`;

const moveForward = keyframes`
  0% {
    right: -250px;
  }
  100% {
    right: 100%;
  }
`;

// Styled components with shadow effects
const AnimationContainer = styled(Box)({
  width: '100%',
  height: '250px',
  backgroundImage: "url('/images/Moving Slider Image.png')",
  backgroundRepeat: 'repeat-x',
  backgroundSize: 'auto 100%',
  position: 'relative',
  overflow: 'hidden',
  animation: `${scrollLeft} 25s linear infinite`,
  
  // Shadow effects
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    height: '40px',
    zIndex: 2,
    pointerEvents: 'none',
  },
  '&::before': {
    top: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
  },
  '&::after': {
    bottom: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)',
  }
});

const AnimatedElement = styled('img')({
  position: 'absolute',
  bottom: '6px',
  right: '-200px',
  animationName: `${moveForward}`,
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
});

export default function Animation() {
  return (
    <AnimationContainer>
      {/* E-Rickshaw Elements */}
      <AnimatedElement
        src="/images/Moving E-Rickshaw02.png"
        alt="E-Rickshaw"
        sx={{
          height: { xs: '110px', md: '150px' },
          animationDuration: '15s',
          animationDelay: '2s',
        }}
      />

      <AnimatedElement
        src="/images/Moving E-Rickshaw.png"
        alt="E-Rickshaw"
        sx={{
          height: { xs: '110px', md: '150px' },
          animationDuration: '15s',
          animationDelay: '10s',
        }}
      />

      {/* Bicycle Element */}
      <AnimatedElement
        src="/images/output-onlinegiftools.gif"
        alt="Boy on Bicycle"
        sx={{
          height: { xs: '70px', md: '100px' },
          animationDuration: '15s',
          animationDelay: '5s',
          transform: 'scaleX(-1)',
        }}
      />
    </AnimationContainer>
  );
}