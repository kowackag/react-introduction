import React from 'react';
import ReactDOM from 'react-dom';
import PagePost from './Components/PagePost'

const myStyle = {
    fontFamily: 'Arial',
    color: 'red'
}

ReactDOM.render(
    <PagePost style = {myStyle}/>,
    document.querySelector('#root')
);
