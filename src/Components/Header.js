import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

const headerItems = [
    {text: 'Home', url:'/'},
    {text: 'Filmografia', url:'/'},
    {text: 'Galeria', url:'/'},
    {text: 'Kontakt', url:'/'},
]

const myStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#111',
    color: 'white'
}

const Header = () => {
    return (
        <header style = {myStyle}>
            <Logo/>
            <Nav items = {headerItems}/>
        </header>
    )
}

export default Header;