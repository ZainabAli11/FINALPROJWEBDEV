import React, { useContext, useEffect } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  useEffect(() => {
    const ids = food_list.map(item => item._id);
    const duplicates = ids.filter((id, idx) => ids.indexOf(id) !== idx);
    if (duplicates.length > 0) {
      console.warn("Duplicate IDs found in food_list:", duplicates);
    }
  }, [food_list]);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {food_list
          .filter(item => category === "All" || item.category === category)
          .map((item) => (
            <FoodItem
              key={item._id}               
              id={item._id}                
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
              category={item.category}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
