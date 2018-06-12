import '../sass/main.scss';

let startButton = document.getElementById('start'),
    stopButton = document.getElementById('stop'),
    resetButton = document.getElementById('reset'),
    addButton = document.getElementById('add'),
    clearButton = document.getElementById('clear'),
    display = document.querySelector('.stopwatch'),
    table = document.querySelector('.table'),
    resultsTable = document.querySelector('.results');

clearButton.setAttribute('disabled', 'disabled');

class Stopwatch {
    constructor() {
        this.running = false;
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
        display.innerText = this.format(this.times);
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
    addToResults() {
        let results = resultsTable.querySelectorAll('li').length + 1,
            lastResult = this.format(this.times),
            li = document.createElement('li'),
            paragraph = document.createElement('p');

        li.innerText = `${results}. ${lastResult}`;
        li.setAttribute('class', 'list-group-item');

        paragraph.innerText = 'Osiągnięto maksymalną liczbę wyników dostępną dla tabeli!';

        resultsTable.appendChild(li);

        if (results >= 10) {
            addButton.setAttribute('disabled', 'disabled');
            table.insertBefore(paragraph, clearButton);
        }

        if (clearButton.getAttribute('disabled') === 'disabled') {
            clearButton.removeAttribute('disabled');
        }
    }
    clearResults() {
        resultsTable.innerHTML = '';
        clearButton.setAttribute('disabled', 'disabled');
        table.removeChild(table.querySelector('p'));
        addButton.removeAttribute('disabled');
    }
}

function pad0 (value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

const stopwatch = new Stopwatch();

startButton.addEventListener('click', () => stopwatch.start());
stopButton.addEventListener('click', () => stopwatch.stop());
resetButton.addEventListener('click', () => stopwatch.resetTimer());
addButton.addEventListener('click', () => stopwatch.addToResults());
clearButton.addEventListener('click', () => stopwatch.clearResults());