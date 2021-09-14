import React from 'react';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import ContentMain from './ContentMain';

const Content = () => {
    return(
        <main>
            <ContentLeft/>
            <ContentMain/>
            <ContentRight/>
        </main>
    )
}

export default Content; 