import { Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLink } from './Link';

export const AppNavbar: React.FC = () => {
  const navigate = useNavigate();

  const onClickHandler = (path: string) => {
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <AppLink
              path={'browse-breweries'}
              title={'Browse Breweries'}
              onClick={onClickHandler}
            />
            <AppLink
              path={'favorite-breweries'}
              title={'Favorite Breweries'}
              onClick={onClickHandler}
            />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
