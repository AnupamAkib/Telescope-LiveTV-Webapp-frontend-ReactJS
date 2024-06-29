import React, { useEffect, useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation } from 'react-router-dom'

const DrawerComp = (props) => {
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
    


    const [openDrawer, setOpenDrawer] = useState(false);

    const pages = props.data;

    return (
      <React.Fragment>
        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
            <br/><br/><br/><br/>
            <center>
                <img src="/icon.jpg" width="60px" style={{borderRadius:"10px"}}/>
                <h2>Telescope</h2>
                A YouTube based Live TV app<br/>
                <b>version: 2.1</b>
            </center>
            <hr style={{border:"1px solid gray", width:"100%"}}/>
          
          <List sx={{width:"250px"}} onClick={()=>setOpenDrawer(false)}>
            {pages.map((page, index) => (
              <ListItemButton key={index} onClick={()=>navigate(page.href)}>
                <ListItemIcon>
                  <ListItemText><i className={page.icon} style={{marginRight:"10px", fontSize:"22px"}}></i><font style={{fontSize:"20px"}}>{page.text}</font></ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
            

            <center>
              <br/><br/>
              <button className="btn btn-secondary" onClick={()=>window.location.href="https://drive.google.com/drive/folders/13dBuln3fYhLGrOB7TgWzZCJqo6RZRJpK?usp=drive_link"}><i className="fa fa-android" style={{marginRight:"6px"}}></i>Download Android App</button>
            </center>
          </List>

        </Drawer>
        <IconButton
          sx={{ color: "white", marginLeft: "auto" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon color="white" style={{fontSize:"28px"}} />
        </IconButton>
      </React.Fragment>
    );
};

export default DrawerComp;