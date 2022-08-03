import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Search } from "./Search";
import { SearchIconWrapper } from "./SearchIconWrapper";
import SearchIcon from "@mui/icons-material/Search";
import { StyledInputBase } from "./StyledInputBase";
import AppBar from "@mui/material/AppBar";

const DrawerAppBar = (props) => {
  const { search, setSearch, drawerWidth, handleDrawerToggle, location } =
    props;
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        backgroundColor: "#f1f1f1",
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
          color="default"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" color="black">
          Applicants
        </Typography>
        {location === "/" ? (
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                e.preventDefault();
                setSearch(e.target.value);
              }}
              value={search}
            />
          </Search>
        ) : (
          ""
        )}
      </Toolbar>
    </AppBar>
  );
};

export default DrawerAppBar;
