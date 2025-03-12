'use client';

import { useScrollProgressBar } from '../../hooks/use-scroll-progress-bar';
import c from './styles.module.scss';

export const ScrollProgressBar = () => {
  const progress = useScrollProgressBar();

  return (
    <div className={c.progressBarContainer}>
      <div style={{ width: `${progress}%` }} className={c.progressBar}></div>
    </div>
  );
};
