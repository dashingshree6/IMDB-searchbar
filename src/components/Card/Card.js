import React from 'react';
import './Card.css'

const Card = ({src, title, category, description}) => {
    return (
        <div className='w-30 h-m bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='series' src={src} />
            <div>
                <h2>{title}</h2>
                <span><strong>{category}</strong></span>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;
