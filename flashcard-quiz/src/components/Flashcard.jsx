import React, { useEffect, useState } from "react";

const Flashcard = ({ flashcard, flipped, onFlip }) => {
  const colors = [
    "linear-gradient(135deg, #ff9800, #ff5722)",  // Orange-Red
    "linear-gradient(135deg, #4caf50, #8bc34a)",  // Green
    "linear-gradient(135deg, #2196f3, #03a9f4)",  // Blue
    "linear-gradient(135deg, #9c27b0, #e91e63)",  // Purple-Pink
    "linear-gradient(135deg, #ffeb3b, #ffc107)",  // Yellow-Gold
  ];
  
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    setBgColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [flashcard]); // Change color when flashcard changes

  return (
    <div className="flashcard-container">
      <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={onFlip}>
        {/* Front Side */}
        <div className="flashcard-front" style={{ background: bgColor }}>
          <img src={flashcard.image} alt={flashcard.answer} className="flashcard-image" />
          <p className="question">{flashcard.question}</p>
        </div>

        {/* Back Side */}
        <div className="flashcard-back" style={{ background: bgColor }}>
          <p className="answer">{flashcard.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
