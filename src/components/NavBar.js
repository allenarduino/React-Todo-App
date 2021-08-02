import React from "react";
import { TaskContext } from "../contexts/TaskContextProvider";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const NavBar = () => {
  const { tasks } = React.useContext(TaskContext);

  return (
    <AppBar position="static">
      <Toolbar varient="dense" style={{ justifyContent: "center" }}>
        <Typography varient="h6" color="inherit">
          React Todo List ({tasks.length})
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
