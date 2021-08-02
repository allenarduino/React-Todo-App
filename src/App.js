import React from "react";
import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import TodoListComponent from "./components/TodoListComponent";
import TaskContext from "./contexts/TaskContextProvider";

function App() {
  return (
    <Container>
      <TaskContext>
        <NavBar></NavBar>
        <TodoListComponent></TodoListComponent>
      </TaskContext>
    </Container>
  );
}
export default App;
