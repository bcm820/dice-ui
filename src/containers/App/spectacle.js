import createTheme from 'spectacle/lib/themes/default';

const COLORS = {
  primary: '#FFFFFF',
  secondary: '#000000',
  tertiary: '#0aab2a'
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
  theme: createTheme(COLORS, FONTS),
  contentHeight: document.documentElement.clientHeight,
  contentWidth: document.documentElement.clientWidth
};

export default config;
