import {useState, useEffect} from 'react';
import '../styles/countdown.css';

const Countdown = () => {
    const [repaintClass, setRepaintClass] = useState('');
    const [second, setSecond] = useState(3);
    let grid = [];

    useEffect(() => {
        if (second < 1) {
            return;
        }

        const timer1 = setTimeout(() => {
            setSecond( second - 1);
        }, 1200);

        const timer2 = setTimeout(() => {
            setRepaintClass(`repaint`);
        }, 1200);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        }
    });

    useEffect(() => setRepaintClass(`number-${second}`), [second]);

    for (let x = 1; x <= 15; x ++) {
        for (let y = 1; y <= 9; y++) {
            grid.push(<div className={`x${x}-y${y}`}></div>);
        }
    }

    if (second <= 0) {
        return (
            <div>
                <h1><div className='text-go'>GO!</div></h1>
                <button onClick={() => setSecond(3)}>Start over</button>
            </div>

        )
    }

    return (
        <div className="countdown">
            <div id="countdown-grid" className={repaintClass}>
                {grid}
            </div>
        </div>
    )
};

export default Countdown;