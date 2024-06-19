// src/AnimatedText.js

import React, { useEffect, useState } from 'react';
import '../styles/guideline1.css'

const speeds = {
  pause: 500,
  slow: 120,
  normal: 90,
  fast: 40,
  superFast: 10
};

const textLines = [
  { speed: speeds.normal, string: "hello" },
  { speed: speeds.pause, string: "", pause: true },
  { speed: speeds.normal, string: "what's up" },
  { speed: speeds.pause, string: "", pause: true },
  { speed: speeds.normal, string: "Now you want to select the relevant color and place on the game box" }
];

function AnimatedText() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const chars = [];
    textLines.forEach((line, index) => {
      if (index < textLines.length - 1) {
        line.string += " "; // Add a space between lines
      }

      line.string.split("").forEach((character) => {
        chars.push({
          character,
          isSpace: character === " " && !line.pause,
          delayAfter: line.speed,
          classes: line.classes || [],
          revealed: false
        });
      });
    });
    setCharacters(chars);
  }, []);

  useEffect(() => {
    let timeout;
    const revealOneCharacter = (list) => {
      const next = list.find((char) => !char.revealed);
      if (next) {
        next.revealed = true;
        setCharacters([...list]);
        const delay = next.isSpace && !next.pause ? 0 : next.delayAfter;
        timeout = setTimeout(() => revealOneCharacter(list), delay);
      }
    };
    timeout = setTimeout(() => revealOneCharacter(characters), 600);
    return () => clearTimeout(timeout);
  }, [characters]);

  return (
    <div className="text">
      {characters.map((char, index) => (
        <span
          key={index}
          className={`${char.revealed ? 'revealed' : ''} ${char.classes.join(' ')}`}
        >
          {char.character}
        </span>
      ))}
      <svg className="corner" viewBox="0 0 65 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 3.5L65 6.5V62L0 0L35 3.5Z" fill="white" />
      </svg>
    </div>
  );
}

export default Guideline1
