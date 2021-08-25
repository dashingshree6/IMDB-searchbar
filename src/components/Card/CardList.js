import React from 'react';
import Card from './Card';

const CardList = ({series}) => {
    const cardArray = series.map((user, i) => {
        return (
        <Card 
        key={i}
        src={series[i].image} 
        title={series[i].name} 
        category={series[i].category} 
        description={series[i].description}
        />
        )      
    })
    return (
        <div>
            {cardArray}
        </div>
    )
}
export default CardList;