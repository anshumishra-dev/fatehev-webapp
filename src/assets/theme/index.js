'use client';
import { webInfo } from '@/utils';
import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    ...webInfo.colors,
  },
  typography: {
    ...webInfo.typography,
  },
});

theme = responsiveFontSizes(theme);
export default theme;
