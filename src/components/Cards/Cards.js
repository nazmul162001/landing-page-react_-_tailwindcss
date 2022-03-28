import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Card = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCards(data))
  },[])
  return (
    <div className='card-container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
      {
        cards.map(card => <SingleCard 
        key = {card.id}
        card = {card}
        />)
      }
    </div>
  );
};

export default Card;