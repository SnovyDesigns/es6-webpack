import React from 'react';
import UsersList from './UsersList.jsx';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            users: []
        };
    }
    onChangeHandle(event) {
        this.setState({searchText: event.target.value});
    }
    onSubmit(event) {
        event.preventDefault();
        const {searchText} = this.state;
        const url = `https://api.github.com/search/users?q=${searchText}`;
        fetch(url)
            .then(response => response.json())
            .then(responseJson => this.setState({users: responseJson.items}));
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={event => this.onSubmit(event)} className="col-6">
                        <div className="form-group">
                            <label htmlFor="searchText">Search by user name:</label>
                            <input
                                type="text"
                                id="searchText"
                                className="form-control"
                                onChange={event => this.onChangeHandle(event)}
                                value={this.state.searchText}/>
                        </div>
                    </form>
                </div>
                <UsersList users={this.state.users} />   
            </div>        
        );
    }
}