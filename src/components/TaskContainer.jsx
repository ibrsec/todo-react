import React from "react";
import { ListGroup } from "react-bootstrap";

const TaskContainer = ({ children }) => {
  return <ListGroup className="my-4 task-container">{children}</ListGroup>;
};

export default TaskContainer;
