import {
    AccountBox,
    Article,
    Group,
    Home,
    ModeNight,
    Person,
    Settings,
    Storefront,
  } from "@mui/icons-material";
  import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
  } from "@mui/material";
  import React from "react";
  import { Container, makeStyles, Typography } from "@material-ui/core";
  import {Link} from 'react-router-dom';
  
  const useStyles = makeStyles((theme) => ({
    container: {
      height: "100vh",
      color: "white",
      paddingTop: theme.spacing(8),
      backgroundColor: theme.palette.primary.main,
      paddingRight: '130px',
      top: 0,
      [theme.breakpoints.up("sm")]: {
        backgroundColor: "white",
        color: "#555",
        border: "1px solid #ece7e7",
      },
    },
    item: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
        marginBottom: theme.spacing(3),
        cursor: "pointer",
      },
    },
    icon: {
      marginRight: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        fontSize: "18px",
      },
    },
    text: {
      fontWeight: 500,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));
  
  
  
  const SellerSidebar = ({mode,setMode}) => {
    const classes = useStyles();
    return (
      <div style={{position: "fixed" }}>
      <Container className={classes.container}>
        
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/seller">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
           <ListItemButton component={Link} to="/seller/add">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Panel" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  component={Link} to="/seller/list" >
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="StudentGroups" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
        </List>
       
        </Container>
        </div>
    )
  }
  export default SellerSidebar;