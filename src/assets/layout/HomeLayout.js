"use client"
import { Box } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import TopTitleBar from './TopTitleBar';

export default function HomeLayout({ children, title, disabledFooterBox }) {



  return (
    <>
      <Header />
      {title && <TopTitleBar title={title} />}
      <Box
        component={'main'}
        sx={{
          minHeight: ' calc(100vh - 120px)',
          '& p': {
            '+p': {
              mt: 1,
            },
          },
        }}
      >
        {children}
      </Box>
      <Footer disabledFooterBox={disabledFooterBox} />


    </>
  );
}


