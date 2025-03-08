import { useState } from "react";
import Flashcard from "./Flashcard";

const Flashcards = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNextCard = () => {
    setFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    }, 300);
  };

  return (
    <div className="flashcards-container">
      <Flashcard flashcard={flashcards[currentIndex]} flipped={flipped} onFlip={() => setFlipped(!flipped)} />
      <button onClick={handleNextCard} className="next-btn">
        Next Card
      </button>
    </div>
  );
};

export default Flashcards;
