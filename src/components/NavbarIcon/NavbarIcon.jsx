/* eslint-disable no-unused-vars */
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import Switcher from "../Switch UI/Switcher";

export default function NavbarIcon() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="border-[black] border-[1px] dark:bg-black dark:border-white dark:border-[1px]"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <List className="sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-[10px_0] hidden">
        <select
          onChange={(event) => changeLanguage(event.target.value)}
          name=""
          id=""
          className="outline-none text-[15px] text-[#272727] dark:text-[white] dark:border-[1px] dark:bg-[black] dark:border-[white]"
        >
          <option value="">Lang</option>
          <option value="en">En</option>
          <option value="ru">Ru</option>
          <option value="tj">Tj</option>
        </select>
        <Switcher />
      </List>
      <List className="dark:bg-black dark:text-[white] uppercase">
        {[
          t("navbartext1"),
          t("navbartext2"),
          t("navbartext3"),
          t("navbartext4"),
          t("navbartext5"),
          t("navbartext6"),
          t("navbartext7"),
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className="dark:bg-black h-[29vh]">
        {[].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon className='dark:text-white' onClick={toggleDrawer(anchor, true)}></MenuIcon>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}