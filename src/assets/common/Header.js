'use client';
import { Button } from '@/ui/Button';
import { webInfo } from '@/utils';
import { headerMenu } from '@/utils/data';
import {
  EmailOutlined,
  FacebookRounded,
  Instagram,
  PhoneInTalkOutlined,
  X,
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  CardMedia,
  IconButton,
  List,
  MenuItem,
  Stack,
  Toolbar,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Header() {
  const pathname = usePathname();
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
            <Link href={`tel:${webInfo?.phone[0]}`}>{webInfo?.phone[0]}</Link>
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
            <Link href={`mailto:${webInfo?.email[0]}`}>
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
          boxShadow: '0px 25px 45px rgb(0,0,0,0.3)',
          '.menu': {
            display: { xs: 'none', md: 'flex', gap: 1.5 },
            a: {
              display: 'block',
              ':after': {
                content: '""',
                display: 'block',
                height: '2px',
                width: '50%',
                position: 'relative',
                top: 0,
                bottom: -7,
                mx: 'auto',
                transition: 'all 0.3s ease',
              },
              ':hover': {
                color: 'primary.main',
                ':after': {
                  top: -3,
                  bottom: 0,
                  width: 'calc(100% - 24px)',
                  backgroundColor: 'secondary.main',
                },
              },
              '&.active': {
                color: 'primary.main',
                li: { fontWeight: 700 },
                ':after': {
                  top: -3,
                  bottom: 0,
                  width: 'calc(100% - 24px)',
                  backgroundColor: 'secondary.main',
                },
              },
              li: {
                ':hover': {
                  background: 'transparent',
                },
                textTransform: 'uppercase',
                fontWeight: 500,
                transition: 'all 0.3s ease',
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
            />
          </Link>
          <Box flexGrow={1} />
          <List className="menu">
            {headerMenu?.manu?.map((item, index) => (
              <Link
                href={item?.url}
                passHref
                key={index}
                className={item?.url === pathname ? 'active' : ''}
              >
                <MenuItem>{item?.name}</MenuItem>
              </Link>
            ))}
          </List>
          <Box>
            <Link href={headerMenu?.button?.url} passHref>
              <Button variant="contained">{headerMenu?.button?.name}</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>{' '}
    </React.Fragment>
  );
}
