import React from 'react';
import FilmItem from './FilmItem'
import filmList from './FilmList.json'

const style = {
    padding: '10px 0',
    listStyle: 'none'
}

const linkStyle = {
    fontSize: '18px',
    color: '#F6F5F5'
}

const Film = () => {
    return (
        <ul style= {style}> {
            filmList.map(item => {
                const { title, url} = item;
                return (
                <li><a href = {url} style= {linkStyle}>{title}</a> 
                   <FilmItem elem = {item}/>
                </li>
                )
            })
        }
        </ul>
    )
}

export default Film;