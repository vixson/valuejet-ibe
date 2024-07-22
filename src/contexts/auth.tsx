"use client";
import config from "@/config.json";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  email: string;
}
interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void | Error>;
  logout: () => void;
}

export type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const { children } = props;

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    if (
      email === config.credentials.email &&
      password === config.credentials.password
    ) {
      const tempUser: User = { email };
      setUser(tempUser);
      localStorage.setItem("user", JSON.stringify(tempUser));
    } else {
      throw Error("Invalid Credentials");
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("user");
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
