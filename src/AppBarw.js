import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  return (

   // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ברוכים הבאים למכירת החסד של סמינר וולף
          <p style={{ margin: '0px' }}>מפעל הבית</p>
        </Typography>
      </Toolbar>
    </AppBar>
    // </Box >


  );
}


// 
{/* <Box sx={{ flexGrow: 1 }}>
<AppBar position="static">
  <Toolbar>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      {/* <MenuIcon /> */}
//     </IconButton>
//     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//     ברוכים הבאים למכירת החסד של סמינר וולף
//   <p style={{margin:'0px'}}>מפעל הבית</p>
//     </Typography>
//     {/* <Button color="inherit">Login</Button> */}
//   </Toolbar>
// </AppBar>
// </Box>
// ); */}