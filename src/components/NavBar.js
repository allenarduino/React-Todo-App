import React from "react";
import { TaskContext } from "../contexts/TaskContextProvider";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    backgroundColor: "rgb(95, 32, 155)",
    color: "#fff"
  }
});

const NavBar = () => {
  const classes = useStyle();
  const { tasks } = React.useContext(TaskContext);

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar varient="dense" style={{ justifyContent: "center" }}>
        <Typography varient="h6" color="inherit">
          React Todo List ({tasks.length})
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
