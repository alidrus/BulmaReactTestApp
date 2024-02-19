import React, { useEffect, useState } from 'react';
import { padZero } from '../utilities';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formatTime = () => {
        const hours = time.getHours(),
            minutes = time.getMinutes(),
            seconds = time.getSeconds();

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    };

    return (
        <div className="tag is-link">{formatTime()}</div>
    );
}

export default DigitalClock