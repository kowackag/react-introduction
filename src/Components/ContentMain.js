import React from 'react';
import Section from './Section';
// import Gallery from './Gallery';
import Contact from './Contact';

const style = {
    flexGrow: '1',
    padding: '10px',
    borderTop: '2px solid black',
    borderBottom: '2px solid black',
    backgroundColor: '#343A40',
    color: 'white'
}

const ContentMain = () => {
    return(
        <div style ={style}>
            <Section></Section>
            {/* <section content = {<Gallery/>}/> */}
            <Contact></Contact>
        </div>
    ) 
}

export default ContentMain;