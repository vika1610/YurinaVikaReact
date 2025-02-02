import { useEffect, useState } from 'react';

export const useScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const getProgress = () => {
    const scrollHeight = document.body.scrollHeight;
    const visibleHeight = window.innerHeight;

    const restHeight = scrollHeight - visibleHeight;
    const scrollPosition = window.scrollY;
    let progress = 0;

    if (restHeight > 0) {
      progress = (scrollPosition / restHeight) * 100;
    }

    return progress;
  };

  useEffect(() => {
    const updateProgressBar = () => {
      setProgress(getProgress());
    };

    window.addEventListener('scroll', updateProgressBar);

    return () => {
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  return progress;
};
