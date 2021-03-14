import React from 'react';

export const GrifGridItem=({url, title})=>{
    // console.log(img);
    return(
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}