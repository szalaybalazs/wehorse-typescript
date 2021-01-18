import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#87B726'
    },
    secondary: {
      main: '#cFcEcE',
    },
    // @ts-ignore - this is valid in the new API
    background: '#fff',
  },
});

const Provider:React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  );
}

export default Provider;