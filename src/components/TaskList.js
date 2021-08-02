import React from "react";
import {
  makeStyles,
  List,
  IconButton,
  ListItemText,
  ListItem,
  ListItemSecondaryAction
} from "@material-ui/core";
import CropFreeIcon from "@material-ui/icons/CropFree";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import { TaskContext } from "../contexts/TaskContextProvider";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.transparent
  },
  marked: {
    textDecoration: "line-through"
  }
}));

const TaskList = () => {
  const { sortedTasks, dispatch } = React.useContext(TaskContext);

  const classes = useStyles();

  const onCheked = (id, isChecked) => {
    dispatch({
      type: "CHECK_TASK",
      payload: {
        id,
        isChecked
      }
    });
  };

  return (
    <List className={classes.root}>
      {sortedTasks.map(task => {
        return (
          <ListItem
            key={task.id}
            role={undefined}
            dense
            button
            onClick={() => {
              onCheked(task.id, !task.isChecked);
            }}
          >
            <IconButton color="primary">
              {!task.isChecked ? <CropFreeIcon /> : <LibraryAddCheckIcon />}
            </IconButton>
            <ListItemText
              primary={task.description}
              className={task.isChecked ? classes.marked : ""}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_TASK",
                    id: task.id
                  });
                }}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TaskList;
