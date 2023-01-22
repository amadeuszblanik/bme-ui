import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    radius: number;
    colors: {
      primary: string;
      red: string;
      orange: string;
      yellow: string;
      green: string;
      mint: string;
      teal: string;
      cyan: string;
      blue: string;
      indigo: string;
      purple: string;
      pink: string;
      brown: string;
      gray: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      light: string;
      dark: string;
      background: string;
      backgroundSecondary: string;
      text: string;
    };
    breakpoints: {
      mobile: number;
      desktop: number;
    };
  }
}
