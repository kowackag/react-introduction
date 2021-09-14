import React from 'react';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import ContentMain from './ContentMain';

const style = {
    display: 'flex',
}

const Content = () => {
    return(
        <main style = {style}>
            <ContentLeft/>
            <ContentMain/>
            <ContentRight/>
        </main>
    )
}

export default Content; 