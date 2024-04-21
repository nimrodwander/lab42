import { Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export const AppNavbar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Typography
              variant="h6"
              fontSize={16}
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Browse Breweries
            </Typography>
            <Typography
              variant="h6"
              fontSize={16}
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Favorite Breweries
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
