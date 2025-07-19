import { useEffect, useState } from "react";

export const useTimer = (duration: number) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((time) => {
        const newTime = time - 10; // Update every 10ms for smooth animation
        if (newTime <= 0) {
          return 0;
        }
        return newTime;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const progress = (timeLeft / duration) * 100;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const displayTime = Math.max(0, Math.floor(timeLeft / 100)) / 10;

  return { timeLeft, displayTime, strokeDashoffset, circumference, radius };
};
