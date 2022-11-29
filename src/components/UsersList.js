import React, { Fragment, useContext } from "react";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import UsersContext from "../store/users-context";

import styles from "./UsersList.module.scss";
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
const UsersList = () => {
  const usersCtx = useContext(UsersContext);

  return (
    <div className={styles.userList}>
      <h1>Users list</h1>
      <div className={styles.tableFlow}>
        <form>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Event Title</th>
                <th>Location</th>
                <th>Room</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Capacity</th>
                <th>Subject</th>
                <th>Class</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {usersCtx.users.map((user) => (
                <Fragment key={user.id}>
                  {usersCtx.editUserId === user.id ? (
                    <EditableRow />
                  ) : (
                    <ReadOnlyRow user={user} />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default UsersList;
