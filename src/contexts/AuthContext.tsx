import React, { createContext, useContext, useState } from "react";

export type User = {
  email: string;
  authenticated: boolean;
};

export type AuthType = {
  children: React.ReactNode;
  initialUser?: User | null;
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children, initialUser }: AuthType) => {
  const [user, setUser] = useState<User | null>(initialUser || null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
