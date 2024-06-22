import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./Drawer";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const [token, setToken] = useState(localStorage.getItem("token"));

  setInterval(() => {
    setToken(localStorage.getItem("token"));
  }, 3000);


  useEffect(() => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/verifyToken`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      setUserLoggedIn(true);
      setUser(response.data);
      //console.log(response.data)
    },
    (err) => {
      setUserLoggedIn(false);
      localStorage.clear();
    });
  }, [token]);

  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));



  // EDIT HERE IF PAGES NEED TO ADD

    const pages = [];

    
    if(!userLoggedIn){
      pages.push({ text:"Login", href:"/login", icon:"fa fa-sign-in" });
      pages.push({ text:"Signup", href:"/register", icon:"fa fa-user-plus" });
    }
    else{
      pages.push({ text:user.fullName, href:"", icon:"fa fa-user" });
      pages.push({ text:"Logout", href:"/logout", icon:"fa fa-sign-out" });
    }
    pages.push({ text:"About", href:"/about", icon:"fa fa-info-circle" });

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#674fa3", paddingBottom:"", marginTop:"-2px"}}  style={{zIndex:"11555"}}>
        <Toolbar className="container" style={{padding:"10px 8px 8px 8px"}}>
          <font style={{marginLeft:"15px"}}>
            <img src="/logo.png" width="135px" onClick={()=>navigate("/")}/> 
          </font>
          
          {isMatch ? (
            <>
              <DrawerComp data = {pages}/>
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {pages.map((page, index) => (
                <Tab style={{fontSize:"17px"}} label={page.text} onClick={()=>navigate(page.href)} />
                ))}
                

              </Tabs>


            </>
          )}
        </Toolbar>
      </AppBar><br/><br/><br/>
    </React.Fragment>
  );
};

export default Header;