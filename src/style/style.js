export const lineWrap = (num) => {
  return {
    display: '-webkit-box',
    WebkitLineClamp: `${num || 3}`,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: `ellipsis`,
  };
};

export const imageComming = {
  ':after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // background: 'rgba(0,0,0,0.2)',
    backdropFilter: 'blur(25px)',
    zIndex: 1,
  },
  ':before': {
    content: '"Coming Soon"',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 40,
    width: 200,
    fontSize: 16,
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    bgcolor: 'primary.main',
    color: '#fff',
    textTransform: 'uppercase',
    zIndex: 2,
  },
};
