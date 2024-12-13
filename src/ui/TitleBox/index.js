import { FlashOnRounded } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export default function TitleBox({
  title,
  subTitle,
  color,
  children,
  center = false,
  ...props
}) {
  return (
    <Box {...props}>
      {subTitle && (
        <Stack
          direction={'row'}
          alignItems="center"
          justifyContent={center ? 'center' : 'flex-start'}
          gap={1}
          sx={{ color: color || 'secondary.main', mb: 1 }}
        >
          <FlashOnRounded />
          <Typography
            variant="h4"
            component={'h4'}
            sx={{ fontSize: 12 }}
            className="sub-title"
          >
            {subTitle}
          </Typography>
        </Stack>
      )}
      <Typography
        className="title"
        variant="h2"
        sx={{
          color: color || 'primary.main',
          mb: 2,
          textAlign: center ? 'center' : 'unset',
        }}
      >
        {title || children}
      </Typography>
    </Box>
  );
}
