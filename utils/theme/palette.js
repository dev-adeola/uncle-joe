
function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const PRIMARY = {
  main: '#00B172',
};
const SECONDARY = {
  main: '#00B172',
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
};
const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
};


const GRADIENTS = {
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const COMMON = {
  common: {
    black: '#000',
    white: '#fff'
  },
  primary: {
    ...PRIMARY,
    contrastText: '#fff'
  },
  secondary: {
    ...SECONDARY,
    contrastText: '#fff'
  },
  info: {
    ...INFO,
    contrastText: '#fff'
  },
  success: {
    ...SUCCESS,
    contrastText: '#212B36'
  },
  warning: {
    ...WARNING,
    contrastText: '#212B36'
  },
  error: {
    ...ERROR,
    contrastText: '#fff'
  },
  gradients: GRADIENTS,
  action: {
    // hover: ,
    // selected: ,
    // disabled: ,
    // disabledBackground: ,
    // focus: ,
    // hoverOpacity: 0.08,
    // disabledOpacity: 0.48,
  },
};



const palette = {
  ...COMMON,
  text: { secondary: "#BBBBBB", primary: '#737373', default: '#fff' },
  background: { paper: '#21272A', default: '#181C1F', neutral: "#0C0E0F" },
  action: { active: '#637381', ...COMMON.action },
  canvasColor: "#000"
};

export default palette;
