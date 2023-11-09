import { useState, useEffect } from "react";
import listUsers from "../services/getUsers";

const GetData = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    console.log(users);
  }, [users]);

  const searchUsers = async () => {
    try {
      const usersData = await listUsers();
      setUsers(usersData);
      console.log(usersData)
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="data-getter">
      <button className="get" onClick={searchUsers}>
        Get
      </button>
    </div>
  );
};

export default GetData;
