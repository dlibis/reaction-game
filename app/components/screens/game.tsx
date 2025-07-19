"use client";
import FeedbackComponent from "@/app/components/game-components/feedback";
import Indicator from "@/app/components/game-components/indicator";
import CountdownTimer from "@/app/components/game-components/countdown-timer";

import { useRunGame } from "@/app/hooks/useRunGame";
import { ROUND_DURATION_MS } from "@/app/constants/game-config";

const Game = () => {
  const { screenState, indicatorSide, feedback } = useRunGame();

  return (
    <div className="relative w-full  flex flex-col">
      {screenState === "waiting" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <div className="text-2xl mb-4">Get Ready...</div>
          <div className="text-lg text-gray-400">
            Press 'a' for left, 'l' for right
          </div>
        </div>
      )}

      {screenState === "running" && (
        <>
          <Indicator indicatorSide={indicatorSide} />
          <CountdownTimer duration={ROUND_DURATION_MS} />
        </>
      )}

      {feedback && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl font-semibold">
          <FeedbackComponent feedback={feedback} />
        </div>
      )}
    </div>
  );
};
export default Game;
