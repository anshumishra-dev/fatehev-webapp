import { Box, Typography } from '@mui/material';

export const IconCard = ({ icon, title, children }) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        my: 2,
        cursor: 'default',
        '.icon': {
          height: 70,
          width: 70,
          bgcolor: 'secondary.light',
          color: '#fff',
          display: 'flex',
          svg: { fontSize: 40 },
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          margin: 'auto',
          mb: 1,
          position: 'relative',
          top: 0,
          transition: 'all 0.5s ease',
        },
        h4: {
          mb: 1,
          color: 'primary.main',
        },
        ':hover': {
          '.icon': {
            top: -10,
            bgcolor: 'secondary.dark',
          },
        },
      }}
    >
      {icon && <Box className="icon">{icon}</Box>}
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1"> {children} </Typography>
    </Box>
  );
};
