import React from 'react';
import MenuItemIcon from './MenuItemIcon'

const style = {
    display: 'flex',
    padding: '0',
}

const MenuIcon = (props) => {
    const {items} = props;
    return (
        <ul style ={style}> {
            items.map(item => {
                const { text, url } = item;
                return <MenuItemIcon text = {text} url = {url}/>
            })
        }
        </ul>
    )
}

export default MenuIcon;