import React from 'react';

// components
import FoodItem from './FoodItem';

const FoodList = (props) => {
  return (
    <div>
      <div className='flex flex-col gap-3'>
        <h2 className='bg-white top-0 w-full px-2 z-10 sticky text-2xl font-semibold'>
          {props.title}
        </h2>
        {props.items.map((item) => (
          <FoodItem {...item} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
