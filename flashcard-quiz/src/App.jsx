import React from "react";
import Flashcards from "./components/Flashcards";
import './App.css';

const flashcards = [
  {
    question: "I am the CEO of Tesla and SpaceX. I also acquired a major social media platform. Who am I?",
    answer: "Elon Musk",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
    difficulty: "hard",
  },
  {
    question: "I am a singer-songwriter known for albums like 1989, Reputation, and Midnights. Who am I?",
    answer: "Taylor Swift",
    image: "https://variety.com/wp-content/uploads/2020/01/taylor-swift-variety-cover-5-16x9-1000.jpg?w=1000&h=563&crop=1",
    difficulty: "medium",
  },
  {
    question: "I am a Portuguese footballer with multiple Ballon d'Or wins and have played for clubs like Manchester United, Real Madrid, and Al-Nassr. Who am I?",
    answer: "Cristiano Ronaldo",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    difficulty: "hard",
  },
  {
    question: "I am a famous talk show host, media mogul, and philanthropist known for The Oprah Winfrey Show. Who am I?",
    answer: "Oprah Winfrey",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Oprah_Winfrey_at_2011_TCA.jpg",
    difficulty: "easy",
  },
  {
    question: "I played a genius billionaire superhero in the Marvel Cinematic Universe. Who am I?",
    answer: "Robert Downey Jr.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg",
    difficulty: "medium",
  },
  {
    question: "I won the FIFA World Cup with Argentina in 2022 and have played for FC Barcelona and Inter Miami. Who am I?",
    answer: "Lionel Messi",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Lionel_Messi_WC2022.jpg",
    difficulty: "hard",
  },
  {
    question: "I was a WWE champion before becoming one of Hollywood’s highest-paid actors. Who am I?",
    answer: "Dwayne 'The Rock' Johnson",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Dwayne_Johnson_2013.jpg",
    difficulty: "easy",
  },
  {
    question: "I am a singer known for hits like Single Ladies, Halo, and Crazy in Love. Who am I?",
    answer: "Beyoncé",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Beyonce_Knowles_2020.jpg",
    difficulty: "medium",
  },
  {
    question: "I played Captain Jack Sparrow in Pirates of the Caribbean. Who am I?",
    answer: "Johnny Depp",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Johnny_Depp_2018.jpg",
    difficulty: "hard",
  },
  {
    question: "I portrayed Hermione Granger in the Harry Potter film series. Who am I?",
    answer: "Emma Watson",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Emma_Watson_2013.jpg",
    difficulty: "easy",
  }
];

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Celebrity Quiz</h1>
      <h2 className="text-lg text-gray-300">Identify celebrities based on the hint or image</h2>
      <h3 className="text-gray-400 mt-2">Number of flashcards: {flashcards.length}</h3>
      <Flashcards flashcards={flashcards} />
    </div>
  );
};

export default App;
