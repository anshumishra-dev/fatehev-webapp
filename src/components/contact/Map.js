import { Box } from '@mui/material';
import React from 'react';

export default function Map() {
  return (
    <Box
      component={'iframe'}
      sx={{
        width: 1,
        border: 0,
        height: 400,
      }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27787.30973548437!2d77.70885779999999!3d29.4751257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1ba00983523d%3A0xc6a75ba008574871!2sMuzaffarnagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1723874409303!5m2!1sen!2sin"
    />
  );
}
