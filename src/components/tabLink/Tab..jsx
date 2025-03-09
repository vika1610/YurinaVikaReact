'use client';

import cl from 'classnames';
import { ThemeContext } from '../themeContext';
import { use } from 'react';
import c from './styles.module.scss';
import Link from 'next/link';

export const TabLink = ({ to, name, className, disabled }) => {
  const { theme } = use(ThemeContext);

  return (
    <Link href={to} className={className}>
      <button
        className={cl(c.tabBtn, {
          [c.dark]: theme === 'dark',
        })}
        disabled={disabled}
      >
        {name}
      </button>
    </Link>
  );
};
