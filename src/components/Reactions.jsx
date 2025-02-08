import React, { useState } from "react";
import { FaHeart, FaThumbsDown } from "react-icons/fa";
import { FaFaceGrinTears } from "react-icons/fa6";

const Reactions = ({reactions}) => {
  console.log(reactions);
  const [reactionCounts, setReactionCounts] = useState({
    likes: reactions.likes,
    dislikes: reactions.dislikes,
    funny: 0,
  });

  const [userReaction, setUserReaction] = useState(null);

  const handleReaction = (type) => {
    setReactionCounts((prev) => {
      let updatedCounts = { ...prev };
  
      if (userReaction === type) {
        // Remove reaction
        updatedCounts[type] -= 1;
        setUserReaction(null);
      } else {
        // Add new reaction
        updatedCounts[type] += 1;
  
        // Remove previous reaction if it exists
        if (userReaction && userReaction !== type) {
          updatedCounts[userReaction] -= 1;
        }
  
        // Move setUserReaction outside to trigger re-render properly
      }
  
      return updatedCounts;
    });
  
    setUserReaction(userReaction === type ? null : type); // ✅ Fix: Triggers re-render correctly
  };
  
  return (
    <div className="mt-4 flex ">
      {/* ❤️ Like Button */}
      <button
        className={`flex items-center gap-1 px-3 py-1  ${
          userReaction === "likes" ? "bg-red-300" : "bg-amber-100"
        }`}
        onClick={() => handleReaction("likes")}
      >
        <FaHeart className="text-red-500" />
        {reactionCounts.likes}
      </button>

      {/* 👎 Dislike Button */}
      <button
        className={`flex items-center gap-1 px-3 py-1  ${
          userReaction === "dislikes" ? "bg-blue-300" : "bg-amber-100"
        }`}
        onClick={() => handleReaction("dislikes")}
      >
        <FaThumbsDown className="text-blue-400" />
        {reactionCounts.dislikes}
      </button>

      {/* 😂 Funny Button */}
      <button
        className={`flex items-center gap-1 px-3 py-1  ${
          userReaction === "funny" ? "bg-yellow-500" :  "bg-amber-100"
        }`}
        onClick={() => handleReaction("funny")}
      >
        <FaFaceGrinTears className="text-yellow-300" />
        {reactionCounts.funny}
      </button>
    </div>
  );
};

export default Reactions;
