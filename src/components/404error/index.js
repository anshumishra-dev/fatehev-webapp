import HomeLayout from '@/assets/layout/HomeLayout';
import { Button } from '@/ui/Button';
import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function PageNotFound() {
  return (
    <HomeLayout disabledFooterBox>
      <Container
        component={'section'}
        sx={{
          textAlign: 'center',
          minHeight: 'calc(100vh - 120px)',
          py: 7,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Typography
            variant="h1"
            component="h1"
            sx={{ color: 'primary.dark', span: { color: 'secondary.dark' } }}
          >
            4<span>0</span>4
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ color: 'secondary.dark' }}
          >
            Page Not Found
          </Typography>
          <Typography variant="body1" gutterBottom>
            Sorry, the page you are looking for does not exist.
          </Typography>
          <Link href="/" passHref>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Go to Homepage
            </Button>
          </Link>
        </Box>
      </Container>
    </HomeLayout>
  );
}
