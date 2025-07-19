"use client";

import { useGameStore } from "@/lib/gameStore";

const EndGameBtn = () => {
  const { setGameState, gameState } = useGameStore();
  return (
    <button
      className="bg-gray-100 text-black p-2 rounded-md"
      onClick={() => setGameState(gameState === "end" ? "start" : "end")}
    >
      {gameState === "end" ? "Start Game" : "End Game"}
    </button>
  );
};
export default EndGameBtn;
