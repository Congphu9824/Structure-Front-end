// hooks/useUser.js (custom hook - call api get infor user)
import { useEffect, useState } from "react";
import ApiUser from "../../../api/userApi";

const useUser = () => {
  const [users, setUsers] = useState([]); // Dùng array để lưu a lot of user
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await ApiUser.getUser();
        console.log("User data:", data);
        const usersData = data.$values || []; // Get all infor user
        setUsers(usersData);
      } catch (err) {
        setError("Không lấy được dữ liệu người dùng");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return { users, loading, error };
};

export default useUser;
