import  { useState } from 'react';
import avatar from "../assets/images/avatar.png";

const Rewards = () => {
  const [kidName, setKidName] = useState('');
  const [goalName, setGoalName] = useState('');
  const [goalLength, setGoalLength] = useState(1); // Default to 1 day

  const handleAddGoal = () => {
    // Add goal logic here
    console.log({ kidName, goalName, goalLength });
  };

  const handleLogout = () => {
    // Logout logic here
  };

  return (
    <div className="container mx-auto p-4 h-screen flex flex-col justify-center">
      {/* Top right logout button */}
      <div className="absolute top-2 right-2">
        <button
          className="btn btn-ghost"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Centered content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
        {/* Input Column */}
        <div className="flex flex-col items-center w-full lg:w-96">
          <input
            type="text"
            placeholder="Kid's Name"
            className="input input-bordered w-full mb-3"
            value={kidName}
            onChange={(e) => setKidName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Goal Name"
            className="input input-bordered w-full mb-3"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Goal Length (1-7 days)"
            className="input input-bordered w-full mb-3"
            min="1"
            max="7"
            value={goalLength}
            onChange={(e) => setGoalLength(e.target.value)}
          />
          <button
            className="btn btn-primary w-full"
            onClick={handleAddGoal}
          >
            Add Goal
          </button>
        </div>

        {/* Avatar Column */}
        <div className="flex flex-col items-center">
          <div className="avatar mb-3">
            <div className="w-24 rounded-full">
              <img src={avatar} alt="User Avatar" />
            </div>
          </div>
          <div className="text-center">
            <span className="badge badge-outline">SignedIn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
