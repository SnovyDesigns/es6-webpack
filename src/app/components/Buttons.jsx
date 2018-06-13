import React from 'react';

export default class Buttons extends React.Component {
    render() {
        return (
            <div className="row justify-content-center mb-5">
                <div className="col-5">
                    <div className="row justify-content-around">
                        <button type="button" className="btn btn-success" id="start" onClick={this.handleStart}>Start</button>
                        <button type="button" className="btn btn-warning" id="stop" onClick={this.handleStop}>Stop</button>
                        <button type="button" className="btn btn-danger" id="reset" onClick={this.handleReset}>Reset</button>
                        <button type="button" className="btn btn-info" id="add" disabled={this.props.disabled} onClick={this.handleAdd}>Dodaj do wyników</button>
                    </div>
                </div>
            </div>
        );
    }
    handleStart = () => {
        this.props.start();
    }
    handleStop = () => {
        this.props.stop();
    }
    handleReset = () => {
        this.props.reset();
    }
    handleAdd = () => {
        this.props.add();
    }
}