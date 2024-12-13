'use client';
import { webInfo } from '@/utils';
import { SnackbarProvider } from 'notistack';
import React from 'react';

export default function Providers({ children }) {
  return (
    <SnackbarProvider
      anchorOrigin={
        webInfo?.notification || { vertical: 'top', horizontal: 'center' }
      }
    >
      {children}
    </SnackbarProvider>
  );
}
