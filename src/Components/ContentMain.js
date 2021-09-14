import React from 'react';
import Section from './Section';
import Gallery from './Gallery';
import Contact from './Contact';

const style = {
    flexGrow: '1',
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