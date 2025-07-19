"use client";

import EndGameBtn from "@/app/components/game-components/endGameBtn";
import { useGameStore } from "@/lib/gameStore";

const Header = () => {
  const { user } = useGameStore();
  return (
    <div className="grid grid-cols-3 items-center p-4 h-header-height">
      <h1 className="text-2xl font-bold">Welcome to Reaction Game</h1>
      {user && (
        <>
          <p className="text-center">Score: {user.score}</p>
          <div className="flex justify-end">
            <EndGameBtn />
          </div>
        </>
      )}
    </div>
  );
};
export default Header;
