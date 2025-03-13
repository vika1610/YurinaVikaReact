'use client';

import cl from 'classnames';
import { ThemeContext } from '../themeContext';
import { use } from 'react';
import c from './styles.module.scss';
import Link from 'next/link';

export const TabLink = ({ to, name, className, isActive }) => {
  const { theme } = use(ThemeContext);

  return (
    <Link
      href={to}
      className={cl(c.tabBtn, className, {
        [c.dark]: theme === 'dark',
        [c.isActive]: isActive,
      })}
    >
      {name}
    </Link>
  );
};
