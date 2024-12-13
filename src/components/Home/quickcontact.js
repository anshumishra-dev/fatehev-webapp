'use client';
import { webInfo } from '@/utils';
import { PhoneInTalkRounded } from '@mui/icons-material';
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

export default function Quickcontact() {
  return (
    <Box component={'section'}>
      <Container>
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            py: 7,
            px: { md: 7, xs: 4 },
            color: '#fff',
            borderRadius: 3,
            backgroundImage: 'url(/images/quick-contact-bg.webp)',
            backgroundSize: 'cover',
            boxShadow: `0px 5px 65px  ${webInfo?.colors?.primary.light}50`,
          }}
        >
          <Grid container spacing={6} alignItems={'center'}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" mb={2}>
                Quick Contact
              </Typography>
              <Typography variant="body1">
                If you have any questions, contact us immediately.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack
                direction={'row'}
                spacing={2}
                component={'a'}
                href={`tel:${webInfo?.phone[0]}`}
                alignItems={'center'}
                sx={{
                  cursor: 'pointer',
                  '.icon-btn': {
                    border: '2px dashed #fff',
                    boxShadow: '0px 0px 0px 3px #FD0102',
                    color: '#fff',
                    transition: 'all 0.5s ease',
                  },
                  ':hover': {
                    '.icon-btn': {
                      boxShadow: '0px 0px 0px 3px #b40d0e',
                      bgcolor: 'secondary.dark',
                    },
                  },
                }}
              >
                <IconButton
                  className="icon-btn"
                  sx={{
                    bgcolor: 'secondary.main',
                    width: 50,
                    height: 50,
                  }}
                >
                  <PhoneInTalkRounded />
                </IconButton>
                <Box>
                  <Typography variant="h2" component={'span'}>
                    {webInfo?.phone[0]}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>{' '}
    </Box>
  );
}
