'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Box } from '@mui/material';
import Link from 'next/link';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathArray = pathname.split('/').filter((x) => x !== '');

  const breadcrumbs = pathArray.map((path, index) => {
    const href = `/${pathArray.slice(0, index + 1).join('/')}`;
    const text =
      path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');

    return pathArray.length > index + 1 ? (
      <li key={index}>
        <Link href={href}>{text}</Link>
      </li>
    ) : (
      <li key={index} className="text">
        {text}
      </li>
    );
  });

  return (
    <Box
      sx={{
        '& ul': {
          listStyle: 'none',
          display: 'flex',
          '.text': {
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          },
          '& li': {
            position: 'relative',
            textTransform: 'capitalize',
            fontWeight: 500,
            color: '#fff',
            cursor: 'default',
            whiteSpace: 'nowrap',
            '& a': {
              fontWeight: 600,
              color: 'secondary.main',
              position: 'relative',
              pb: 0.5,
              transition: '0.3s',
              '&:hover': {
                color: 'secondary.main',
              },
              '&:hover::before': {
                width: '100%',
              },
              '&::after': {
                content: '" "',
                display: 'inline-block',
                position: 'absolute',
                width: '100%',
                height: 2,
                bottom: 0,
                right: 0,
                background: '#fff',
                opacity: 0.9,
              },
              '&::before': {
                content: '" "',
                display: 'inline-block',
                position: 'absolute',
                width: '0%',
                height: 2,
                bottom: 0,
                left: 0,
                bgcolor: 'secondary.dark',
                transition: '0.5s',
                zIndex: 2,
              },
            },
          },
        },
        '& li+li': {
          pl: 2,
          '&::before': {
            content: '"•"',
            display: 'inline-block',
            position: 'absolute',
            left: 8,
            marginLeft: '-4px',
            color: '#808982',
          },
        },
      }}
    >
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        {breadcrumbs}
      </ul>
    </Box>
  );
};

export default Breadcrumb;
