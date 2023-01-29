import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Search from './Search';  
import reportWebVitals from './reportWebVitals';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
   <AppBar sx={{color: "#eba13f", backgroundColor: "#4a2c04"}}>
      <Toolbar>
        <Typography variant="h5" component="div" >
          Camp@Brown
        </Typography>
        <Typography component="a" variant="h6" sx={{m: 2, color: "#eba13f", textDecoration: "none" }}  href="/">
          Recommendations
        </Typography>
        <Typography component="a" variant="h6" sx={{m: 2, color: "#eba13f", textDecoration: "none", flexGrow: 1 }} href="/search">
          Connection
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
