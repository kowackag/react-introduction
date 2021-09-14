import React from 'react';
// import PropTypes from 'prop-types';

const itemStyle = {
    listStyle: 'none',
    padding: '0 20px'
}

const linkStyle = {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: '700',
    color: 'white'
}

const MenuItem = (props) => {
        const {url, text} = props;
        return (
            <li style = {itemStyle}><a href = {url} style = {linkStyle}>{text}</a></li>
        )
}

export default MenuItem;