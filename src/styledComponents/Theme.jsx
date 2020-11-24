import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
      primaryDark: '#0D0C1D',
      primaryLight: '#c2e6ec',
      primaryHover: '#343078',
  },
  view: {
      mobile: '576px',
  }
}

const Theme = (props) => (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default Theme;
