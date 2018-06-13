import React from 'react';

export default class ResultsItem extends React.Component {
    render() {
        return (
            <li className="list-group-item"><span>{this.props.index + 1}.</span> {this.props.item}</li>
        );
    }
}