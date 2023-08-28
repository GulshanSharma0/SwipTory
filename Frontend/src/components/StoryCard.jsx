import React from 'react';
import '../styles/StoryCard.css';

const StoryCard = ({data}) => {
  return (
    <div style={{backgroundImage:`url(${data.imageUrl})`}} className='StoryCard'>
        <div className='Story-Header-Description-Container'>
            <h2 className='Story-Header'>{data?.heading}</h2>
            <p className='Story-Description'>{data?.description}</p>
        </div>
    </div>
  )
}

export default StoryCard;