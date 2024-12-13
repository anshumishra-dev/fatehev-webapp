import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import Breadcrumb from './Breadcrumb';

export default function TopTitleBar({ title }) {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/bg-2.webp")',
        minHeight: 40,
        backgroundSize: 'cover',
        py: 7,
        position: 'relative',
        color: '#fff',
        ':before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: '#000',
          opacity: 0.8,
          zIndex: 1,
        },
        '.MuiContainer-root': {
          position: 'relative',
          zIndex: 3,
        },
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h1"> {title}</Typography>
          <Breadcrumb />
        </Stack>
      </Container>
    </Box>
  );
}
