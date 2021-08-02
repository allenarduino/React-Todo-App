import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: "#f5f5f5"
  }
}));

const TodoListComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AddTask></AddTask>
        </Grid>
        <Grid item xs={12}>
          <TaskList></TaskList>
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoListComponent;
