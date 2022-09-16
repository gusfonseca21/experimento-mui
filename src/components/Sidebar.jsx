import {
  AccountBox,
  AutoStories,
  DarkMode,
  Group,
  Home,
  Person,
  Settings,
  Store,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Switch,
} from "@mui/material";
import React from "react";

const ItemButton = styled(ListItemButton)({
  width: "100%",
});

const SideBar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box sx={{ position: "fixed" }}>
        <List>
          <ListItem
            disablePadding
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flex: "1",
            }}
          >
            <ItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ItemButton>
            <ItemButton component="a" href="#pages">
              <ListItemIcon>
                <AutoStories />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ItemButton>
            <ItemButton component="a" href="#groups">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ItemButton>
            <ItemButton component="a" href="#marketplace">
              <ListItemIcon>
                <Store />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ItemButton>
            <ItemButton component="a" href="#friends">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ItemButton>
            <ItemButton component="a" href="#settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ItemButton>
            <ItemButton component="a" href="#profile">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ItemButton component="a" href="#profile">
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
              <Switch />
            </ItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
