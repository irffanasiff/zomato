import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import { IoMdArrowDropdown } from 'react-icons/io';
import { RiSearch2Line } from 'react-icons/ri';
import Logo from '../../Images/zomatoLogoBlack.png';

const MobileNav = () => {
  return (
    <div className='p-4 flex bg-white shadow-md items-center justify-between'>
      <div className='w-28'>
        <img src={Logo} alt='logo' className='' />
      </div>

      <div className='flex items-center gap-3'>
        <button className='bg-zomato-red text-white text-sm py-2 px-3 rounded-full'>
          Use App
        </button>
        <span className='border p-2 border-blue-300 text-blue-300 rounded-full'>
          <FaPizzaSlice className='' />
        </span>
      </div>
    </div>
  );
};

const DesktopNav = () => {
  return (
    <div className='hidden lg:inline container px-24 py-4 mx-auto'>
      <div className='hidden gap-4 w-full items-center justify-around lg:flex '>
        <div className='w-28'>
          <img src={Logo} alt='logo' className='w-full h-full' />
        </div>
        {/* search bar */}
        <div className=' w-3/4 bg-white shadow-md p-3 flex items-center gap-3  border border-gray-200 rounded'>
          <div className='flex items-center gap-2 border-r-2 border-gray-300 pr-2'>
            <span className='text-zomato-pink'>
              <TiLocation size={28} />
            </span>
            <input
              type='text'
              placeholder='Bengaluru'
              className=' focus:outline-none w-36'
            />
            <IoMdArrowDropdown />
          </div>
          <div className='flex w-full text-zomato-grey items-center gap-3'>
            <RiSearch2Line size={26} />
            <input
              type='search'
              placeholder='Search for Restaurant, Cuisine or a Dish'
              className='w-full focus:outline-none'
            />
          </div>
        </div>

        <div className='ml-8 flex gap-5'>
          <button className='text-gray-500 text-xl w-20 hover:text-gray-800'>
            Log In
          </button>
          <button className='text-gray-500 text-xl w-20 hover:text-gray-800'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className=''>
        <div className='md:hidden '>
          <MobileNav />
        </div>
        <div className='hidden lg:flex'>
          <DesktopNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
