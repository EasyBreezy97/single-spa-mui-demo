import { ThemeOptions, createGenerateClassName } from "@material-ui/core";

export enum ThemeType {
  dark = "dark",
  light = "light",
}

interface IRGBColor {
  r: number;
  g: number;
  b: number;
  value: string;
}

interface IThemeColor {
  hex: string;
  rgb: IRGBColor;
}

const PRIMARY_COLOR: IThemeColor = {
  hex: "#996600",
  rgb: { r: 153, g: 102, b: 0, value: "rgb(153,102,0)" },
};
const SECONDARY_COLOR: IThemeColor = {
  hex: "#996633",
  rgb: { r: 153, g: 102, b: 102, value: "rgb(153,102,102)" },
};

export const getRGBColor = (color: string): IRGBColor => {
  const hexColor = color.replace("#", "");
  const rComponent = parseInt(hexColor.slice(0, 1), 16);
  const gComponent = parseInt(hexColor.slice(2, 3), 16);
  const bComponent = parseInt(hexColor.slice(4, 5), 16);
  return {
    r: rComponent,
    g: gComponent,
    b: bComponent,
    value: `rgb(${rComponent}, ${gComponent}, ${bComponent})`,
  };
};

export const generateClassName = createGenerateClassName({
  disableGlobal: true,
  productionPrefix: "jss", // defaults to 'jss'
  seed: "test", // defaults to ''
});

export const getAlpha = (
  percent: number,
  color = SECONDARY_COLOR.hex,
): string => {
  const rgbColor = getRGBColor(color);
  return `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${percent / 100})`;
};

export const getTheme = (type = ThemeType.light): ThemeOptions => ({
  palette: {
    type,
    primary: { main: PRIMARY_COLOR.rgb.value },
    secondary: { main: SECONDARY_COLOR.rgb.value },
    action: {
      hover: getAlpha(10),
      selected: getAlpha(15),
    },
  },
});

// export const theme = getTheme(ThemeType.light);
