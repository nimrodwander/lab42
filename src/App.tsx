import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BrowseBreweries } from './Pages/BrowseBreweries/BrowseBreweries';
import { FavoriteBreweries } from './Pages/FavoriteBreweries/FavoriteBreweries';
import { AppNavbar } from './UI/Dumb/Navbar';
import reportWebVitals from './reportWebVitals';
import { store } from './state/store';
import { BreweryProfile } from './Pages/BreweryProfile/BreweryProfile';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Provider store={store}>
        <CssBaseline />
        <AppNavbar />
        <Routes>
          <Route path="browse-breweries/*" element={<BrowseBreweries />} />
          <Route path="favorite-breweries/*" element={<FavoriteBreweries />} />
          <Route path="*/*">
            <Route path=":breweryID" element={<BreweryProfile />} />
          </Route>
          <Route
            path="*"
            element={<Navigate to="/browse-breweries" replace />}
          />
        </Routes>
      </Provider>
    </ThemeProvider>
  );
};

reportWebVitals();
