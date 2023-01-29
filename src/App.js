import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Icon, IconButton } from '@mui/material';

function App() {
  const [recs, setRecs] = useState([])

  return (
    <div
      className="App" 
      style={{
        position: "absolute",
        top: 0, left: 0,
        backgroundColor: "#eba13f", 
        height: "100vh",
        width: "100%",
        }}
    >
      <AppBar sx={{color: "#eba13f", backgroundColor: "#4a2c04"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Camp@Brown
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Paper sx={{mt: 12, mr: 4, ml: 4, height: "80%", background: "#4a2c04"}}> 
        <Grid container sx={{p: 2, color:'white', height: '100%', alignItems: 'center'}}>
          <Grid item xs={1}>
            <IconButton sx={{color:'white'}}><NavigateBeforeIcon /></IconButton>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h4" sx={{fontFamily: 'sans-serif', fontWeightLight: 300}}>Hack @ Brown</Typography>
            <Typography>Instructor:</Typography>
            <Typography>Description:</Typography>
            <Typography>Mutuals:</Typography>
          </Grid>
          <Grid item xs={1}>
            <Box sx={{flexGrow: 1, ml: 5}}>
              <IconButton sx={{color:'white'}}><NavigateNextIcon /></IconButton>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default App;
