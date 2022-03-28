import React from 'react';

const SingleCard = (props) => {
  const {name, subTitle, description, img} = props.card
  return (
    <div style={{height: '500px'}} className='single-card shadow-2xl shadow-slate-700 rounded-xl p-3 relative'>
      <img style={{height: '300px', width: '100%', padding: '20px'}} src= {img} alt="" />
      <h2 className=''> <span className='font-bold text-xl text-indigo-500'>Name: </span> {name}</h2>
      <h3 className=''><span className='font-bold text-xl text-indigo-500'>Subtitle: </span> {subTitle}</h3>
      <p className='text-gray-500 pt-5'>{description}</p>
      <button className='absolute bottom-0 w-full bg-gray-400 left-0 rounded-b-xl'>Visit Our Plan</button>
    </div>
  );
};

export default SingleCard;