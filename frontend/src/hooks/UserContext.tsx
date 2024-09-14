import { createContext, useEffect, useState, ReactNode } from "react";

type UserContextType = {
  currentUser: string | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<string | null>>;
};

const initAuthContextPropsState: UserContextType = {
  currentUser: null,
  setCurrentUser: () => {},
};

export const UserContext = createContext<UserContextType>(initAuthContextPropsState);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const storedUser = localStorage.getItem("userToken");
  const initialUser = storedUser ? JSON.parse(storedUser) : null;


  const [currentUser, setCurrentUser] = useState<string | null>(initialUser);


  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("userToken", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;