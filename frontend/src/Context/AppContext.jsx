import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getUser() {
    if (!token) return;

    setLoading(true);
    setError(null);

    try {
      // console.log("Fetching user data with token");
      const res = await fetch("/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log("User API response status:", res.status);

      if (!res.ok) {
        const errorText = await res.text();
        // console.error("Error fetching user data:", errorText);
        throw new Error(`Failed to fetch user data: ${res.status}`);
      }

      const data = await res.json();
      // console.log("User data received:", data);

      setUser(data);
      setIsAdmin(data.role === 'admin');
    } catch (error) {
      // console.error("Error in getUser:", error);
      setError(error.message);

      // Handle invalid token by clearing it
      if (error.message.includes("401")) {
        // console.log("Invalid token detected, clearing token");
        localStorage.removeItem("token");
        setToken(null);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token) {
      getUser();
    } else {
      setUser(null);
      setIsAdmin(false);
    }
  }, [token]);

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        isAdmin,
        loading,
        error,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  );
}