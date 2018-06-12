import '../../sass/Gif.scss';

import React from 'react';
import createReactClass from 'create-react-class';

const GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';

const Gif = createReactClass({
    getUrl: function() {
        return this.props.sourceUrl || GIPHY_LOADING_URL;
    },
    render: function() {
        let url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;
        return (
            <div className="gif-container">
                <a href={this.getUrl()} title='view this on giphy' target='new'>
                    <img id='gif' src={url} />
                </a>
            </div>
        );
    }
});

export default Gif;