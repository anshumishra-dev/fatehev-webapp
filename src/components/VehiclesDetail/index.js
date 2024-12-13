'use client';
import HomeLayout from '@/assets/layout/HomeLayout';
import { webInfo } from '@/utils';
import { CheckRounded } from '@mui/icons-material';
import {
  Box,
  CardMedia,
  Container,
  Grid,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tabs,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';

import React from 'react';
import ProductGallery from './ProductGallery';
import InfoTabs from './InfoTabs';
import { Icon } from '@iconify/react';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function VehiclesDetail({ data }) {
  const images =
    data?.gallery?.map((img) => ({
      name: data?.name,
      image: img,
    })) || [];
  const galleryData = [
    { name: data?.name, image: data?.featuredImage }, // Include featured image
    ...images, // Spread additional gallery images
  ];

  const formatName = (name) => {
    return name
      .replace(/([A-Z])/g, ' $1') // Insert a space before each uppercase letter
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
  };

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <HomeLayout title={data?.name}>
      <Box sx={{ py: 7 }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item md={8} xs={12}>
              <Box
                component={'section'}
                sx={{
                  position: 'sticky',
                  top: 0,
                  '.title': {
                    color: 'primary.dark',
                    span: { color: 'secondary.dark' },
                  },
                }}
              >
                <ProductGallery data={galleryData} />
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 3 }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Vehicle Overview" {...a11yProps(0)} />
                    <Tab label="Features & Options" {...a11yProps(1)} />
                    <Tab label="General Information" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <InfoTabs active={value === 0}>
                  <Grid container spacing={2} mt={2}>
                    {data?.features?.overview.map((item, index) => (
                      <Grid item xs={12} md={6} key={index}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              bgcolor: 'secondary.dark',
                              height: 50,
                              minWidth: 50,
                              borderRadius: '50%',
                            }}
                          >
                            <Icon
                              icon={item?.icon}
                              fontSize={32}
                              color={'#fff'}
                            />
                          </Box>
                          <Typography
                            sx={{
                              color: 'primary.main',
                              fontSize: 16,
                              fontWeight: 600,
                            }}
                          >
                            {item?.name}
                          </Typography>
                        </Stack>
                      </Grid>
                    ))}{' '}
                  </Grid>
                </InfoTabs>{' '}
                <InfoTabs active={value === 1}>
                  <Grid container spacing={2} mt={2}>
                    {data?.features?.info?.map((item, index) => (
                      <Grid item xs={12} md={6} key={index}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Box>
                            <CheckRounded
                              sx={{ fontSize: 18, color: 'success.main' }}
                            />
                          </Box>
                          <Box>
                            <Typography variant="body2">{item}</Typography>{' '}
                          </Box>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                </InfoTabs>
                <InfoTabs active={value === 2}>
                  <Typography
                    variant="h3"
                    component={'h2'}
                    mt={3}
                    className="title"
                  >
                    Revolutionizing Mobility with an Incredible Mix of Features"
                    with <span> {data?.name}</span>
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    Experience the future of transportation with the{' '}
                    {data?.name}. This e-rickshaw is not just about getting from
                    point A to point B; it's a revolution in mobility. With an
                    incredible mix of cutting-edge features, the {data?.name}{' '}
                    redefines convenience, efficiency, and sustainability.
                    Elevate your journey with technology that goes beyond the
                    ordinary, offering more than just mobility.
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    The {data?.name} is designed to revolutionize urban
                    transportation. Powered by advanced Lithium Ion battery
                    technology and an efficient electric motor, the {data?.name}{' '}
                    is known to enhance the savings of operators and fleet
                    owners. Featuring a best-in-class interior and a top-notch
                    suspension system, the {data?.name} even offers superior
                    ride quality.
                  </Typography>
                  <Typography
                    variant="h3"
                    component={'h2'}
                    mt={2}
                    className="title"
                  >
                    EV <span> Overview</span>
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    {data?.name} is an e-rickshaw engineered for performance and
                    durability. It is uniquely designed with a combination of
                    metal and fiberglass, providing economic efficiency and
                    unbeatable performance compared to any other vehicle of its
                    category and providing a reliable and comfortable ride. The
                    vehicle is ICAT certified for safety and performance. It
                    comes with a powerful drivetrain, a durable body, and
                    stunning looks. It is equipped with a wider axle which
                    provides higher stability, more seating space, and brings a
                    higher level of comfort in the ride.
                  </Typography>
                </InfoTabs>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Stack
                spacing={3}
                sx={{
                  '.card': { p: { md: 4, xs: 3 }, bgcolor: grey[200] },
                  position: 'sticky',
                  top: 68,
                }}
              >
                <Box className="card">
                  <Typography
                    variant="h4"
                    component={'h3'}
                    sx={{
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      bgcolor: '#fff',
                      py: 1,
                      textTransform: 'uppercase',
                      px: 1.5,
                      borderLeft: '4px solid #fff',
                      borderColor: 'secondary.main',
                    }}
                  >
                    Specs & Features
                  </Typography>
                  <Table size="small">
                    <TableBody>
                      {Object.entries(data.features?.specification[0]).map(
                        ([name, value], index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <strong>{formatName(name)}</strong>
                            </TableCell>
                            <TableCell>{value}</TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </Box>

                <Box className="card" textAlign={'center'}>
                  <Typography
                    variant="h4"
                    component={'h4'}
                    sx={{
                      ':after': {
                        content: '""',
                        display: 'block',
                        width: 75,
                        height: 4,
                        bgcolor: 'secondary.main',
                        mx: 'auto',
                        mt: 1,
                        mb: 2,
                      },
                    }}
                  >
                    If You Need Any Help Contact With Us
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{ color: 'primary.main' }}
                    component={'a'}
                    href={`tel:${webInfo?.phone[0]}`}
                  >
                    {webInfo?.phone[0]}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </HomeLayout>
  );
}
