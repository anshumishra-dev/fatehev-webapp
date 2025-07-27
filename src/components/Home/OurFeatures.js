import { IconCard } from '@/ui/cards';
import TitleBox from '@/ui/TitleBox';
import { webInfo } from '@/utils';
import { ElectricRickshaw } from '@mui/icons-material';
import { Box, Container, Grid, Stack } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function OurFeatures({ enabledTopSpace = false }) {
  return (
    <Box
      component={'section'}
      sx={{
        pb: 10,
        pt: enabledTopSpace ? 20 : 10,
        bgcolor: 'rgb(239,243,245)',
        mt: enabledTopSpace ? -10 : 0,
      }}
    >
      <Container>
        <Box mb={5}>
          <TitleBox center subTitle={'Our Features'}>
            Key Features of {webInfo?.name}
          </TitleBox>
        </Box>
        <Grid container spacing={6}>
          <Grid item xs={12} md={3}>
            <Stack spacing={4}>
              <Box className="card1">
                <IconCard icon={<ElectricRickshaw />} title={'Zero Emissions'}>
                  Our e-rickshaws are 100% electric, meaning no emissions, no
                  pollution, and a cleaner environment for everyone.
                </IconCard>{' '}
              </Box>
              <Box className="card2">
                <IconCard
                  icon={<ElectricRickshaw />}
                  title={'Extended Battery Life'}
                >
                  Travel further without worry—our e-rickshaws come with
                  high-capacity batteries that deliver exceptional range.
                </IconCard>{' '}
              </Box>
            </Stack>
          </Grid>{' '}
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Image
              src="/images/Black.png"
              alt="Features"
              width={720}
              height={825}
              style={{ maxWidth: 400 }}
              className="img-fluid"
            />
          </Grid>{' '}
          <Grid item xs={12} md={3}>
            <Stack spacing={4}>
              <IconCard icon={<ElectricRickshaw />} title={'Durability'}>
                Engineered with the highest quality materials, our vehicles are
                built to last, even on rough roads.
              </IconCard>{' '}
              <IconCard icon={<ElectricRickshaw />} title={'Comfort and Space'}>
                Spacious interiors with ergonomic seating provide maximum
                comfort for both drivers and passengers.
              </IconCard>{' '}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
