import React from 'react';
import MenuItem from './MenuItem'

const style = {
    display: 'flex',
    padding: '0',
}

const Menu = (props) => {
    const {items} = props;
    return (
        <ul style ={style}> {
            items.map(item => {
                const { text, url } = item;
                return <MenuItem text = {text} url = {url}/>
            })
        }
        </ul>
    )
}

export default Menu;