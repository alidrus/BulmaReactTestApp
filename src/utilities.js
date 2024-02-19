const padZero = (number) => {
    return number.toString(10).padStart(2, '0');
};

const formatElapsedTime = (elapsedTime) => {
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60)),
        minutes = Math.floor(elapsedTime / (1000 * 60) % 60),
        seconds = Math.floor(elapsedTime / 1000 % 60),
        milliseconds = Math.floor((elapsedTime % 1000) / 10);

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
};

export {
    padZero,
    formatElapsedTime,
};
