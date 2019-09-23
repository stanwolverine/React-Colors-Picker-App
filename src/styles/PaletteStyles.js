import sizes from './sizes';

export default {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },

  colors: {
    height: '90%'
  },

  goback: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    opacity: 1,
    backgroundColor: 'black',

    '& a': {
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      outline: 'none',
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      color: 'white',
      textTransform: 'uppercase',
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer'
    },

    [sizes.down('lg')]: {
      width: '25%',
      height: '33.3333%'
    },

    [sizes.down('md')]: {
      width: '50%',
      height: '20%'
    },

    [sizes.down('xs')]: {
      width: '100%',
      height: '10%'
    }
  }
};
