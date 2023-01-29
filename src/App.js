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
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function FormDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Camp@Brown</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To receive your recommendations, please input a few classes and clubs that you are interested in or are a part of.
          </DialogContentText>
        </DialogContent>
        <FormControl sx={{m: 4}}>
          <InputLabel id="demo-simple-select-label">Classes</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Classes"
          >
            <MenuItem>CSCI 0190</MenuItem>
            <MenuItem>MATH 540</MenuItem>
            <MenuItem>MATH 350</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ml: 4, mr: 4, mb: 4}}>
          <InputLabel id="demo-simple-select-label">Clubs</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Clubs"
          >
            <MenuItem>Club Tennis</MenuItem>
            <MenuItem>Brown Space Engineering</MenuItem>
            <MenuItem>Brown RISD Game Development</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" onClick={handleClose}>Enter</Button>
      </Dialog>
  );
}

function App() {
  const data = [
    {
      title: 'CSCI 0320: Intro to Software Engineering',
      instructor: 'Tim Nelson',
      description: 'Focuses on designing, building, testing, and maintaining systems collaboratively. It covers programming techniques (using Java and TypeScript with various frameworks), object-oriented design, advanced testing (e.g., fuzz testing), debugging approaches, and tools such as source control systems. The course concludes with a major group project that students gather requirements for, then design and implement themselves. Prerequisite: CSCI 0160, 0180, CSCI 0190 or CSCI 0200; CSCI 0220 is recommended.',
      common: 'Andrew Chen, Arnie He, Kelvin Jiang'
    },
    {
      title: 'APMA 1650: Statistical Inferences',
      instructor: 'Kristina Mallory',
      description: 'APMA 1650 is an integrated first course in mathematical statistics. The first half of APMA 1650 covers probability and the last half is statistics, integrated with its probabilistic foundation. Specific topics include probability spaces, discrete and continuous random variables, methods for parameter estimation, confidence intervals, and hypothesis testing. Prerequisites: MATH 0100 or equivalent.',
      common: 'Eric Xia, Julia Fu'
    },
    {
      title: 'PHIL 1440: The Nature of Morality',
      instructor: 'James Dreier',
      description: 'Investigates major theories and issues concerning the nature of moral value. Readings from 20th-century authors. Issues include naturalism, supervenience, moral motivation, subjectivity/objectivity of value, skepticism, moral relativism, and moral realism.',
      common: 'Aaron Belluck, Siddarth Yende, Samantha Renzulli',
    },
    {
      title: 'Brown Investment Group',
      instructor: 'https://www.linkedin.com/company/brown-investment-group/',
      description: '1. Education: We educate Brown undergraduates about investing and finance-related topics. We do this by offering Educational Sessions to discuss market developments and techniques for evaluating investment decisions. We also offer Mentors to each presenting group to assist and direct the research and preparation. One of the best ways to learn about investing is participation in the presentation of a Buy or Sell Proposal to the Group.In addition to our regular meetings, we engage with alumni and other University groups on special projects and presentations.' + '\n' +  '2. Investment management success: We manage over $200,000 of Brown\'s endowment that we independently invest. We meet with the Investment Office once a semester for a financial check-up. We seek to leverage Brown’s unique student insights in order to outperform the S&P 500. Our investment method is a deliberative, democratic process. The process begins when a team of students presents a proposal to either sell a stock that we own or buy the stock of any company traded on a US exchange. This presentation is followed by a counter-buy or counter-sell proposal. After a Q&A session, the members of the Group vote on the proposal. A simple majority dictates the action of the Group.',
      common: 'Aaron Belluck, Siddarth Yende, Samantha Renzulli',
    },
    {
      title: 'Gendo Taeko',
      instructor: 'https://gendotaiko.com/about/',
      description: 'One of the earliest collegiate Taiko drumming groups established on the East Coast, Gendo Taiko was constituted at Brown University in the Fall of 2004 by Raiki Machida (Brown ’07) and Joshua Goldner (Brown ’05). Initially dubbed Brown Taiko, Gendo’s musical styles were originally based on those of Wadaiko Gensou, a semi-professional Taiko group based in Miyagi, Japan, with whom Machida had trained extensively. In the summer of 2006, Goldner and Machida hosted Wadaiko Gensou’s founding members Takao Handa and Satoko Nambu at Brown University to expand the group’s repertoire, hone its members’ techniques, and build a new set of drums. As the group grew in membership and developed its own unique musical styles and arrangements, it adopted a formal audition process, developed a Group Independent Study Project (GISP) to explore the history of Taiko, and is now in the course of developing a well-structured program of study for its members. Today, Gendo Taiko continues to build and acquire new drums, expand its repertoire by composing new songs, and collaborate with the greater Taiko community by hosting and participating in annual conferences and invitationals. Handa-san and Nambu-san gave the team the name Gendo (幻道) during their stay in 2006. Gendo, loosely translating to “path of free imagination,” represents the journeys taken by members in years past, and the experience of creative inspiration we hope to pass down to future members and audiences in the years to come.',
      common: 'Albert Tang, Joseph Maffa',
    }
  ];

  const moveRight = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    }
  };

  const moveLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const [index, setIndex] = useState(0)

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
      <FormDialog />
      <Paper sx={{mt: 12, mr: 4, ml: 4, height: "80%", background: "#4a2c04"}}> 
        <Grid container sx={{p: 2, color:'white', height: '100%', alignItems: 'center'}}>
          <Grid item xs={1}>
            <IconButton onClick={moveLeft} sx={{color:'white'}}><NavigateBeforeIcon /></IconButton>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h4" sx={{fontFamily: 'sans-serif', fontWeightLight: 300}}>{data[index]['title']}</Typography>
            <Typography variant="h6" sx={{mt: 2}}>Instructor:</Typography>
            <Typography>{data[index]['instructor']}</Typography>
            <Typography variant="h6" sx={{mt: 2}}>Description:</Typography>
            <Typography>{data[index]['description']}</Typography>
            <Typography variant="h6" sx={{mt: 2}}>You may know:</Typography>
            <Typography>{data[index]['common']}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Box sx={{flexGrow: 1, ml: 5}}>
              <IconButton onClick={moveRight} sx={{color:'white'}}><NavigateNextIcon /></IconButton>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default App;
