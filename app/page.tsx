"use client";

import EndGame from "@/app/components/screens/endGame";
import Game from "@/app/components/screens/game";
import StartGame from "@/app/components/screens/startGame";
import { useGameStore } from "@/lib/gameStore";

export default function Home() {
  const { gameState } = useGameStore();
  return (
    <>
      {gameState === "start" && <StartGame />}
      {gameState === "playing" && <Game />}
      {gameState === "end" && <EndGame />}
    </>
  );
}
