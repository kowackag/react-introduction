import React from 'react';

const style = {
    padding: '10px 0',
    listStyle: 'none'
}

const itemStyle ={
    display: 'inline-block', 
    margin: '0 20px 0 0'
}

const FilmItem = (props) => {
    const {elem} = props;
    const {genre, year,creator } = elem;
    return (
        <ul style= {style}>
            <li style = {itemStyle}>{year}</li>
            <li style = {itemStyle}>{genre}</li>
            <li style = {itemStyle}>{creator}</li>
        </ul>
    )
}

export default FilmItem;

 