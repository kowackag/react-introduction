import React from 'react';
import Menu from './Menu'
import Film from './Film'

const title = 'Filmografia:';

const Section = () => {
    return (
        <section>
            <h2 className = "title">{title}</h2>
            <Film/>
        </section>
    )
}

export default Section;