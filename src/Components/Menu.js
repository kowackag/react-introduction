import React from 'react';
import MenuItem from './MenuItem'

const MenuItems = [
    {text: 'About me', url:'/'},
    {text: 'Skills', url:'/'},
    {text: 'Projects', url:'/'},
    {text: 'Contact', url:'/'},
]

const Menu = () => {
    return (
        <ul> {
            MenuItems.map(item => {
                const { text, url } = item;
                return <MenuItem text = {text} url = {url}/>
            })
        }
        </ul>
    )
}

export default Menu;