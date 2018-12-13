import createTheme from 'spectacle/lib/themes/default';

const COLORS = {
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quaternary: '#CECECE'
};

const FONTS = {
  primary: 'Helvetica',
  secondary: {
    name: 'Droid Serif',
    googleFont: true,
    styles: ['400', '700i']
  }
};

const config = {
  transition: ['slide'],
  transitionDuration: 500,
  progress: 'none',
  controls: false,
  autoplay: true,
  autoplayLoop: true,
  theme: createTheme(COLORS, FONTS)
};

export default config;
