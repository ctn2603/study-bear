import React, { useContext, useState } from "react";
import UsersContext from "../store/users-context";
import Button from "./UI/Button";

const ReadOnlyRow = (props) => {
  
  const usersCtx = useContext(UsersContext);

 
  return (
    /*
    name: "",
    username: "",
    email: "",
    title: "",
    pinLocation: "",
    room: "",
    startTime: "",
    endTime: "",
    capacity: "",
    major: "",
    class: "",
    description: ""
  */
    <tr>
      <td>{props.user.name}</td>
      <td>{props.user.username}</td>
      <td>{props.user.email}</td>
      <td>{props.user.title}</td>
      <td>{props.user.pinLocation}</td>
      <td>{props.user.room}</td>
      <td>{props.user.startTime}</td>
      <td>{props.user.endTime}</td>
      <td>{props.user.capacity}</td>
      <td>{props.user.major}</td>
      <td>{props.user.class}</td>
      <td>{props.user.description}</td>
      <td>
        <Button onClick={(event) => usersCtx.onEdit(event, props.user)}>
          Edit
        </Button>
        <Button onClick={(event) => usersCtx.onDelete(event, props.user.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
