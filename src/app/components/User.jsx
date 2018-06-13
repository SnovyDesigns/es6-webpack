import React from 'react';

export default class User extends React.Component {
    render() {
        return (
            <div className="card text-center" style={{maxWidth: '150px'}}>
                <img className="card-img-top" src={this.props.user.avatar_url} />
                <div className="card-body">
                    <a href={this.props.user.html_url} target="_blank" className="card-title">{this.props.user.login}</a>
                </div>
            </div>
        );
    }
}