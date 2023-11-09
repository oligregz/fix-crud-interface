import axios from "axios";

const listUsers = async () => {
  try {
    const url = `https://fix-crud-api.onrender.com/api/v2/user`;

    const res = await axios.get(url);

    return res.data;

  } catch (error) {
    throw new Error(error);
  }
}

export default listUsers;
