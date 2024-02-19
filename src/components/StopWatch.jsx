import React, {useState, useEffect, useRef} from 'react'
import { padZero } from '../utilities';
import {
    IconPlayerPlay,
    IconPlayerStop,
    IconReload,
    IconRun,
 } from '@tabler/icons-react';

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
    const lapTimesRef = useRef([]);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning]);

    const startStop = () => {
        if (!isRunning) {
            setIsRunning(true);
            startTimeRef.current = Date.now() - elapsedTime;
            return;
        }

        setIsRunning(false);
    };

    const lap = () => {
        const lapTime = Date.now();
        lapTimesRef.current.push(lapTime);
    };

    const reset = () => {
        if (isRunning) {
            return;
        }

        setElapsedTime(0);
        lapTimesRef.current.length = 0;
    };

    const formatTime = () => {
        const hours = Math.floor(elapsedTime / (1000 * 60 * 60)),
            minutes = Math.floor(elapsedTime / (1000 * 60) % 60),
            seconds = Math.floor(elapsedTime / 1000 % 60),
            milliseconds = Math.floor((elapsedTime % 1000) / 10);

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
    };

    return (
        <div className='content'>
            <div className='stopwatch-parent'>
                <div className="stopwatch">
                    <div className="display">
                        {formatTime()}
                    </div>
                    <div className="controls">
                        {
                            !isRunning &&
                            <button onClick={startStop} className="start-button">
                                <span className='icon-text'>
                                    <span className="icon"><IconPlayerPlay /></span>
                                    <span>Start</span>
                                </span>
                            </button>
                        }
                        {
                            isRunning &&
                            <button onClick={startStop} className="stop-button">
                                <span className='icon-text'>
                                    <span className="icon"><IconPlayerStop /></span>
                                    <span>Stop</span>
                                </span>
                            </button>
                        }
                        {
                            !isRunning &&
                            <button onClick={reset} className="reset-button">
                                <span className='icon-text'>
                                    <span className="icon"><IconReload /></span>
                                    <span>Reset</span>
                                </span>
                            </button>
                        }
                        {
                            isRunning &&
                            <button onClick={lap} className="lap-button">
                                <span className='icon-text'>
                                    <span className="icon"><IconRun /></span>
                                    <span>Lap</span>
                                </span>
                            </button>
                        }
                    </div>
                    {
                        lapTimesRef.current.length > 0 &&
                        <div className="lap-times">
                            <h4 className="title is-4">Lap Times</h4>
                                {
                                    lapTimesRef.current.map(
                                        (lapTime, index) =>
                                        <p key={index}>{ formatTime(lapTime) }</p>
                                        )
                                }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default StopWatch;