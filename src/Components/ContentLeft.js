import React from 'react'

const style = {
    padding: '10px',
    width: '25%',
    backgroundColor: '#F6F5F5',
    border: '2px solid black'
}

const ContentLeft = () => {
    return (
        <section style ={style}>
            <h2 className='name'>Wojciech Walkiewicz</h2>
            <img src='https://zpaf.pl/site_media/uploads/w-walkiewicz-290.jpg'/>
            <p className='description'>Wojciech Walkiewicz fotograf – urodzony w Kielcach. Absolwent Wydziału Radia i Telewizji Uniwersytetu Śląskiego w Katowicach, na kierunku operator obrazu filmowego i realizator TV oraz Policealnego Studium Fotograficznego w Warszawie. Autor zdjęć do filmów dokumentalnych, teledysków i cyklicznych programów telewizyjnych.</p>
        </section>
    )
}

export default ContentLeft;