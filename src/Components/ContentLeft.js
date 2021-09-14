import React from 'react'

const content = 'Wojciech Walkiewicz fotograf – urodzony w Kielcach. Absolwent Wydziału Radia i Telewizji Uniwersytetu Śląskiego w Katowicach, na kierunku operator obrazu filmowego i realizator TV oraz Policealnego Studium Fotograficznego w Warszawie. Autor zdjęć do filmów dokumentalnych, teledysków i cyklicznych programów telewizyjnych.'

const ContentLeft = () => {
    return (
        <section>
            <h2 className='name'>Wojciech Walkiewicz</h2>
            <img src='https://zpaf.pl/site_media/uploads/w-walkiewicz-290.jpg'/>
            <p className='description'>{content}</p>
        </section>
    )
}

export default ContentLeft;