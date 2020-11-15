import { Color } from '@diez/prefabs';

const colors = {
  primary: Color.hex('#ff9000'),
  // primaryLight: Color.hex('#'),
  // primaryDark: Color.hex('#'),

  secondary: Color.hex('#321e38'),
  // secondaryLight: Color.hex('#'),
  secondaryDark: Color.hex('#28262e'),

  whiteLightestAlpha: Color.rgba(255, 255, 255, 0.2),
  // whiteLighterAlpha: Color.rgba(255,255,255,0.5),
  whiteLightAlpha: Color.rgba(255, 255, 255, 0.7),
  white: Color.rgba(255, 255, 255, 0.95),

  grey: Color.hex('#666360'),
  greyAlpha: Color.rgba(49, 46, 56, 0.5),
  greyDarkAlpha: Color.rgba(49, 46, 56, 0.7),

  black: Color.hex('#28262e'),

  info: Color.hex('#3172b7'),
  infoLight: Color.hex('#ebf8ff'),
  // infoDark: Color.hex('#'),

  success: Color.hex('#2e6a33'),
  successLight: Color.hex('#e6ffee'),
  // successDark: Color.hex('#'),

  danger: Color.hex('#c53030'),
  dangerLight: Color.hex('#fddede'),
  // dangerDark: Color.hex('#'),
}

const layout = {
  // borderRadiusSmall: 4,
  borderRadius: 10,
  // borderRadiusBig: 16,
}

export const designLanguage = {
  colors,
  layout
}