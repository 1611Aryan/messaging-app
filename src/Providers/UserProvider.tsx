import { createContext, useContext, useState } from "react";

interface user {
  name: null | string;
  id: null | string;
  room: null | string;
}

const UserContext = createContext<{
  user: user;
  setUser: React.Dispatch<React.SetStateAction<user>>;
}>({
  user: {
    name: null,
    id: null,
    room: null,
  },
  setUser: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  const [user, setUser] = useState<user>({
    name: null,
    id: null,
    room: null,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
