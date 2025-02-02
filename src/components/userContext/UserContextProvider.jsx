import { useCallback, useState } from 'react';
import { UserContext } from './index';

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const setAuthorization = useCallback(() => {
    setUser((currentUser) => {
      if (currentUser.name) {
        return { ...currentUser, name: '' };
      } else {
        return { ...currentUser, name: 'Vikky' };
      }
    });
  }, []);

  return (
    <UserContext value={{ user, setAuthorization }}>{children}</UserContext>
  );
};
