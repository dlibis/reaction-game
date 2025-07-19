import { updateScore } from "@/app/actions/updateScore";
import { create } from "zustand";

interface GameStore {
  user: User | null;
  setUser: (user: User) => void;
  updateUserScore: (score: number) => Promise<void>;
  gameState: "start" | "playing" | "end";
  setGameState: (gameState: "start" | "playing" | "end") => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  updateUserScore: async (score: number) => {
    const { user } = get();
    if (!user) return;
    const updatedUser = { ...user, score };
    set({ user: updatedUser });
    updateScore(user.id, score);
  },
  gameState: "start",
  setGameState: (gameState) => set({ gameState }),
}));
