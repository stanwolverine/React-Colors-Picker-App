import sizes from './sizes';
import bg from './bg.svg';

export default {
  '@global': {
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out'
    }
  },
  root: {
    backgroundColor: '#7b0b2e',
    backgroundImage: `url(${bg})`,
    backgroundAttachment: 'fixed',
    /* background by SVGBackgrounds.com */
    minHeight: '100vh',
    paddingBottom: '100px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',

    [sizes.down('xl')]: {
      width: '80%'
    },

    [sizes.down('xs')]: {
      width: '75%'
    }
  },
  nav: {
    color: 'white',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& a': {
      color: 'inherit'
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2.5rem',

    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },

    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1.4rem'
    }
  }
};
