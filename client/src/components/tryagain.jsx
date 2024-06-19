import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/tryagain.css';

function TryAgain() {
  const navigate = useNavigate();

  const tryAgain = async () => {
    try {
      await axios.post('http://192.168.213.198:3000/ready-to-read');
      navigate('/round1');
    } catch (error) {
      console.error('Error signaling ready to read:', error);
    }
  };

  return (
    <div className="tryagain">
      <h1>Try Again</h1>
      <button onClick={tryAgain}>Try Again</button>
    </div>
  );
}

export default TryAgain;