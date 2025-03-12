'use client';

import { use } from 'react';
import { Button } from '../button/Button';
import { UserContext } from '../userContext/index';
import c from './styles.module.scss';

export const AuthorizationBlock = () => {
  const { user, setAuthorization } = use(UserContext);

  return (
    <div className={c.container}>
      {user.name && <span className={c.user}>{user.name}</span>}
      <Button
        title={user.name ? 'Выйти' : 'Войти'}
        onClick={setAuthorization}
      />
    </div>
  );
};
