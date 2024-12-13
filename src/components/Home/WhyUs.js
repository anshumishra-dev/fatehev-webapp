import { Button } from '@/ui/Button';
import TitleBox from '@/ui/TitleBox';
import { ElectricRickshawRounded } from '@mui/icons-material';
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function WhyUs() {
  return (
    <Box
      component={'section'}
      sx={{
        backgroundImage: 'url(/images/why.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 10,
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          bgcolor: 'primary.dark',
          mixBlendMode: 'multiply',
          opacity: 0.8,
          top: 0,
          left: 0,
          zIndex: 2,
        },
      }}
    >
      <Container
        sx={{
          position: 'relative',
          zIndex: 5,
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <TitleBox subTitle="Why Us?" color={'#fff'} center>
          Why Choose Fateh EV
        </TitleBox>

        {/* Mission is to protect ecosystem of earth */}

        <Typography variant="h5" mb={1.5}>
          Show We Have Best Finance Facility Available{' '}
        </Typography>
        <Grid
          mt={0}
          container
          spacing={4}
          justifyContent="center"
          sx={{
            '.MuiListItemText-secondary': { color: '#fff' },
            '.MuiListItemText-primary': {
              color: '#fff',
              // bgcolor: 'secondary.dark',
              fontWeight: 700,
              mb: 1,
              py: 0.5,
              px: 1,
              transition: '0.3s',
            },
            '.card': {
              position: 'relative',
              p: 1,
              pt: 0.5,
              border: '1px solid #fff',
              // borderColor: 'secondary.main',
              backdropFilter: 'blur(5px)',
              transition: '0.3s',
            },
          }}
        >
          {' '}
          <Grid item xs={12} md={6}>
            <Box className="card">
              <ListItemText
                primary="Pioneering Sustainability"
                secondary={`We're at the forefront of the electric vehicle revolution in 
India, offering products that are not only good for the environment but also for your 
wallet.`}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="card">
              <ListItemText
                primary="Unmatched Value"
                secondary={`With our competitive pricing, we ensure that adopting green 
technology doesn't come with a hefty price tag.`}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {' '}
            <Box className="card">
              <ListItemText
                primary="Proven Quality"
                secondary={`Every Fateh EV e-rickshaw is a product of meticulous 
craftsmanship, rigorous testing, and stringent quality control measures, ensuring you 
get the best in performance and safety.`}
              />
            </Box>
          </Grid>{' '}
          <Grid item xs={12} md={6}>
            <Box className="card">
              <ListItemText
                primary="Comprehensive Dealer Support"
                secondary={`We don't just stop at sales; our dealer partners 
                    benefit from extensive support, including marketing assistance, training programs, 
                    and robust after-sales service.`}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {' '}
            <Box className="card">
              <ListItemText
                primary="Nationwide Dealer Network"
                secondary={`By joining hands with Fateh EV, you become part of a 
growing network dedicated to transforming transportation across India.`}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Link href="/dealership">
              <Button variant="contained" color="secondary">
                Become a dealership
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
