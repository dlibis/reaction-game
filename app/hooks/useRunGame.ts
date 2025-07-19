import { updateScore } from "@/app/actions/updateScore";
import { ROUND_DURATION_MS } from "@/app/constants/game-config";
import { Feedback } from "@/app/types/game";
import { useGameStore } from "@/lib/gameStore";
import { useCallback, useEffect, useRef, useState } from "react";

export const useRunGame = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [screenState, setScreenState] = useState<"waiting" | "running">(
    "waiting"
  );
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [indicatorSide, setIndicatorSide] = useState<"left" | "right">("left");
  const { updateUserScore, user } = useGameStore();

  const clearAllTimers = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const setupRound = useCallback(() => {
    clearAllTimers();
    setScreenState("waiting");
    setTimeout(() => {
      setFeedback(null);
    }, 500);

    // Random wait time between 2-5 seconds
    const waitTime = Math.random() * 3000 + 2000;

    timerRef.current = setTimeout(() => {
      setIndicatorSide(Math.random() < 0.5 ? "left" : "right");
      setFeedback(null);
      setScreenState("running");

      // Indicator visible for 1 second, then too late
      timerRef.current = setTimeout(() => {
        setFeedback("tooLate");
        setupRound();
      }, ROUND_DURATION_MS);
    }, waitTime);
  }, [clearAllTimers]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (screenState === "waiting") {
        setFeedback("tooSoon");
        return;
      }
      clearAllTimers();

      const correctKey = indicatorSide === "left" ? "a" : "l";
      if (event.key.toLowerCase() === correctKey) {
        setFeedback("success");
        updateUserScore((user?.score || 0) + 1);
      } else {
        setFeedback("wrongKey");
      }
      setupRound();
    },
    [screenState, indicatorSide, clearAllTimers, setupRound]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Initialize first round
  useEffect(() => {
    setupRound();
    return clearAllTimers;
  }, [setupRound, clearAllTimers]);

  return { screenState, indicatorSide, feedback, setupRound };
};
