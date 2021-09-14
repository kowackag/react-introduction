import React from 'react';

const filmList = [
    {title:'Służba całym życiem ...', genre: 'Film dokumentalny', year: '2020', creator: 'Zdjęcia, Operator kamery', url: 'https://filmpolski.pl/fp/index.php?film=1255832'},
    {title:'Panie na zamku', genre: 'Film dokumentalny', year: '2018', creator: 'Zdjęcia, Scenariusz, Reżyseria', url: 'https://filmpolski.pl/fp/index.php?film=1248673'},
    {title:'Pewnego razu w listopadzie', genre: 'Film dokumentalny', year: '2017', creator: 'Operator kamery (w zdjęciach dokumentalnych)', url: 'https://filmpolski.pl/fp/index.php?film=1242415'},
    {title:'Wkręceni 2', genre: 'Film dokumentalny', year: '2015', creator: 'Operator kamery', url: 'https://filmpolski.pl/fp/index.php?film=1236586'},
    {title:'Świat Józefa', genre: 'Film dokumentalny', year: '2009', creator: 'Zdjęcia', url: 'https://filmpolski.pl/fp/index.php?film=1234805'},
    {title:'Szpital odzyskanej nadzieji', genre: 'Telenowela', year: '2009', creator: 'Zdjęcia', url: 'https://filmpolski.pl/fp/index.php?film=4222919'},
    {title:'Moje wybory (z cyklu: Sprawiedliwi)', genre: 'Film dokumentalny', year: '2007', creator: 'Zdjęcia', url: 'https://filmpolski.pl/fp/index.php?film=4222182'},
    {title:'Moja wielka rodzina (z cyklu: Sprawiedliwi)', genre: 'Film dokumentalny', year: '2007', creator: 'Zdjęcia', url: 'https://filmpolski.pl/fp/index.php?film=4222351'},
    {title:'Dzieci dwojga rodziców (z cyklu: Sprawiedliwi)', genre: 'Film dokumentalny', year: '2007', creator: 'Zdjęcia', url: 'https://filmpolski.pl/fp/index.php?film=4222364'},
    {title:'Nigdy ne poznam ich imienia (z cyklu: Sprawiedliwi)', genre: 'Film dokumentalny', year: '2007', creator: 'Zdjęcia', url: 'https://filmpolski.pl/fp/index.php?film=4222530'},
    {title:'Dom dzieci (z cyklu: Sprawiedliwi)', genre: 'Film dokumentalny', year: '2007', creator: 'Zdjęcia', url: 'https://filmpolski.pl/fp/index.php?film=4222547'},
    {title:'Nasi sąsiedzi (z cyklu: Sprawiedliwi)', genre: 'Film dokumentalny', year: '2006', creator: 'Zdjęcia', url: 'https://filmpolski.pl/fp/index.php?film=4222109'},
    {title:'Miłość była jego siłą (z cyklu: Sprawiedliwi)', genre: 'Film dokumentalny', year: '2006', creator: 'Zdjęcia', url: 'https://filmpolski.pl/fp/index.php?film=4222140'},
    {title:'Skąd przybywa Benedykt XVI?', genre: 'Film dokumentalny', year: '2006', creator: 'Zdjęcia', url: 'https://filmpolski.pl/fp/index.php?film=4221121'},
    {title:'Park', genre: 'Film dokumentalny', year: '1999', creator: 'Zdjęcia, Scenariusz, Reżyseria', url: 'https://filmpolski.pl/fp/index.php?film=1255832'},
]
const style = {
    padding: '10px 0',
    listStyle: 'none'
}

const itemStyle ={
    display: 'inline-block', 
    margin: '0 20px 0 0'
}

const linkStyle = {
    fontSize: '18px',
    color: '#F6F5F5'
}

const Film = () => {
    return (
        <ul style= {style}> {
            filmList.map(item => {
                const { title, url, genre, year,creator } = item;
                return (
                <li><a href = {url} style= {linkStyle}>{title}</a>
                    <ul style= {style}>
                        <li style = {itemStyle}>{year}</li>
                        <li style = {itemStyle}>{genre}</li>
                        <li style = {itemStyle}>{creator}</li>
                    </ul>
                </li>
                )
            })
        }
        </ul>
    )
}

export default Film;