import React from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';

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

const MenuItemIcon = (props) => {
    const { url, text } = props;
    return (
        <li style={itemStyle}><a href={url} style={linkStyle}><Icon name = {text}/></a></li>
    )
}

MenuItemIcon.propTypes = {
    url: PropTypes.string,
}

export default MenuItemIcon;