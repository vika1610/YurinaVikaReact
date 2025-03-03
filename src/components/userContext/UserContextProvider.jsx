import { useCallback, useState } from 'react';
import { UserContext } from './index';

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const setAuthorization = useCallback(() => {
    setUser((currentUser) => {
      if (currentUser.name) {
        return { ...currentUser, name: '' };
      } else {
        return { ...currentUser, name: 'Vikky', userId: '2551-qwerty-fhr5678' };
      }
    });
  }, []);

  return (
    <UserContext value={{ user, setAuthorization }}>{children}</UserContext>
  );
};
