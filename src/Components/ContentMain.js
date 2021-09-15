import React from 'react';
import Section from './Section';
import Contact from './Contact';

const style = {
    flexGrow: '1',
    padding: '10px',
    borderTop: '2px solid black',
    borderBottom: '2px solid black',
    backgroundColor: '#343A40',
    color: 'white'
}

const titleStyle = {
    textTransform: 'uppercase',
    color: '#AF2E2E',
};

const ContentMain = (props) => {
    const {images} = props;
    return(
        <div style ={style}>
            <Section></Section>
            <section>
                <h2 style = {titleStyle}>Galeria</h2>
                {images}
            </section>
            <Contact></Contact>
        </div>
    ) 
}

export default ContentMain;