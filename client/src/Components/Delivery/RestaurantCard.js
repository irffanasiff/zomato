import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';

const RestaurantCard = (props) => {
  return (
    <>
      <div className='bg-white p-4 w-full rounded-2xl transition duration-700 ease-in-out hover:shadow-lg md:w-1/2 lg:w-1/3'>
        <div className='w-full h-56 lg:h-64 relative'>
          <div className='absolute flex items-end w-full justify-between bottom-3'>
            <div className='flex flex-col gap-2 items-start'>
              {props.isPro && (
                <span className='text-sm bg-zomato-red text-white py-1 px-2 rounded'>
                  Pro extra 10% off
                </span>
              )}
              {props.isOff && (
                <span className='text-sm bg-blue-400  text-white py-1 px-2 rounded'>
                  ₹ {`${props.isOff}`} OFF
                </span>
              )}
            </div>
            <span className='bg-white bg-opacity-75 px-1 rounded mr-3'>
              {`&{props.durationOfDelivery}`} min
            </span>
          </div>
          <img
            src={props.photos.length && PushSubscriptionOptions.photos[0]}
            alt='food'
            className='w-full h-full rounded-lg'
          />
        </div>
        <div>
          <div className='flex justify-between py-2'>
            <h4 className='text-xl font-medium'>{props.name}</h4>
            <span className='flex  items-center lg:max-w-max gap-2 text-white bg-green-700 bg-opacity-75 px-1 rounded mr-3'>
              {props.restaurantReviewValue} <AiTwotoneStar />
            </span>
          </div>
          <div className='px-2 flex items-center justify-between text-zomato-grey '>
            <p>{props.cuisine.join(', ')}</p>
            <p>₹ {props.averageCost} for one</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
