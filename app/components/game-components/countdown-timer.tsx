"use client";
import { useTimer } from "@/app/hooks/useTimer";

interface CountdownTimerProps {
  duration: number; // Duration in milliseconds
}

const CountdownTimer = ({ duration }: CountdownTimerProps) => {
  const { displayTime, strokeDashoffset, circumference, radius } =
    useTimer(duration);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#374151"
            strokeWidth="8"
            fill="transparent"
            className="opacity-30"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#ef4444"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-[10ms] ease-linear"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-xl font-bold">
            {displayTime.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
