// import HomeLayout from '@/assets/layout/HomeLayout';
// import { imageComming, lineWrap } from '@/style/style';
// import { Button } from '@/ui/Button';
// import TitleBox from '@/ui/TitleBox';
// import { productData } from '@/utils/data';
// import { ArrowRightAltRounded } from '@mui/icons-material';
// import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
// import Link from 'next/link';
// import React from 'react';

// export default function Vehicles() {
//   return (
//     <HomeLayout title={'Our Products'} disabledFooterBox>
//       <Box my={7} component={'section'}>
//         <Container>
//           <TitleBox center subTitle={'The joy ride is for everyone.'}>
//             Wide Range of Products
//           </TitleBox>

//           <Grid container spacing={4} mt={0}>
//             {productData?.map((item, index) => (
//               <Grid item md={4} xs={12} key={index}>
//                 <Box
//                   sx={{
//                     position: 'relative',
//                     overflow: 'hidden',
//                     boxShadow: '0px 10px 15px 0px rgb(0 0 0 / 10%)',
//                     top: 0,

//                     transition: 'all 0.5s ease',
//                     ':hover': {
//                       top: -10,
//                       boxShadow: '0px 10px 15px 0px rgb(0 0 0 / 20%)',
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       position: 'relative',
//                       overflow: 'hidden',
//                       ':before': {
//                         content: '""',
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         width: '100%',
//                         height: '100%',
//                         background: 'rgba(0,0,0,0.2)',
//                         zIndex: 1,
//                       },
//                       ...(item?.commingSoon && imageComming),
//                     }}
//                   >
//                     <CardMedia
//                       component="img"
//                       src={item?.featuredImage}
//                       alt={item?.name}
//                       height={400}
//                       width={600}
//                       className="img-fluid"
//                       priority
//                     />
//                   </Box>
//                   <Box sx={{ px: 2, py: 2 }}>
//                     <Typography variant="h4" mb={1}>
//                       {item?.name}
//                     </Typography>
//                     <Typography variant="body1" mb={2} sx={lineWrap(3)}>
//                       {item?.description ||
//                         'Experience the unmatchable power and efficiency. Trusted by millions of people.'}
//                     </Typography>
//                     <Button
//                       variant="contained"
//                       size="small"
//                       component={item?.commingSoon ? 'button' : Link} // Use 'component' for Material-UI's Button
//                       {...(!item?.commingSoon && {
//                         href: `/vehicles/${item?.slug}`,
//                       })} // Add href dynamically
//                       disabled={item?.commingSoon} // Disable the button if `commingSoon` is true
//                       endIcon={<ArrowRightAltRounded />}
//                     >
//                       {item?.commingSoon ? 'Coming Soon' : 'View Details'}
//                     </Button>
//                   </Box>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </HomeLayout>
//   );
// }


import HomeLayout from '@/assets/layout/HomeLayout';
import { imageComming } from '@/style/style';
import { Button } from '@/ui/Button';
import TitleBox from '@/ui/TitleBox';
import { productData } from '@/utils/data';
import { ArrowRightAltRounded } from '@mui/icons-material';
import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function Vehicles() {
  // Define background colors for each card
  const cardColors = [
    'rgb(224, 232, 253)',  // Very light blue
    'rgba(255, 240, 233, 0.8)',  // Very light orange
  ];

  return (
    <HomeLayout title={'Our Products'} disabledFooterBox>
      <Box my={7} component={'section'}>
        <Container>
          <TitleBox center subTitle={'The joy ride is for everyone.'}>
            Wide Range of Products
          </TitleBox>

          <Grid container spacing={4} mt={0}>
            {productData?.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Box
                 sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  // Updated box-shadow: Added top shadow while preserving existing shadows
                  boxShadow: '0px -10px 15px -5px rgba(0,0,0,0.1), 0px 10px 15px 10px rgba(0,0,0,0.1)',
                  top: 0,
                  transition: 'all 0.5s ease',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  borderRadius: 3,
                  ':hover': {
                    top: -10,
                    // Updated hover shadow: Added top shadow while preserving existing
                    boxShadow: '0px -15px 20px -5px rgba(0,0,0,0.1), 0px 15px 20px 0px rgba(0,0,0,0.2)',
                  },
                }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      width: { xs: '100%', md: '50%' },
                      flexShrink: 0,
                      ...(item?.commingSoon && imageComming),
                      borderTopLeftRadius: 3, // Match parent radius
                      borderTopRightRadius: { xs: 3, md: 0 }, // Only round top on mobile
                      borderBottomLeftRadius: { xs: 0, md: 3 } // Round bottom-left on desktop
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={item?.featuredImage}
                      alt={item?.name}
                      sx={{
                        width: '100%',
                        height: { xs: 300, md: 400 },
                        objectFit: 'cover',
                      }}
                      className="img-fluid"
                      priority
                    />
                  </Box>
                  <Box 
                    sx={{ 
                      px: { xs: 2, sm: 4 },
                      py: 3,
                      width: { xs: '100%', md: '50%' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      backgroundColor: cardColors[index % cardColors.length],
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderBottomRightRadius: 3, // Match parent radius
                      borderTopRightRadius: { xs: 0, md: 3 }, // Only round on desktop
                      borderBottomLeftRadius: { xs: 3, md: 0 } // Round bottom on mobile
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      mb={1}
                      sx={{
                        fontWeight: 800,
                        color: 'primary.dark',
                        fontSize: { xs: '1.75rem', sm: '2rem' },
                        letterSpacing: -0.5,
                        lineHeight: 1.2
                      }}
                    >
                      {item?.name}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      mb={3}
                      sx={{
                        color: 'text.secondary',
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        fontWeight: 400
                      }}
                    >
                      {item?.description ||
                        'Experience the unmatchable power and efficiency. Trusted by millions of people.'}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                      <Button
                        variant="contained"
                        size="medium"
                        component={item?.commingSoon ? 'button' : Link}
                        {...(!item?.commingSoon && {
                          href: `/vehicles/${item?.slug}`,
                        })}
                        disabled={item?.commingSoon}
                        endIcon={<ArrowRightAltRounded />}
                        sx={{
                          borderRadius: 2,
                          fontWeight: 700,
                          px: 4,
                          py: 1.5,
                          boxShadow: 2,
                          '&:hover': {
                            boxShadow: 4,
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        {item?.commingSoon ? 'Coming Soon' : 'View Details'}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </HomeLayout>
  );
}