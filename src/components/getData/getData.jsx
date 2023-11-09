import { useState, useEffect } from "react";
import listUsers from "../../services/getUsers";
import './style.css'

const GetData = () => {
  const [users, setUsers] = useState({});
  const [renderUsers, setRenderUsers] = useState(false);

  useEffect(() => {
    if (users.users && users.users.length > 0) {
      console.log();
    }
  }, [users]);

  const searchUsers = async () => {
    try {
      const usersData = await listUsers();
      setUsers(usersData);
      if (usersData.users && usersData.users.length > 0) {
        setRenderUsers(true);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="data-getter">
      <button className="get" onClick={searchUsers}>
        Get
      </button>
      {renderUsers && (
        <ul>
          {users.users && users.users.map((user, index) => (
            <li key={index}>
              <div className="values">
                <div className="id">{user.id}</div>
                <div className="name">{user.full_name}</div>
                <div className="email">{user.user_email}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetData;
