import { useEffect, useState } from "react";
import { getProfile } from "../services/authService";

function Profile() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setUser(response.data.user);
      } catch (error) {
        setMessage(
          error.response?.data?.message || "Failed to load profile"
        );
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Profile</h1>

      {message && <p>{message}</p>}

      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;