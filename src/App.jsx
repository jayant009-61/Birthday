import React, { useState, useRef } from "react";
import "./index.css";

const App = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const audioRef = useRef(null);

  // Start celebration (video + song)
  const startCelebration = () => {
    if (name.trim() !== "") {
      setSubmitted(true);

      // Play song after celebration starts
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch((err) => {
            console.log("Audio play blocked:", err);
          });
        }
      }, 300);
    }
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      startCelebration();
    }
  };

  return (
    <div className="app">
      {!submitted ? (
        <div className="input-container">
          <h1>Enter Your Name Here</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyPress}  // ⏎ will start celebration
            placeholder="Type name and press Enter"
          />
          <br />
          <button onClick={startCelebration}>Click</button>
        </div>
      ) : (
        <div className="birthday-container">
          {/* Background Video */}
          <video autoPlay loop className="background-video">
            <source src="/3831835-uhd_4096_2160_25fps.mp4" type="video/mp4" />
          </video>

          {/* Greeting */}
          <div className="overlay">
            <h1>🎂 Happy Birthday {name} 🎉</h1><br /><br /> 
            {/* ... */}
            <h2>You’re officially older, but don’t worry—you’re still not as old as you’ll be next year 😜</h2>
            <h2>Congrats on surviving another trip around the sun without too many wrinkles 😆🎂</h2>
          </div>

          {/* Birthday Song */}
          <audio ref={audioRef} loop>
            <source src="/birthday-card-73275.mp3" type="audio/mpeg" />
          </audio>
        </div>
      )}
    </div>
  );
};

export default App;
