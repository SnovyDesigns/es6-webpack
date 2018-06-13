const pad0 = value => {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
};

const formatTimes = (times) => {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
};

const step = (obj) => {
    if (!obj.running) return;
    let miliseconds = obj.times.miliseconds += 1;
    let seconds = obj.times.seconds;
    let minutes = obj.times.minutes;

    if (miliseconds >= 100) {
        seconds += 1;
        miliseconds = 0;
    }
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }

    return {
        miliseconds: miliseconds,
        seconds: seconds,
        minutes: minutes
    };
};

export {formatTimes, step};