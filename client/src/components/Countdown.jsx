import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/countdown.css';

const Countdown = () => {
  const [repaintClass, setRepaintClass] = useState('');
  const [second, setSecond] = useState(3);
  const [showGo, setShowGo] = useState(false);
  let grid = [];
  const navigate = useNavigate();

  useEffect(() => {
    if (second < 1) {
      setShowGo(true);
      const timer = setTimeout(() => {
        navigate('/round1');
      }, 1000); // Show "GO!" for 1 second before navigating

      return () => clearTimeout(timer);
    }

    const timer1 = setTimeout(() => {
      setSecond(second - 1);
    }, 1200);

    const timer2 = setTimeout(() => {
      setRepaintClass('repaint');
    }, 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [second, navigate]);

  useEffect(() => setRepaintClass(`number-${second}`), [second]);

  for (let x = 1; x <= 15; x++) {
    for (let y = 1; y <= 9; y++) {
      grid.push(<div className={`x${x}-y${y}`} key={`x${x}-y${y}`}></div>);
    }
  }

  if (showGo) {
    return (
      <div>
        <h1><div className='text-go'>GO!</div></h1>
      </div>
    );
  }

  return (
    <div className="countdown">
      <div id="countdown-grid" className={repaintClass}>
        {grid}
      </div>
    </div>
  );
};

export default Countdown;
