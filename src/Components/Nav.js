import React from 'react';
import Menu from './Menu'

const Nav = (props) => {
    const {items} = props
    return (
        <nav>
             <Menu items = {items} />
        </nav>
    )
}

export default Nav;