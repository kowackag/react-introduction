import React from 'react';
// import PropTypes from 'prop-types';

const MenuItem = (props) => {
    // render() {
        const {url, text} = props;
        return (
            <li><a href = {url}>{text}</a></li>
        )
}

export default MenuItem;