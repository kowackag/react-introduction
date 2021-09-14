import React from 'react';
import Section from './Section';
import Gallery from './Gallery';
import Contact from './Contact';

const ContentMain = () => {
    return(
        <>
            <Section></Section>
            <section content = {<Gallery/>}/>
            <Contact></Contact>
        </>
    ) 
}

export default ContentMain;