// import { createContext, useContext, useState, useEffect } from "react";

// // Create context
// const AuthContext = createContext();

// // Custom hook
// export const useAuth = () => useContext(AuthContext);

// // Provider component
// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(() => localStorage.getItem("token") || "");
//   const [role, setRole] = useState(() => localStorage.getItem("role") || "");

//   // Save to localStorage on change
//   useEffect(() => {
//     if (token) localStorage.setItem("token", token);
//     else localStorage.removeItem("token");

//     if (role) localStorage.setItem("role", role);
//     else localStorage.removeItem("role");
//   }, [token, role]);

//   const login = (newToken, newRole) => {
//     setToken(newToken);
//     setRole(newRole);
//   };

//   const logout = () => {
//     setToken("");
//     setRole("");
//     localStorage.clear();
//   };

//   return (
//     <AuthContext.Provider value={{ token, role, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
import { createContext, useContext, useState, useEffect } from "react";

// Create context
const AuthContext = createContext();

// Custom hook
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const role = user?.role || "";

  // Save to localStorage on change
  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");

    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [token, user]);

  // 🔹 Login — save token + user
  const login = (newToken, newUser) => {
    setToken(newToken);
    setUser(newUser);
  };

  // 🔹 Logout — clear everything
  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ token, user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
