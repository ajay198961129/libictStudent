import React, { useEffect, useState } from "react";
import { getUser, createUser, updateUser, deleteUser } from "../api/userApi";

const UserComponent = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser(1)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleCreateUser = () => {
    createUser({ name: "New User" })
      .then((response) => {
        console.log("User created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  const handleUpdateUser = () => {
    updateUser(1, { name: "Updated User" })
      .then((response) => {
        console.log("User updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  const handleDeleteUser = () => {
    deleteUser(1)
      .then((response) => {
        console.log("User deleted:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>User Data</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={handleCreateUser}>Create User</button>
      <button onClick={handleUpdateUser}>Update User</button>
      <button onClick={handleDeleteUser}>Delete User</button>
    </div>
  );
};

export default UserComponent;
