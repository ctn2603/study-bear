import React, { Fragment } from "react";
import RegistrationForm from "./RegistrationForm";
import UsersList from "./UsersList";

const Users = () => {
  return (
    <Fragment>
      <RegistrationForm />
      <UsersList />
    </Fragment>
  );
};

export default Users;
