import React from 'react';
import User from './User.jsx';

export default class UsersList extends React.Component {
    get users() {
        return this.props.users.map(user => <User key={user.id} user={user}/>);
    }

    render() {
        return (
            <div className="row justify-content-start">
                {this.users}
            </div>
        );
    }
}