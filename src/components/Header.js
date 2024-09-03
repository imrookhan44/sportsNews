import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <SportsSoccerIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div">
          Football News
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
