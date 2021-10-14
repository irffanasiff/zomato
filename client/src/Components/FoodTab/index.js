import React, { useState } from 'react';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { IoFastFoodOutline, IoNutritionOutline } from 'react-icons/io5';
import { BiDrink } from 'react-icons/bi';
import { useParams, Link } from 'react-router-dom';
import classnames from 'classnames';
import Delivery from '../../Images/delivery.avif';
import Diningout from '../../Images/diningout.avif';
import Nightlife from '../../Images/nightlife.webp';

const MobileTabs = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: `delivery`,
      icon: <RiShoppingBag3Line />,
      name: 'delivery',
      isActive: false,
    },
    {
      id: `diningout`,
      icon: <BiDrink />,
      name: 'Dining out',
      isActive: false,
    },
    {
      id: `nightlife`,
      icon: <IoFastFoodOutline />,
      name: 'Night life',
      isActive: false,
    },
    {
      id: `nutrition`,
      icon: <IoNutritionOutline />,
      name: 'Nutrition',
      isActive: false,
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className='lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border'>
        {allTypes.map((items) => (
          <Link to={`/${items.id}`}>
            <div
              className={
                type === items.id
                  ? 'flex flex-col relative items-center text-xl text-zomato-red '
                  : 'flex flex-col items-center text-xl '
              }
            >
              <div
                className={
                  type === items.id &&
                  'absolute -top-3 w-full h-2 border-t-2 border-zomato-red'
                }
              />
              {items.icon}
              <h5 className='text-sm'>{items.name}</h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const LargeTabs = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: `delivery`,
      image: Delivery,
      name: 'Delivery',
    },
    {
      id: `diningout`,
      image: Diningout,
      name: 'Dining out',
    },
    {
      id: `nightlife`,
      image: Nightlife,
      name: 'Night life',
    },
    {
      id: `nutrition`,
      image: Delivery,
      name: 'Nutrition',
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className='hidden lg:flex container px-60 mx-auto justify-between'>
        {allTypes.map((items) => (
          <Link to={`/${items.id}`}>
            <div
              className={classnames('flex items-center gap-4 pb-2  ', {
                'border-b-2 border-zomato-pink transition duration-700 ease-in-out':
                  type === items.id,
              })}
            >
              <div
                className={classnames(
                  'bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center',
                  { 'bg-yellow-100': type === items.id }
                )}
              >
                <img
                  src={items.image}
                  alt='Delivery'
                  className={classnames('w-1/2 h-1/2', {
                    'filter grayscale': type !== items.id,
                  })}
                />
              </div>
              <h3
                className={classnames('text-xl text-gray-500 ', {
                  'text-zomato-pink ': type === items.id,
                })}
              >
                {items.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
const FoodTab = () => {
  return (
    <>
      <div>
        <MobileTabs />
        <LargeTabs />
      </div>
    </>
  );
};

export default FoodTab;
