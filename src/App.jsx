import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from "react-router-dom";
import { createAppTheme } from './shared/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';

const App = () => {
  const theme = createAppTheme();
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <>
            <Router />
          </>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
