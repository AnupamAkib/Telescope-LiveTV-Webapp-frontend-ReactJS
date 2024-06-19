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
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
    const [role, setRole] = useState("");
    useEffect(() => {
      let path = location.pathname;
      path = path.split("/");
      if(path[1]=="admin"){
        setRole("admin");
      }
      else{
        setRole("sec");
      }
      //console.log(role)
    }, [location.pathname])

  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));



  // EDIT HERE IF PAGES NEED TO ADD

    const pages = [];

    
    if(role=="sec"){
          pages.push({ text:"Login", href:"/login", icon:"fa fa-sign-in" });
          pages.push({ text:"Signup", href:"/register", icon:"fa fa-user-plus" });
          pages.push({ text:"About", href:"/about", icon:"fa fa-info-circle" });
    }



  return (
    <React.Fragment>
      <AppBar sx={{ background: "#674fa3", paddingBottom:"7px" }}  style={{zIndex:"11555"}}>
        <Toolbar style={{padding:"10px 8px 8px 8px"}}>
          <font size='5' style={{marginLeft:"15px"}}>
            <img src="/logo.png" width="165px" onClick={()=>navigate("/")}/> 
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