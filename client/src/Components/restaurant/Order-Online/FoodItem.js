import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { AiOutlinePlus } from 'react-icons/ai';

const FoodItem = (props) => {
  return (
    <>
      <div className='flex items-start '>
        <div className='w-3/12 h-20 pr-1 md:h-28 lg:h-36  md:pr-3'>
          <img
            src={props.image}
            alt='food'
            className='w-full h-full rounded-lg'
          />
        </div>
        <div className='w-3/4 md:w-7/12 flex flex-col gap-1'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='text-sm md:text-2xl font-semibold'>
                {props.title}
              </h3>
              <div className='text-xs md:text-3xl'>              
                <ReactStars count={5} value={props.rating} size={20}/>
              </div>
            </div>
            <button className=' md:hidden text-xs flex items-center gap-1 text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg'>
              <AiOutlinePlus /> Add
            </button>
          </div>

          <h5 className='text-sm md:text-xl'>₹{props.price}</h5>
          <p className='truncate text-xs md:text-xl'>{props.description}</p>
        </div>
        <div className='hidden md:block w-2/12	'>
          <button className=' flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-4 py-2 rounded-lg'>
            <AiOutlinePlus /> Add
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
