import React from 'react';
import Card from '../Cards/Cards';

const AboutInfo = () => {
  return (
    <section className='about-info md:px-20 mt-20'>
      <div className="container">
        <div className="row grid md:grid-cols-2">
          <div className="about-title">
            <h2 className='text-3xl font-bold font-mono border-b-2 border-indigo-400 pb-2 inline-block'>About Our Works</h2>
          </div>
          <div className="about-details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et nostrum alias at quod, tempore laboriosam. Quaerat, mollitia itaque vel eaque officiis voluptatibus corporis sapiente. Ut iure sunt cumque quam.</p>
          </div>
        </div>
        <div className="row">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;