class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }
    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }
    print() {
        this.display.innerText = this.format(this.times);
    }
    format() {
        return `${pad0(this.times.minutes)}:${pad0(this.times.seconds)}:${pad0(Math.floor(this.times.miliseconds))}`;
    }
    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);            
        }
    }
    step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }
    calculate() {
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }
    stop() {
        this.running = false;
        clearInterval(this.watch);
    }
    resetTimer() {
        this.running = false;
        this.reset();
        this.print(this.times);
    }
}

function pad0 (value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

const stopwatch = new Stopwatch(document.querySelector('.stopwatch'), document.querySelector('.results'));
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

startButton.addEventListener('click', () => stopwatch.start());
stopButton.addEventListener('click', () => stopwatch.stop());
resetButton.addEventListener('click', () => stopwatch.resetTimer());