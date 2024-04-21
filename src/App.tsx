import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { Navigate, Route, Router, Routes, useLocation, useNavigate } from 'react-router-dom';
import { BreweryProfile } from './Pages/BreweryProfile';
import { BrowseBreweries } from './Pages/BrowseBreweries';
import { FavoriteBreweries } from './Pages/FavoriteBreweries';
import { AppNavbar } from './Pages/Navbar';
import reportWebVitals from './reportWebVitals';
import { store } from './state/store';
import { AppPagination } from './UI/Dumb/Pagination';
import { SearchBrewery } from './UI/Smart/SearchBrewery';
import { BreweriesGrid } from './UI/Smart/BreweriesGrid';
import { selectAllBreweries } from './state/selectors';


const darkTheme = createTheme({
  palette: {
    //mode: 'dark',
  },
});

export const App = () => {
  return (
    
    <ThemeProvider theme={darkTheme}>
      <Provider store={store}>
        <CssBaseline />
        <AppNavbar />
        <Routes>
          <Route path="browse-breweries/:pageID" element={<BrowseBreweries/>}/>
          <Route path="favorite-breweries" element={<FavoriteBreweries />}>
            <Route path=":breweryID" element={<BreweryProfile />} />
          </Route>
           <Route path="*" element={<Navigate to="/browse-breweries/1" replace />} />
          </Routes>
      </Provider>
    </ThemeProvider>
  );
};

reportWebVitals();
