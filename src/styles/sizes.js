export default {
  up() {},
  down(size) {
    const sizes = {
      xs: '575.98px',
      sm: '767.98px',
      md: '991.98px',
      lg: '1199.98px',
      xl: '1600px'
    };
    return `@media only screen and (max-width: ${sizes[size]})`;
  }
};
