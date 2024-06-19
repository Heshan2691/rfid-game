import React, { useEffect } from 'react';
import axios from 'axios';
import '../styles/round2.css';
import Backimg from '../assets/level/back.png';

function Round2() {
  useEffect(() => {
    const signalReadyToRead = async () => {
      try {
        await axios.post('http://192.168.213.198:3000/ready-to-read');
        console.log('Signaled ready to read next card');
      } catch (error) {
        console.error('Error signaling ready to read:', error);
      }
    };

    signalReadyToRead();
  }, []);

  return (
    <div className='level'>
      <img src={Backimg} alt='back' className='back-img' />
      <div className="levelPage">
        <h1 className="level-text">Round 02</h1>
      </div>
    </div>
  );
}

export default Round2;