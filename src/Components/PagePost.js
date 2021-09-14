import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const style = {
    margin: '0',
    padding: '0',
    fontFamily: 'Arial, sans-serif',
}


const PagePost = () => {
    return (
        <div style = {style}>
            <Header />
            <Content/>
            <Footer/>
        </div>
    )} 

export default PagePost;