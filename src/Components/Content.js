import React from 'react';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import ContentMain from './ContentMain';
import Gallery from './Gallery'
import imgList from './imgList.json'

const style = {
    display: 'flex',
}

const Content = () => {
    return(
        <main style = {style}>
            <ContentLeft/>
            <ContentMain images = {<Gallery content ={imgList}/>}/>
            <ContentRight/>
        </main>
    )
}

export default Content; 