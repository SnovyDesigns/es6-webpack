import '../../sass/Search.scss';

import React from 'react';
import createReactClass from 'create-react-class';


const Search = createReactClass({
    getInitialState: function() {
        return {
            searchingText: ''
        };
    },
    render: function() {
        return (
            <input 
                type="text" 
                className="search" 
                placeholder="Tutaj wpisz wyszukiwaną frazę" 
                value={this.state.searchingText} 
                onChange={this.handleChange} 
                onKeyUp={this.handleKeyUp}
            />
        );
    },
    handleChange: function(event) {
        let searchingText = event.target.value;
        this.setState({
            searchingText: searchingText
        });
        if (searchingText.length > 2) {
            this.props.onSearch(searchingText);
        }
    },
    handleKeyUp: function(event) {
        if (event.keyCode === 13) {
            this.props.onSearch(this.state.searchingText);
        }
    }
});

export default Search;