import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Take-Home project Punith 
          </Typography>
          <Typography variant="h6" component="div" >
            Code:
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => window.open('https://github.com/punithnayak/esaamuday_frontend_final')}
          >
            <GitHubIcon sx={{ fontSize: 40 }}/>
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
