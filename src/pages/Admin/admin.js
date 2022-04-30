import React,{ useState } from 'react'
import { Box, createTheme, Stack, ThemeProvider,Paper, ListItem } from "@mui/material";

import { Grid, makeStyles } from "@material-ui/core";
import { styled } from '@mui/material/styles';

import {BrowserRouter,Routes,Route } from "react-router-dom";
import AdminNavbar from '../../components/AdminNav/AdminNavbar';
import AdminSidebar from '../../components/AdminNav/AdminSidebar';
import Registrations from './Registrations';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Admin = () => {
  const [mode, setMode] = useState("light");
  return (
    <div>
     
      <Box >
        <AdminNavbar/>
       
        <Grid container spacing={0}>
        <Grid item xs={2}>
      <AdminSidebar setMode={setMode} mode={mode}/>
         </Grid>
         <Grid item xs={10} style={{padding:"100px" }}>
           <Routes>
             <Route exact path='/' element={<Registrations/>}/>
            
             
           </Routes>
        
         
        
         </Grid>
       </Grid>
       
        
        
       
      </Box>
     
    </div>
  )
}

export default  Admin;