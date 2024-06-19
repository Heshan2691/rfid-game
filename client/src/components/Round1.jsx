import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/round1.css';
import Backimg from '../assets/level/back.png';

function Round1() {
  const [uuid, setUUID] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(fetchUUID, 1000); // Fetch UUID every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const fetchUUID = async () => {
    try {
      const response = await axios.get('http://192.168.213.198:3000/latest-uuid');
      const fetchedUUID = response.data.uuid;
      if (fetchedUUID) {
        setUUID(fetchedUUID);
        checkUUID(fetchedUUID);
      }
    } catch (error) {
      console.error('Error fetching the UUID:', error);
    }
  };

  const checkUUID = (fetchedUUID) => {
    if (fetchedUUID === '405dfd59') { // Replace 'desired-uuid' with your actual desired UUID
      navigate('/round2');
    } else {
      navigate('/tryagain');
    }
  };

  return (
    <div className='level'>
      <img src={Backimg} alt='back' className='back-img' />
      <div className="levelPage">
        <h1 className="level-text">Round 01</h1>
        <p>{uuid ? `Received UUID: ${uuid}` : 'Waiting for UUID...'}</p>
      </div>
    </div>
  );
}

export default Round1;