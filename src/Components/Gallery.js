import React from 'react'

const Gallery = props => {
    const {content} = props;
    return (
        content.map(element => {
           const {url, title, info} = element;
           return( 
               <div> 
                     <figure>
                        <img src={url} alt = {info}/>
                        <figcaption>{title}</figcaption>
                    </figure>
                </div>)
        })
    )
}
export default Gallery;