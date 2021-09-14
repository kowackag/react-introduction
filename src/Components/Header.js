import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

const headerItems = [
    {text: 'Home', url:'/'},
    {text: 'Filmografia', url:'/'},
    {text: 'Galeria', url:'/'},
    {text: 'Kontakt', url:'/'},
]

const Header = () => {
    return (
        <header>
            <Logo/>
            <Nav items = {headerItems}/>
        </header>
    )
}

export default Header;