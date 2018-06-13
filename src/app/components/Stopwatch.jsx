import React from 'react';
import {formatTimes, step} from '../utils/utils';
import Buttons from './Buttons.jsx';
import Results from './Results.jsx';

export default class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
            results: [],
            addDisabled: false,
            clearDisabled: true,
            info: ''
        };
    }
    start = () => {
        if (!this.state.running) {
            this.setState({
                running: true
            });
            this.watch = setInterval(() => {
                let updated = step(this.state);
                this.setState({
                    times: {
                        minutes: updated.minutes,
                        seconds: updated.seconds,
                        miliseconds: updated.miliseconds
                    }
                });
            }, 10);            
        }
    }
    stop = () => {
        this.setState({
            running: false
        });
        clearInterval(this.watch);
    }
    reset = () => {
        this.setState({
            running: false,
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        });
    }
    add = () => {
        if (this.state.results.length <= 9) {
            this.state.results.push(formatTimes(this.state.times));
            let updatedResults = this.state.results;
            this.setState({
                results: updatedResults,
                clearDisabled: false
            });
        } else {
            this.setState({
                addDisabled: true,
                info: 'Osiągnięto maksymalną liczbę wyników dla tabeli!'
            });
        }
    }
    clearList = () => {
        this.setState({
            results: [],
            addDisabled: false,
            clearDisabled: true,
            info: ''
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center mt-2 mb-3">
                    <div className="stopwatch col-3 text-center">{formatTimes(this.state.times)}</div>
                </div>
                <Buttons start={this.start} stop={this.stop} reset={this.reset} add={this.add} disabled={this.state.addDisabled} />
                <Results results={this.state.results} disabled={this.state.clearDisabled} info={this.state.info} clearList={this.clearList} />
            </div>
        );
    }
}