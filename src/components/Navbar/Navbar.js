import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
  const routes = [
    {id: 1, name: 'Home', link: '/home'},
    {id: 2, name: 'Shop', link: '/shop'},
    {id: 3, name: 'Deals', link: '/deals'},
    {id: 4, name: 'Coupons', link: '/coupons'},
    {id: 5, name: 'Contact', link: '/contact'}
  ]
  return (
    <nav className='bg-indigo-300 h-20 flex flex-col md:flex-row justify-between items-center md:px-20'>
      <div className="logo">
        <h1 className='text-3xl font-bold font-mono'>Logo</h1>
      </div>
      <ul className='flex justify-center'>
        {
          routes.map(route => <Link 
          key = {route.id}
          route = {route}
          />)
        }
      </ul>
    </nav>
  );
};

export default Navbar;