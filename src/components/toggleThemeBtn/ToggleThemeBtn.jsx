'use client';

import { use } from 'react';
import { ThemeContext } from '../themeContext';
import { Button } from '../button/Button';

export const ToggleThemeBtn = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <Button
      onClick={toggleTheme}
      title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
    />
  );
};
