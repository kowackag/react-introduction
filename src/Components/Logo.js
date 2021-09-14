import React from 'react';

const parStyle ={
    fontSize: '20px',
    fontWeight: '700'
}
const style = {
    display: 'inline-block',
    marginLeft: '10px'
}

const Logo = () => {
    return (
        <div> 
            <p className ="initials" style = {parStyle}>WW<i className="fas fa-camera-retro" style ={style}></i></p> 
        </div>
    )
}

export default Logo;