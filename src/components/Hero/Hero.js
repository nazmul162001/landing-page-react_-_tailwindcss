import React from 'react';
import img from '../../images/vector.png'


const Hero = () => {
  return (
    <section className='hero mt-10'>
      <div className="container">
        <div className="row grid gap-5 md:grid-cols-2 justify-between">
          <div className="content-left px-20">
            <h2 className='text-5xl font-mono text-gray-700 font-bold'>Before they sold out readymade gluten </h2>
            <p className='text-gray-500 py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quasi deleniti culpa inventore, dolorem, ipsam architecto veritatis blanditiis voluptatibus facilis est tenetur. Ut numquam minus ex fuga tempore et laborum!</p>
            <button className='btn bg-orange-400 px-4 py-2 rounded text-2xl hover:bg-indigo-500 transition duration-75'>Download CV</button>
            <button className='btn bg-indigo-300 px-4 py-2 rounded ml-3 text-2xl hover:bg-orange-500'>Hire me</button>
          </div>
          <div className="content-right">
            <img src= {img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;