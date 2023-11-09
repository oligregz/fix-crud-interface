import { useState, useEffect } from "react";
import listUsers from "../../services/getUsers";
import './style.css'

const GetData = () => {
  const [users, setUsers] = useState({});
  const [renderUsers, setRenderUsers] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (users.users && users.users.length > 0) {
      console.log();
      setLoading(false);
    }
  }, [users]);

  const searchUsers = async () => {
    setLoading(true); // Mostra a mensagem de "Searching users"

    try {
      const usersData = await listUsers();
      setUsers(usersData);

      if (usersData.users && usersData.users.length > 0) {
        setRenderUsers(true);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  return (
    <div className="data-getter">
      <h3>
        <a
          href="https://github.com/oligregz/fix-crud/tree/deployment-architecture"
          target="_blank"
          rel="noopener noreferrer"
        >{`🔗 API repository 🔗`}</a>
      </h3>
      <button className="get" onClick={searchUsers}>
        Get
      </button>
      {loading && <p>Searching users...</p>}
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
