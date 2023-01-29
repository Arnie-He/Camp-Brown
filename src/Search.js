import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'CSCI 1470: Deep Learning',
    'APMA 1655: Statistical Inferences',
    'BSE: Brown Space Engineering'
  ];
  
function HorizontalLabelPositionBelowStepper() {
    return (
        <Box sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
            <Step key={label} sx={{color: "#eba13f"}}>
                <StepLabel>
                    <Typography sx={{color: "#eba13f"}}>{label}</Typography>
                </StepLabel>
            </Step>
            ))}
        </Stepper>
        </Box>
    );
}

function Search() {

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
        <Paper sx={{mt: 12, mr: 4, ml: 4, height: "80%", background: "#4a2c04"}}> 
            <Box sx={{m: 2, p:3, pt: 10}}>
                <TextField id="outlined-basic" label="Arnie He" value={"Arnie He"} variant="outlined" sx={{backgroundColor: 'white', mb: 4}}/>
                <HorizontalLabelPositionBelowStepper sx={{color: 'white'}}/>
            </Box>
        </Paper>
    </div>
  );
}

export default Search;
