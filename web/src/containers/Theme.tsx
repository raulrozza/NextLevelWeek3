import React from 'react';

// Config
import defaultColors from '../config/defaultColors';
import defaultTypography from '../config/defaultTypography';

// Contexts
import { ThemeProvider } from 'styled-components';

// Styles
import Global from '../styles/Global';

const theme = {
  colors: defaultColors,
  typography: defaultTypography,
};

const Theme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <Global />
    </ThemeProvider>
  );
};

export default Theme;
