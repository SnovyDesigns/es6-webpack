import React from 'react';
import ResultsItem from './ResultsItem.jsx';

export default class Results extends React.Component {
    render() {
        let results = this.props.results;
        results = results.map((item, index) => {
            return (
                <ResultsItem key={index} item={item} index={index}/>
            );
        });
    
        return (
            <div className="row justify-content-center">
                <div className="table col-6 text-center">
                    <h3 className="mb-3">Tabela wyników<br/><small>Tabela przechowuje ostatnie 10 dodanych wyników</small></h3>
                    <ul className="results list-group">
                        {results}
                    </ul>
                    {this.props.info !== '' ? <p>{this.props.info}</p> : null}
                    <button type="button" id="clear" className="btn btn-dark mt-3 mb-3" disabled={this.props.disabled} onClick={this.handleClear}>
                        Wyczyść listę
                    </button>
                </div>
            </div>
        );
    }
    handleClear = () => {
        this.props.clearList()
    }
}