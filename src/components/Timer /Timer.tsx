import './Timer.scss';
import { FC, useEffect, useRef, useState } from 'react';
import { Player } from '../../models';
import { Colors } from '../../types';

type TimerProps = {
    currentPlayer: Player | null,
    restart: () => void,
}

export const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlack] = useState(300)
    const [whiteTime, setWhite] = useState(300)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTimer()
    }, [currentPlayer])

    useEffect(() => {
        if ( blackTime === 0 ) {
            alert('Black lose!');
            restart();
            setBlack(300);
            setWhite(300);
        } else if ( whiteTime === 0 ) {
            alert('White lose!');
            restart();
            setBlack(300);
            setWhite(300);
        }
    },[blackTime, whiteTime])

    const startTimer = () => {
        if (timer.current) {
            clearInterval(timer.current)
        }

        const callback = currentPlayer?.color === Colors.BLACK ? decrementBlack : decrementWhite;
        timer.current = setInterval(callback, 1000)
    }

    const decrementBlack = () => {
        setBlack(prev => prev - 1)
    }

    const decrementWhite = () => {
        setWhite(prev => prev - 1)
    }

    const setNewTimer = () => {
        const timer = prompt('Set new timer!');
        if (timer) {
            setBlack(+timer);
            setWhite(+timer);
        }
        restart()
    }

    return (<section className="timer-container">
        <div className="timer-content">
            <div className="timer-buttons">
                <button type={'button'}
                        onClick={setNewTimer}
                        aria-label={'new timer'}
                >
                    new timer
                </button>
                <button type={'button'}
                        onClick={() => restart()}
                        aria-label={'restart'}>
                    restart
                </button>
            </div>
            <div>
                <p>white player: {whiteTime}</p>
                <p>black player: {blackTime}</p>
            </div>
        </div>
    </section>)
}