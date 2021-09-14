import React from 'react';
import Menu from './Menu'
import Film from './Film'

const title = 'Filmografia:';
const style = {
    textTransform: 'uppercase',
    color: '#AF2E2E',
};

const Section = () => {
    return (
        <section>
            <h2 className = "title" style ={style}>{title}</h2>
            <Film/>
        </section>
    )
}

export default Section;