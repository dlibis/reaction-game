import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGameStore } from "@/lib/gameStore";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(1),
});

const StartGame = () => {
  const { setGameState, setUser } = useGameStore();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const user = await response.json();
        setUser(user);
        setGameState("playing");
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow gap-10">
      <h2 className="text-white text-3xl">Enter your name to start the game</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          {...register("name")}
          className="border border-gray-300 p-2 rounded-md bg-gray-100"
          placeholder="Enter your name"
          disabled={isSubmitting}
        />
        <button
          type="submit"
          className="bg-gray-100 text-black p-2 rounded-md disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Start Game"}
        </button>
      </form>
    </div>
  );
};
export default StartGame;
