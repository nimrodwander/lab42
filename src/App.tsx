import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { Main } from './UI/Main';
import { NavBar } from './UI/NavBar';
import { store } from './state/store';
import reportWebVitals from './reportWebVitals';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <NavBar />
        <Main />
      </ThemeProvider>
    </Provider>
  );
};

reportWebVitals();