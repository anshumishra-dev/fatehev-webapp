'use client';
import HomeLayout from '@/assets/layout/HomeLayout';
import { Button } from '@/ui/Button';
import TitleBox from '@/ui/TitleBox';
import { webInfo } from '@/utils';
import {
  EmailRounded,
  MapRounded,
  PhoneInTalk,
  SendRounded,
} from '@mui/icons-material';
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import React from 'react';

export default function Dealership() {
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    city: '',
    state: '',
    address: '',
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

    setLoading(true);
    axios
      .post('/api/contact', { ...inputs, title: 'Dealership' })
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
          city: '',
          state: '',
          address: '',
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
    <HomeLayout title={'Dealership Inquiry'}>
      <Box component={'section'} sx={{ py: 7 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                svg: { fontSize: 32, color: 'secondary.main' },
                '.MuiListItemText-secondary': {
                  fontSize: 18,
                },
                '.MuiListItemText-primary': {
                  fontSize: 15,
                  fontWeight: 600,
                  color: 'primary.dark',
                },
              }}
            >
              <Box sx={{ bgcolor: grey[200], p: 4, height: 1 }}>
                <TitleBox subTitle={'Grow With Us'}>
                  Let's get in touch
                </TitleBox>
                <Typography variant="body1">
                  Feel free to drop your contact details and we will be happy to
                  assist you.
                </Typography>

                <Stack mt={2}>
                  <ListItem>
                    <ListItemIcon>
                      <MapRounded />
                    </ListItemIcon>
                    <ListItemText
                      primary="Office Adderss"
                      secondary={webInfo?.address}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <EmailRounded />
                    </ListItemIcon>
                    <ListItemText
                      primary="Email Address"
                      secondary={
                        <a href={`mailto:${webInfo?.email[0]}`}>
                          {webInfo?.email[0]}
                        </a>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PhoneInTalk />
                    </ListItemIcon>
                    <ListItemText
                      primary="Phone No."
                      secondary={
                        <a href={`tel:${webInfo?.phone[0]}`}>
                          {webInfo?.phone[0]}
                        </a>
                      }
                    />
                  </ListItem>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ my: 3 }} component={'form'} onSubmit={submitHandler}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      label="Full Name"
                      size="small"
                      fullWidth
                      required
                      value={inputs?.name}
                      onChange={handleChange}
                      name="name"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Email"
                      size="small"
                      fullWidth
                      required
                      value={inputs?.email}
                      onChange={handleChange}
                      name="email"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Phone No"
                      size="small"
                      fullWidth
                      required
                      value={inputs?.phone}
                      onChange={handleChange}
                      name="phone"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Addresss"
                      size="small"
                      fullWidth
                      required
                      value={inputs?.address}
                      onChange={handleChange}
                      name="address"
                    />
                  </Grid>{' '}
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="State"
                      size="small"
                      fullWidth
                      required
                      value={inputs?.state}
                      onChange={handleChange}
                      name="state"
                    />
                  </Grid>{' '}
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="City"
                      size="small"
                      fullWidth
                      required
                      value={inputs?.city}
                      onChange={handleChange}
                      name="city"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      label="Any Suggestion Or Requirement?"
                      size="small"
                      fullWidth
                      multiline
                      minRows={4}
                      value={inputs?.message}
                      onChange={handleChange}
                      name="message"
                    />
                  </Grid>{' '}
                  <Grid item xs={12} md={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      type="submit"
                      disabled={loading}
                      endIcon={
                        loading ? (
                          <CircularProgress size={18} />
                        ) : (
                          <SendRounded />
                        )
                      }
                    >
                      Submit Your Request
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </HomeLayout>
  );
}
