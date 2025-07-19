import { useState } from "react";

interface Position {
  x: number;
  y: number;
}

const Indicator = ({ indicatorSide }: { indicatorSide: "left" | "right" }) => {
  const [indicatorPosition] = useState<Position>({
    x: Math.random() * 50,
    y: Math.random() * 80,
  });

  return (
    <div
      className="absolute w-8 h-8 bg-red-500 rounded-full"
      style={{
        left: `${
          indicatorSide === "left"
            ? indicatorPosition.x
            : 100 - indicatorPosition.x
        }%`,
        top: `${indicatorPosition.y}%`,
      }}
    />
  );
};

export default Indicator;
