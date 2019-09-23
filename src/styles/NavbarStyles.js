import sizes from './sizes';

export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh'
  },

  logo: {
    fontFamily: 'Roboto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',

    '& a': {
      textDecoration: 'none',
      color: 'black'
    },

    [sizes.down('xs')]: {
      display: 'none'
    }
  },

  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',

    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },

    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus': {
      backgroundColor: 'green',
      outline: 'none',
      border: '1px solid green',
      boxShadow: 'none',
      width: '13px',
      height: '13px',
      marginTop: '-3px',
      marginLeft: '-7px'
    },

    '& .rc-slider-rail': {
      height: '8px'
    },

    [sizes.down('sm')]: {
      width: '150px'
    }
  },

  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem'
  }
};
