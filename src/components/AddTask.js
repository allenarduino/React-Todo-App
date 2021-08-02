import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { TaskContext } from "../contexts/TaskContextProvider";
const { v4: uuidv4 } = require("uuid");

const AddTask = () => {
  const { dispatch } = React.useContext(TaskContext);
  const [description, setDescription] = React.useState("");

  const onAddTask = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: uuidv4(),
        isChecked: false,
        created: new Date(),
        description: description
      }
    });
    setDescription("");
  };

  return (
    <form onSubmit={onAddTask}>
      <Grid container direction="row" justify="center" alignItems>
        <TextField
          label="Add Task"
          varient="outlined"
          size="small"
          value={description}
          onChange={e => {
            setDescription(e.target.value);
          }}
        ></TextField>
      </Grid>
    </form>
  );
};

export default AddTask;
