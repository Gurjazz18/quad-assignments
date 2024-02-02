import React from 'react';
export const Summary = () => {
    const moviedata = JSON.parse(localStorage.getItem("movie"))
    return (
        <div className='summaryDesign'>
            
                <img src={moviedata?.show?.image?.original} alt="MovieName" height="420px" width="300px"/>
                <h3>{moviedata?.show?.summary}</h3>
         
            
        </div>
    )
}
