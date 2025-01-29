import { useEffect, useState } from 'react';

export const useScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', updateProgressBar);

    return () => {
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  const updateProgressBar = () => {
    const scrollHeight = document.body.scrollHeight;
    const visibleHeight = window.innerHeight;

    const restHeight = scrollHeight - visibleHeight;
    const scrollPosition = window.scrollY;

    const progress = (scrollPosition / restHeight) * 100;

    setProgress(progress);
  };

  return progress;
};
