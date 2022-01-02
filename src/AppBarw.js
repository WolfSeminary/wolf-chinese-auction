import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function TitleAppBar() {
  return (

    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ברוכים הבאים למכירת החסד של סמינר וולף
          <p style={{ margin: '0px' }}>מפעל הבית</p>
        </Typography>
      </Toolbar>
    </AppBar>


  );
}


