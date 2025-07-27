'use client';
import { Button } from '@/ui/Button';
import { webInfo } from '@/utils';
import { headerMenu } from '@/utils/data';
import {
  Close,
  EmailOutlined,
  FacebookRounded,
  Instagram,
  Menu as MenuIcon,
  PhoneInTalkOutlined,
  X,
  ArrowDropDown,
  ExpandMore,
  ExpandLess,
} from '@mui/icons-material';

import {
  AppBar,
  Box,
  CardMedia,
  Drawer,
  IconButton,
  List,
  ListItem,
  MenuItem,
  Stack,
  Toolbar,
  Collapse,
  Paper,
  Fade,
  alpha,
  useTheme,
  Typography,
  keyframes
} from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

// Animations
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;


export default function Header() {
  const pathname = usePathname();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setOpenSubMenu(null);
  };

  const closeDrawer = () => {
    setMobileOpen(false);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const drawer = (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        background: `linear-gradient(to bottom, ${alpha(theme.palette.background.paper, 0.98)}, ${alpha(theme.palette.background.default, 0.98)})`,
        backdropFilter: 'blur(12px)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          background: alpha(theme.palette.background.paper, 0.9),
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        }}
      >
        <Link href="/" passHref onClick={closeDrawer}>
          <CardMedia
            component="img"
            src={webInfo?.logo?.main}
            alt={webInfo?.name}
            sx={{ maxWidth: 100, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          />
        </Link>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
          <Close />
        </IconButton>
      </Box>
      
      <List sx={{ flexGrow: 1, p: 2 }}>
        {headerMenu?.manu?.map((item, index) => (
          <ListItem 
            key={index} 
            sx={{ 
              p: 0,
              mb: 1.5,
              '&:last-child': { mb: 0 },
              display: 'block',
            }}
          >
            {item.children ? (
              <>
                <MenuItem
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSubMenu(index);
                  }}
                  sx={{
                    width: '100%',
                    py: 1.5,
                    px: 2,
                    borderRadius: 1,
                    fontWeight: 600,
                    color: 'text.primary',
                    bgcolor: 'transparent',
                    display: 'flex',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.08),
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <Box sx={{ 
                      width: 6, 
                      height: 6, 
                      bgcolor: 'primary.main', 
                      borderRadius: '50%', 
                      mr: 1.5,
                      opacity: 0.5,
                      boxShadow: '0 0 6px rgba(0,0,0,0.1)'
                    }} />
                    {item.name}
                  </Box>
                  {openSubMenu === index ? <ExpandLess /> : <ExpandMore />}
                </MenuItem>
                
                <Collapse 
                  in={openSubMenu === index} 
                  timeout="auto" 
                  unmountOnExit
                  sx={{
                    animation: `${fadeIn} 0.3s ease-out`,
                  }}
                >
                  <List 
                    component="div" 
                    disablePadding
                    sx={{
                      bgcolor: alpha(theme.palette.primary.main, 0.03),
                      borderRadius: 2,
                      mt: 1,
                      mx: 1,
                      borderLeft: `3px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                      overflow: 'hidden',
                      position: 'relative',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 1,
                        background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.primary.main, 0.2)}, transparent)`,
                      }
                    }}
                  >
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        href={`/vehicles/${child.slug}`}
                        passHref
                        onClick={closeDrawer}
                        style={{ textDecoration: 'none' }}
                      >
                        <MenuItem
                          sx={{
                            pl: 4,
                            py: 1.5,
                            width: '100%',
                            fontWeight: pathname === `/vehicles/${child.slug}` ? 700 : 500,
                            color: pathname === `/vehicles/${child.slug}` ? 'primary.main' : 'text.primary',
                            bgcolor: pathname === `/vehicles/${child.slug}` ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                            transition: 'all 0.25s ease',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            '&:hover': {
                              bgcolor: alpha(theme.palette.primary.main, 0.05),
                              pl: 4.5,
                              '&:before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: 3,
                                bgcolor: 'primary.main',
                                borderRadius: '0 2px 2px 0',
                              }
                            }
                          }}
                        >
                          <Box sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: pathname === `/vehicles/${child.slug}` 
                              ? 'primary.main' 
                              : alpha(theme.palette.text.primary, 0.3),
                            borderRadius: '50%', 
                            mr: 1.5,
                            boxShadow: '0 0 4px rgba(0,0,0,0.1)'
                          }} />
                          {child.name}
                        </MenuItem>
                      </Link>
                    ))}
              
                    {/* ADDED VIEW ALL BUTTON FOR MOBILE */}
                    <Link
                      href="/vehicles"
                      passHref
                      onClick={closeDrawer}
                      style={{ textDecoration: 'none' }}
                    >
                      <MenuItem
                        sx={{
                          pl: 4,
                          py: 1.5,
                          width: '100%',
                          fontWeight: pathname === '/vehicles' ? 700 : 600,
                          color: pathname === '/vehicles' ? 'primary.main' : 'text.primary',
                          bgcolor: alpha(theme.palette.primary.main, 0.05),
                          transition: 'all 0.25s ease',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          borderTop: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
                          '&:hover': {
                            bgcolor: alpha(theme.palette.primary.main, 0.08),
                            pl: 4.5,
                            // REMOVED RED BORDER FOR ALL PRODUCTS
                            '&:before': {
                              content: 'none'
                            }
                          }
                        }}
                      >
                        <Box sx={{ 
                          width: 6, 
                          height: 6, 
                          bgcolor: 'primary.main', 
                          borderRadius: '50%', 
                          mr: 1.5,
                          opacity: 0.7
                        }} />
                        All Products
                      </MenuItem>
                    </Link>
                  </List>
                </Collapse>
              </>
            ) : (
              <Link
                href={item?.url}
                passHref
                className={item?.url === pathname ? 'active' : ''}
                onClick={closeDrawer}
                style={{ width: '100%', textDecoration: 'none' }}
              >
                <MenuItem
                  sx={{
                    width: '100%',
                    py: 1.5,
                    px: 2,
                    borderRadius: 1,
                    fontWeight: item?.url === pathname ? 700 : 600,
                    color: item?.url === pathname ? 'primary.main' : 'text.primary',
                    bgcolor: item?.url === pathname ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    animation: item?.url === pathname ? `${pulse} 0.5s ease` : 'none',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.08),
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }
                  }}
                >
                  <Box sx={{ 
                    width: 6, 
                    height: 6, 
                    bgcolor: 'primary.main', 
                    borderRadius: '50%', 
                    mr: 1.5,
                    opacity: item?.url === pathname ? 1 : 0.5,
                    boxShadow: '0 0 6px rgba(0,0,0,0.1)'
                  }} />
                  {item?.name}
                </MenuItem>
              </Link>
            )}
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ 
        p: 2, 
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        background: alpha(theme.palette.background.paper, 0.9),
        backdropFilter: 'blur(10px)',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
      }}>
        <Link href={headerMenu?.button?.url} passHref onClick={closeDrawer}>
          <Button 
            variant="contained" 
            fullWidth 
            sx={{ 
              py: 1.5, 
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            {headerMenu?.button?.name}
          </Button>
        </Link>
      </Box>
    </Box>
  );

  return (
    <React.Fragment>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: '#ffff',
          minHeight: 40,
          px: 3,
          display: 'flex',
          alignItems: 'center',
          '.btn': {
            px: 1.5,
            svg: {
              fontSize: 18,
            },
            fontWeight: 400,
            textTransform: 'none',
          },
          '.MuiIconButton-sizeSmall': {
            bgcolor: '#fff',
            borderRadius: 0,
            svg: {
              fontSize: 18,
            },
            transition: 'all 0.5s ease',
            '&:hover': {
              bgcolor: '#f7f7f7',
              borderRadius: 50,
            },
          },
        }}
      >
        <Stack direction="row">
          <Stack
            direction="row"
            spacing={1}
            component={Button}
            color="inherit"
            size="small"
            className="btn"
          >
            <PhoneInTalkOutlined />{' '}
            <Link href={`tel:${webInfo?.phone[0]}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {webInfo?.phone[0]}
            </Link>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            component={Button}
            sx={{ display: { xs: 'none', md: 'flex' } }}
            variant="outlined"
            color="inherit"
            size="small"
            className="btn"
          >
            <EmailOutlined />{' '}
            <Link href={`mailto:${webInfo?.email[0]}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {webInfo?.email[0]}
            </Link>
          </Stack>
        </Stack>
        <Box flexGrow={1} />
        <Stack direction="row" spacing={1}>
          <Box>
            <IconButton
              color="secondary"
              size="small"
              href={webInfo?.socialNetwork?.facebook}
              component={'a'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookRounded />
            </IconButton>
          </Box>
          <Box>
            <IconButton
              color="secondary"
              size="small"
              href={webInfo?.socialNetwork?.x}
              component={'a'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <X />
            </IconButton>
          </Box>
          <Box>
            <IconButton
              color="secondary"
              size="small"
              href={webInfo?.socialNetwork?.instagram}
              component={'a'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </IconButton>
          </Box>
        </Stack>
      </Box>
      
      <AppBar
        position="sticky"
        sx={{
          img: { width: 1, height: 'auto', maxWidth: 110 },
          bgcolor: 'background.paper',
          color: 'unset',
          boxShadow: '0px 25px 45px rgba(0,0,0,0.05)',
          background: `linear-gradient(to bottom, ${alpha(theme.palette.background.paper, 0.98)}, ${alpha(theme.palette.background.default, 0.98)})`,
          backdropFilter: 'blur(12px)',
          '.menu': {
            display: { xs: 'none', md: 'flex', gap: 1.5 },
            '.MuiMenuItem-root': {
              position: 'relative',
              textTransform: 'uppercase',
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              '&:after': {
                content: '""',
                display: 'block',
                height: '2px',
                width: '0%',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                transition: 'all 0.3s ease',
                backgroundColor: 'secondary.main',
              },
              '&:hover': {
                color: 'primary.main',
                background: 'transparent',
                '&:after': {
                  width: '80%',
                },
              },
            },
            'a.active .MuiMenuItem-root': {
              color: 'primary.main',
              fontWeight: 700,
              animation: `${pulse} 0.5s ease`,
              '&:after': {
                width: '80%',
              },
            },
          },
        }}
      >
        <Toolbar>
          <Link href="/" passHref>
            <CardMedia
              component="img"
              src={webInfo?.logo?.main}
              alt={webInfo?.name}
              sx={{ 
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.03)'
                }
              }}
            />
          </Link>
          <Box flexGrow={1} />
          
          <List className="menu">
            {headerMenu?.manu?.map((item, index) => (
              item.children ? (
                <Box
                  key={index}
                  sx={{
                    position: 'relative',
                    display: 'inline-block',
                  }}
                  onMouseEnter={() => setHoveredMenu(index)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <MenuItem
                    sx={{
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      fontWeight: 600,
                      color: 'text.primary',
                      bgcolor: 'transparent',
                    }}
                  >
                    {item.name}
                    <ArrowDropDown 
                      sx={{ 
                        transition: 'transform 0.3s',
                        transform: hoveredMenu === index ? 'rotate(180deg)' : 'none',
                        color: hoveredMenu === index ? 'primary.main' : 'inherit'
                      }} 
                    />
                  </MenuItem>
                  
                  <Fade in={hoveredMenu === index} timeout={300}>
                    <Paper
                      elevation={6}
                      sx={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: hoveredMenu === index 
                          ? 'translateX(-50%) translateY(0)' 
                          : 'translateX(-50%) translateY(-10px)',
                        minWidth: 240,
                        maxWidth: 300,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        zIndex: theme.zIndex.modal,
                        overflow: 'visible',
                        mt: 1.5,
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        border: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
                        opacity: hoveredMenu === index ? 1 : 0,
                        transition: 'opacity 0.3s, transform 0.3s',
                        animation: `${fadeIn} 0.3s ease-in-out`,
                        background: `linear-gradient(to bottom, ${alpha(theme.palette.background.paper, 0.98)}, ${alpha(theme.palette.background.default, 0.98)})`,
                        backdropFilter: 'blur(12px)',
                        '&:before': {
                          content: '""',
                          position: 'absolute',
                          top: -6,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 12,
                          height: 12,
                          bgcolor: 'background.paper',
                          borderTop: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
                          borderLeft: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
                          clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
                          rotate: '45deg',
                          zIndex: 0,
                        }
                      }}
                    >
                      <Box
                        sx={{
                          py: 1.5,
                          px: 2.5,
                          bgcolor: alpha(theme.palette.primary.main, 0.08),
                          borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                          display: 'flex',
                          alignItems: 'center',
                          backdropFilter: 'blur(5px)',
                        }}
                      >
                        <Box sx={{ 
                          width: 6, 
                          height: 6, 
                          bgcolor: 'primary.main', 
                          borderRadius: '50%', 
                          mr: 1.5,
                          boxShadow: '0 0 6px rgba(0,0,0,0.1)'
                        }} />
                        <Typography 
                          variant="subtitle2" 
                          fontWeight={700}
                          color="primary.main"
                        >
                          {item.name}
                        </Typography>
                      </Box>
                      
                      <List>
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            href={`/vehicles/${child.slug}`}
                            passHref
                            style={{ textDecoration: 'none' }}
                          >
                            <MenuItem
                              sx={{
                                py: 1.5,
                                px: 2.5,
                                fontWeight: pathname === `/vehicles/${child.slug}` ? 700 : 500,
                                color: pathname === `/vehicles/${child.slug}` ? 'primary.main' : 'text.primary',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                position: 'relative',
                                '&:hover': {
                                  bgcolor: alpha(theme.palette.primary.main, 0.04),
                                  pl: 3,
                                  '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: 3,
                                    bgcolor: 'primary.main',
                                    borderRadius: '0 2px 2px 0',
                                  }
                                },
                                '&:not(:last-child)': {
                                  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                }
                              }}
                            >
                              <Box 
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  bgcolor: pathname === `/vehicles/${child.slug}` 
                                    ? 'primary.main' 
                                    : alpha(theme.palette.text.primary, 0.3),
                                  transition: 'all 0.2s ease',
                                  boxShadow: '0 0 4px rgba(0,0,0,0.1)'
                                }}
                              />
                              {child.name}
                            </MenuItem>
                          </Link>
                        ))}
                        
                        {/* ADDED VIEW ALL BUTTON FOR DESKTOP */}
                        <Link
                          href="/vehicles"
                          passHref
                          style={{ textDecoration: 'none' }}
                        >
                          <MenuItem
                            sx={{
                              py: 1.5,
                              px: 2.5,
                              fontWeight: pathname === '/vehicles' ? 700 : 600,
                              color: pathname === '/vehicles' ? 'primary.main' : 'text.primary',
                              transition: 'all 0.2s ease',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1.5,
                              bgcolor: alpha(theme.palette.primary.main, 0.05),
                              position: 'relative',
                              '&:hover': {
                                bgcolor: alpha(theme.palette.primary.main, 0.08),
                                pl: 3,
                                // REMOVED RED BORDER FOR ALL PRODUCTS
                                '&:before': {
                                  content: 'none'
                                }
                              }
                            }}
                          >
                            <Box 
                              display={"flex"}
                              alignItems={"center"}
                              justifyContent={"center"}
                            >
                              <Box sx={{ 
                                width: 6, 
                                height: 6, 
                                bgcolor: 'primary.main', 
                                borderRadius: '50%', 
                                mr: 1.5,
                                opacity: 0.7
                              }} />
                            </Box>
                            All Products
                          </MenuItem>
                        </Link>
                      </List>
                    </Paper>
                  </Fade>
                </Box>
              ) : (
                <Link
                  href={item?.url}
                  passHref
                  key={index}
                  className={item?.url === pathname ? 'active' : ''}
                  style={{ textDecoration: 'none' }}
                >
                  <MenuItem
                    sx={{
                      fontWeight: item?.url === pathname ? 700 : 600,
                    }}
                  >
                    {item?.name}
                  </MenuItem>
                </Link>
              )
            ))}
          </List>
          
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Link href={headerMenu?.button?.url} passHref>
              <Button 
                variant="contained" 
                sx={{
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {headerMenu?.button?.name}
              </Button>
            </Link>
          </Box>
          
          <Box sx={{ display: { xs: 'block', md: 'none' }, mr: 1 }}>
            <Link href={headerMenu?.button?.url} passHref>
              <Button variant="contained" size="small">
                {headerMenu?.button?.name}
              </Button>
            </Link>
          </Box>
          
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { md: 'none' },
              color: 'text.primary',
              bgcolor: 'action.hover',
              borderRadius: 1,
              p: 1,
              transition: 'background-color 0.3s',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { xs: '100%', sm: 320 },
          },
        }}
      >
        {drawer}
      </Drawer>
    </React.Fragment>
  );
}