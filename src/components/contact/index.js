'use client';
import HomeLayout from '@/assets/layout/HomeLayout';

import React, { useState } from 'react';

import {
  Box,
  CircularProgress,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';

import {
  EmailOutlined,
  MapOutlined,
  PhoneInTalkOutlined,
  SendRounded,
} from '@mui/icons-material';
import { webInfo } from '@/utils';
import { enqueueSnackbar } from 'notistack';
import axios from 'axios';
import { Button } from '@/ui/Button';
import TitleBox from '@/ui/TitleBox';
import Map from './Map';

export default function Contact() {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    query: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('/api/contact', {
        name: inputs?.firstName + ' ' + inputs?.lastName,
        email: inputs?.email,
        phone: inputs?.phone,
        query: inputs?.query,
        message: inputs?.message,
      })
      .then((res) => {
        setLoading(false);
        setInputs({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          query: '',
          message: '',
        });
        enqueueSnackbar('Your form has been submitted', { variant: 'success' });
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar('404, Failed to send request', { variant: 'error' });
      });
  };
  return (
    <HomeLayout title={'Contact Us'}>
      <Container>
        <Box sx={{ my: 7 }}>
          <TitleBox
            sx={{ mb: 7, mx: 'auto', maxWidth: 600 }}
            title={'Great things in business are never done one'}
            subTitle={'Get in touch'}
            center
          />
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  p: { md: 6, xs: 4 },
                  height: 1,
                  bgcolor: 'primary.dark',
                  color: '#fff',
                }}
              >
                <Stack spacing={1} sx={{ width: 1 }}>
                  <Typography
                    variant="h2"
                    component={'h2'}
                    sx={{ fontWeight: 600 }}
                  >
                    Contact Details
                  </Typography>
                  <Stack
                    spacing={3}
                    sx={{
                      svg: { fontSize: 32, color: 'secondary.main' },
                      pt: 3,
                    }}
                  >
                    <Stack
                      direction={'row'}
                      alignItems={'center'}
                      spacing={2}
                      component={'a'}
                      href={`tel:${webInfo?.phone[0]}`}
                    >
                      <PhoneInTalkOutlined />
                      <Typography variant="h3">{webInfo?.phone[0]}</Typography>
                    </Stack>{' '}
                    <Stack
                      direction={'row'}
                      alignItems={'center'}
                      spacing={2}
                      component={'a'}
                      href={`mailto:${webInfo?.email[0]}`}
                    >
                      <EmailOutlined />
                      <Typography variant="h3">{webInfo?.email[0]}</Typography>
                    </Stack>{' '}
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                      <MapOutlined />
                      <Typography variant="h3">{webInfo?.address}</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box sx={{ p: 4, bgcolor: grey[100] }}>
                <Grid
                  container
                  spacing={3}
                  component={'form'}
                  onSubmit={submitHandler}
                >
                  <Grid item md={6} xs={12}>
                    <TextField
                      label="First Name"
                      size="small"
                      required
                      variant="standard"
                      fullWidth
                      onChange={changeHandler}
                      name="firstName"
                      value={inputs?.firstName}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      label="Last Name"
                      size="small"
                      required
                      variant="standard"
                      fullWidth
                      onChange={changeHandler}
                      name="lastName"
                      value={inputs?.lastName}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      label="Email Address"
                      size="small"
                      required
                      variant="standard"
                      fullWidth
                      onChange={changeHandler}
                      name="email"
                      value={inputs?.email}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      label="Phone Number"
                      size="small"
                      required
                      variant="standard"
                      fullWidth
                      onChange={changeHandler}
                      name="phone"
                      value={inputs?.phone}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      label="Your Query"
                      size="small"
                      variant="standard"
                      fullWidth
                      onChange={changeHandler}
                      name="query"
                      value={inputs?.query}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      label="Your Message"
                      size="small"
                      variant="standard"
                      fullWidth
                      multiline
                      onChange={changeHandler}
                      name="message"
                      value={inputs?.message}
                      rows={4}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <Button
                      variant="contained"
                      disabled={loading}
                      endIcon={
                        loading ? (
                          <CircularProgress size={18} />
                        ) : (
                          <SendRounded />
                        )
                      }
                      type="submit"
                    >
                      Submit Query
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Map />
    </HomeLayout>
  );
}
