import { getUsers } from "@/app/actions/getUsers";
import { useEffect, useState } from "react";

const EndGame = () => {
  const [usersBoard, setUsersBoard] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsersBoard(users);
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        Leaderboard
      </h2>
      <div className="space-y-3">
        {usersBoard.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center justify-between bg-gray-800 rounded-lg p-4 shadow-lg gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full text-sm font-semibold">
                {index + 1}
              </div>
              <img
                src={user.image}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-white">{user.name}</div>
                <div className="text-xs text-gray-400">{user.location}</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-400">
                {user.score}
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">
                Score
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default EndGame;
