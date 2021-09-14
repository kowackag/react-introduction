import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content'


const PagePost = () => {
    return (
        <>
            <Header/>
            <Content/>
            <Footer/>
        </>
    )} 

ReactDOM.render(
    <PagePost/>,
    document.querySelector('#root')
);
