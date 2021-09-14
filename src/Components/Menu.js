import React from 'react';
import MenuItem from './MenuItem'

const Menu = (props) => {
    const {items} = props;
    return (
        <ul> {
            items.map(item => {
                const { text, url } = item;
                return <MenuItem text = {text} url = {url}/>
            })
        }
        </ul>
    )
}

export default Menu;