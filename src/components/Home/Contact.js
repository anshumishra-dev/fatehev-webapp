'use client';
import { Button } from '@/ui/Button';
import TitleBox from '@/ui/TitleBox';
import { SendRounded } from '@mui/icons-material';
import {
  Box,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Stack,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import React from 'react';

export default function Contact() {
  const inputStyles = {
    variant: 'outlined',
    size: 'small',
    InputLabelProps: {
      style: {
        color: 'white',
      },
    },
    InputProps: {
      style: {
        color: 'white',
      },
    },
    color: 'white',
    sx: {
      '.MuiFormLabel-asterisk': {
        color: 'secondary.main',
      },
      '.MuiInputBase-root': {
        ':hover': {
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgb(255, 255, 255)',
          },
        },
      },
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgb(255, 255, 255, 0.23)',
        ':hover': {
          borderColor: 'rgb(255, 255, 255)',
        },
      },
    },
  };

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    3;
    setLoading(true);
    axios
      .post('/api/contact', inputs)
      .then((res) => {
        enqueueSnackbar('Message sent successfully', {
          variant: 'success',
          autoHideDuration: 3000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });
        setInputs({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        setLoading(false);
      })
      .catch((err) => {
        enqueueSnackbar(err.message || 'Something went wrong', {
          variant: 'error',
          autoHideDuration: 3000,
        });
        setLoading(false);
      });
  };
  return (
    <Box
      component={'section'}
      sx={{ minHeight: 400, overflow: 'hidden', position: 'relative' }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'primary.dark',
          img: {
            width: '50%',
            height: '100%',
            mb: -2,
            objectFit: 'cover',
            display: { xs: 'none', md: 'block' },
          },
        }}
      >
        <CardMedia
          component={'img'}
          src={'/images/why.webp'}
          alt="contact"
          height={700}
          width={900}
        />
      </Box>
      <Container sx={{ py: 7, color: '#fff' }}>
        <Grid container spacing={10} sx={{ position: 'relative', zIndex: 2 }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { md: 'block', xs: 'none' } }}
          ></Grid>{' '}
          <Grid item xs={12} md={6}>
            <TitleBox subTitle={'Contact Us'} color={'#fff'}>
              Get in touch with us
            </TitleBox>
            <Stack
              spacing={3}
              component={'form'}
              onSubmit={submitHandler}
              mt={4}
              autoComplete="off"
            >
              <TextField
                label="Full Name"
                required
                {...inputStyles}
                onChange={handleChange}
                value={inputs.name}
                name="name"
              />
              <TextField
                label="Email Address"
                required
                {...inputStyles}
                onChange={handleChange}
                value={inputs.email}
                name="email"
              />
              <TextField
                label="Phone No."
                required
                {...inputStyles}
                onChange={handleChange}
                value={inputs.phone}
                name="phone"
              />
              <TextField
                label="Message"
                {...inputStyles}
                multiline
                rows={4}
                onChange={handleChange}
                value={inputs.message}
                name="message"
              />
              <Button
                color="secondary"
                variant="contained"
                type="submit"
                disabled={loading}
                endIcon={
                  loading ? <CircularProgress size={18} /> : <SendRounded />
                }
              >
                Submit
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
