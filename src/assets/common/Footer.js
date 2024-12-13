'use client';
import { webInfo } from '@/utils';
import { headerMenu } from '@/utils/data';
import {
  Facebook,
  Instagram,
  Label,
  PhoneInTalk,
  X,
} from '@mui/icons-material';
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function Footer({ disabledFooterBox = false }) {
  const data = [
    {
      label: 'Happy Customers',
      number: 700,
    },
    {
      label: 'Vehicles In Stock',
      number: 70,
    },
    {
      label: 'Dealers',
      number: 100,
    },
    {
      label: 'Available Cities',
      number: 40,
    },
  ];
  return (
    <>
      {!disabledFooterBox && (
        <Box
          component={'section'}
          sx={{
            py: 10,
            bgcolor: 'secondary.dark',
            backgroundImage: 'url(/images/map.png)',
            backgroundBlendMode: 'color-dodge',
          }}
        >
          <Container>
            <Grid container spacing={6}>
              {data.map((item, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box sx={{ color: '#fff', textAlign: 'center' }}>
                    <Typography variant="h2">{item?.number}+</Typography>
                    <Typography variant="body1">{item?.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}
      <Box
        vrant="footer"
        sx={{
          bgcolor: 'primary.dark',
          color: '#fff',
          pt: 7,
          '.MuiDivider-root ': {
            borderColor: 'rgb(255,255,255,0.23)',
          },
          span: { color: 'secondary.main' },
          '.MuiListItemText-secondary': {
            color: '#fff',
          },
          '.MuiListItemText-primary': {
            color: 'secondary.main',
            fontWeight: 600,
          },
          '.MuiIconButton-root': {
            bgcolor: '#fff',
            borderRadius: 0,
            svg: {
              fontSize: 22,
              color: 'secondary.main',
            },
            transition: 'all 1s ease',
            '&:hover': {
              bgcolor: '#f7f7f7',
              borderRadius: 50,
            },
          },
          '.MuiMenuItem-root': {
            transition: '0.3s',
            '&:hover, &.active': {
              fontWeight: 700,
              color: 'secondary.main',
              borderRadius: 2,
            },
          },
        }}
      >
        <Box>
          <Container>
            <Grid container spacing={6} mb={7}>
              <Grid item xs={12} md={3}>
                <Typography variant="h4" mb={2} fontWeight={700}>
                  About <span>FatehEV</span>
                </Typography>
                <Typography variant="body2" mb={2}>
                  At Fateh EV, we're more than just a company; we're a movement
                  towards a cleaner, greener, and more sustainable future.
                </Typography>
                <Stack direction="row" spacing={1} alignItems={'center'}>
                  <PhoneInTalk />
                  <Box>
                    <Typography
                      variant="h4"
                      component={'a'}
                      href={`tel:${webInfo?.phone[0]}`}
                    >
                      {webInfo?.phone[0]}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="secondary.main"
                      fontWeight={700}
                    >
                      Got Questions? Call us 24/7
                    </Typography>
                  </Box>{' '}
                </Stack>
              </Grid>
              <Grid item md={3}>
                <Typography variant="h4" mb={2}>
                  Working Hours
                </Typography>
                <List disablePadding>
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Monday - Friday"
                      secondary="9:00 AM - 5:00 PM"
                    />
                  </ListItem>{' '}
                  <ListItem disablePadding>
                    <ListItemText
                      primary="Saturday"
                      secondary="9:00 AM - 5:00 PM"
                    />
                  </ListItem>{' '}
                  <ListItem disablePadding>
                    <ListItemText primary="Sunday" secondary="Closed" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={3}>
                <Typography variant="h4" mb={2}>
                  Navigation
                </Typography>
                <List disablePadding>
                  {headerMenu?.manu?.map((item, index) => (
                    <Link key={index} href={item.url}>
                      <MenuItem>{item.name}</MenuItem>
                    </Link>
                  ))}
                  <Link href={'/privacy-policy'}>
                    <MenuItem>Privacy Policy</MenuItem>
                  </Link>
                </List>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="h4" mb={2}>
                  Contact Us
                </Typography>
                <ListItemText primary="Address:" secondary={webInfo?.address} />
                <ListItemText
                  primary="Email:"
                  secondary={
                    <a href={`mailto:${webInfo?.email}`}>{webInfo?.email}</a>
                  }
                />
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                  <IconButton
                    href={webInfo?.socialNetwork?.facebook}
                    component={'a'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook />
                  </IconButton>
                  <IconButton
                    href={webInfo?.socialNetwork?.x}
                    component={'a'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <X />
                  </IconButton>
                  <IconButton
                    href={webInfo?.socialNetwork?.instagram}
                    component={'a'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Divider />
        <Box sx={{ py: 3 }}>
          <Container>
            <Stack
              direction={{ md: 'row', xs: 'column' }}
              justifyContent={{ md: 'space-between', xs: 'center' }}
              alignItems={'center'}
              spacing={2}
            >
              <Typography variant="body1"> {webInfo?.copyright}</Typography>
              <Typography
                variant="body1"
                sx={{
                  a: {
                    color: '#FFAB19',
                    textDecoration: 'none',
                    transition: '0.3s',
                    ':hover': {
                      textDecoration: 'underline',
                    },
                  },
                }}
              >
                Design and develop by{' '}
                <a
                  href="http://onlineindias.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  OnlineIndias
                </a>
              </Typography>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
