import React,{ useState } from 'react'
import { Box, createTheme, Stack, ThemeProvider,Paper, ListItem } from "@mui/material";

import { Grid, makeStyles } from "@material-ui/core";
import { styled } from '@mui/material/styles';

import {BrowserRouter,Routes,Route } from "react-router-dom";
import Homebuyer from './seller/Home';
import Additems from './seller/additems';
import Listitems from './seller/listitems';
import SellerNavbar from '../components/sellerNav/SellerNavBar';
import SellerSidebar from '../components/sellerNav/SellerSideBar';
import ListProduct from './seller/products/ListProduct';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Seller = () => {
  const [mode, setMode] = useState("light");
  return (
    <div>
     
      <Box >
        <SellerNavbar/>
       
        <Grid container spacing={0}>
        <Grid item xs={2}>
      <SellerSidebar setMode={setMode} mode={mode}/>
         </Grid>
         <Grid item xs={10} style={{padding:"100px" }}>
           <Routes>
             <Route exact path='/' element={<ListProduct/>}/>
             <Route exact path='/add' element={<Additems/>}/>
             <Route exact path='/list' element={<Listitems/>}/>
             
           </Routes>
        
         
        
         </Grid>
       </Grid>
       
        
        
       
      </Box>
     
    </div>
  )
}

export default Seller;