import { createContext, useState, useEffect } from "react";

let isInitial = true;

const UsersContext = createContext({
  users: [],
  editUserId: null,
  editUserData: {
    name: "",
    email: "",
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
  },
  onAddUserHandler: (user) => {},
  onDeleteHandler: (event, userId) => {},
  onEditInputChangeHandler: (event) => {},
  onEditHandler: (event, user) => {},
  onEditSaveHandler: (event) => {},
});

export function UsersContextProvider(props) {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editUserData, setEditUserData] = useState({
    name: "",
    email: "",
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
  });

  useEffect(() => {
    if (isInitial) {
      const localData = JSON.parse(localStorage.getItem("users"));
      localData && setUsers(localData);
      isInitial = false;
    } else {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  const onAddUserHandler = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const onDeleteHandler = (event, userId) => {
    event.preventDefault();
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const onEditInputChangeHandler = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newUserData = { ...editUserData };
    newUserData[fieldName] = fieldValue;

    setEditUserData(newUserData);
  };

  const onEditHandler = (event, user) => {
    event.preventDefault();
    setEditUserId(user.id);

    const formValues = {
      name: user.name,
      email: user.email,
      city: user.city,
      street: user.street,
      houseNumber: user.houseNumber,
      zipCode: user.zipCode,
    };

    setEditUserData(formValues);
  };

  const onEditSaveHandler = (event) => {
    event.preventDefault();

    const editedUser = {
      id: editUserId,
      name: editUserData.name,
      email: editUserData.email,
      city: editUserData.city,
      street: editUserData.street,
      houseNumber: editUserData.houseNumber,
      zipCode: editUserData.zipCode,
    };

    const updatedUsers = [...users];
    const index = users.findIndex((user) => user.id === editUserId);
    updatedUsers[index] = editedUser;

    setUsers(updatedUsers);
    setEditUserId(null);
  };

  const context = {
    users: users,
    editUserId: editUserId,
    editUserData: editUserData,
    onAddUser: onAddUserHandler,
    onDelete: onDeleteHandler,
    onEditInputChange: onEditInputChangeHandler,
    onEditSave: onEditSaveHandler,
    onEdit: onEditHandler,
  };

  return (
    <UsersContext.Provider value={context}>
      {props.children}
    </UsersContext.Provider>
  );
}

export default UsersContext;
