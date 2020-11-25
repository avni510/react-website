import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryDark: '#0D0C1D',
    primaryLight: '#e6e6fa',
    primaryHover: '#343078',
    pageBackground: 'black',

  },
  view: {
      mobile: '576px',
  }
}

const Theme = (props: any) => (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default Theme;
