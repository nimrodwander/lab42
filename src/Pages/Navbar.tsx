import { IconButton,  Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { LinkItem } from '../UI/Dumb/Link';
import { useNavigate } from 'react-router-dom';

export const AppNavbar: React.FC = () => {
  const navigate = useNavigate();

  const onClickHandler = (path: string) => {
    navigate(path);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <LinkItem
              path={'/browse-breweries'}
              title={'Browse Breweries'}
              onClick={onClickHandler}
            />
            <LinkItem
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
